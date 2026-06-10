import { ContactForm } from "./contact-form"
import { Mail, Phone, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          ติดต่อเรา
        </h1>
        <p className="text-lg text-muted-foreground">
          มีคำถามหรือต้องการความช่วยเหลือ? ส่งข้อความมาหาเราได้เลยครับ
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-8 md:gap-12">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="size-5 text-muted-foreground shrink-0" />
              <span className="text-muted-foreground">support@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="size-5 text-muted-foreground shrink-0" />
              <span className="text-muted-foreground">02-123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="size-5 text-muted-foreground shrink-0" />
              <span className="text-muted-foreground">
                จันทร์-ศุกร์ 9:00-18:00 น.
              </span>
            </div>
          </div>
          <Separator />
          <p className="text-muted-foreground">
            ทีมงานของเราพร้อมช่วยเหลือคุณตลอดเวลาทำการ
            หากนอกเวลาทำการ สามารถส่งข้อความผ่านฟอร์มด้านขวาได้เลยครับ
          </p>
        </div>

        <div className="bg-card border rounded-2xl p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </main>
  )
}