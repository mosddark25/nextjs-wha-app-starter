import { contactSchema } from "@/lib/validations/contact"
import { Resend } from "resend"

export async function POST(request: Request) {
  const resend = new Resend(process.env.SMTP_PASS)
  try {
    const body = await request.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return Response.json(
        { success: false, error: result.error.issues[0].message },
        { status: 400 }
      )
    }

    const { name, email, message } = result.data

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      subject: `ข้อความใหม่จาก ${name}`,
      text: `
ชื่อ: ${name}
อีเมล: ${email}
ข้อความ: ${message}
      `,
      replyTo: email,
    })

    return Response.json({ success: true, data: { message: "ส่งข้อความสำเร็จ" } })
  } catch (error) {
    console.error("Contact form error:", error)
    return Response.json(
      { success: false, error: "ไม่สามารถส่งอีเมลได้ กรุณาลองใหม่ในภายหลัง" },
      { status: 500 }
    )
  }
}