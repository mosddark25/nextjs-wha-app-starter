"use client"

import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { CheckCircle, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldError,
} from "@/components/ui/field"
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact"

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isPending, startTransition] = useTransition()

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (values: ContactFormValues) => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        })

        const data = await response.json()

        if (!response.ok || !data.success) {
          toast.error(data.error || "เกิดข้อผิดพลาด กรุณาลองใหม่")
          return
        }

        form.reset()
        setIsSuccess(true)
      } catch {
        toast.error("ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้ กรุณาลองใหม่")
      }
    })
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center text-center gap-4 py-8">
        <CheckCircle className="size-12 text-green-500" />
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">ส่งข้อความสำเร็จ</h3>
          <p className="text-muted-foreground">
            ขอบคุณที่ติดต่อเรา เราจะตอบกลับโดยเร็วที่สุด
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => setIsSuccess(false)}
          disabled={isPending}
        >
          ส่งข้อความอีกครั้ง
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <Field orientation="vertical">
        <FieldLabel htmlFor="name">ชื่อ</FieldLabel>
        <FieldContent>
          <Input
            id="name"
            placeholder="กรอกชื่อของคุณ"
            {...form.register("name")}
            disabled={isPending}
            aria-invalid={form.formState.errors.name ? "true" : "false"}
          />
          <FieldError errors={form.formState.errors.name ? [{ message: form.formState.errors.name.message }] : undefined} />
        </FieldContent>
      </Field>

      <Field orientation="vertical">
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <FieldContent>
          <Input
            id="email"
            type="email"
            placeholder="example@email.com"
            {...form.register("email")}
            disabled={isPending}
            aria-invalid={form.formState.errors.email ? "true" : "false"}
          />
          <FieldError errors={form.formState.errors.email ? [{ message: form.formState.errors.email.message }] : undefined} />
        </FieldContent>
      </Field>

      <Field orientation="vertical">
        <FieldLabel htmlFor="message">ข้อความ</FieldLabel>
        <FieldContent>
          <Textarea
            id="message"
            rows={5}
            placeholder="พิมพ์ข้อความที่ต้องการ..."
            {...form.register("message")}
            disabled={isPending}
            aria-invalid={form.formState.errors.message ? "true" : "false"}
          />
          <FieldError errors={form.formState.errors.message ? [{ message: form.formState.errors.message.message }] : undefined} />
        </FieldContent>
      </Field>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            <span>กำลังส่ง...</span>
          </>
        ) : (
          "ส่งข้อความ"
        )}
      </Button>
    </form>
  )
}