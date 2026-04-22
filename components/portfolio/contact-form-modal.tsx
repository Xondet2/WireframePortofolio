"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Mail, Send, Phone, User, MessageSquare, Tag } from "lucide-react"
import { toast } from "sonner"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

interface ContactFormModalProps {
  children: React.ReactNode
}

export function ContactFormModal({ children }: ContactFormModalProps) {
  const { language } = useLanguage()
  const [open, setOpen] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const t = {
    es: {
      title: "Enviar un mensaje",
      description: "Completa el siguiente formulario y me pondré en contacto contigo lo antes posible.",
      name: "Nombre completo",
      email: "Correo electrónico (Gmail preferido)",
      phone: "Teléfono (Opcional)",
      subject: "Asunto / Proyecto",
      message: "Tu mensaje",
      placeholderName: "Ej: Juan Pérez",
      placeholderEmail: "Ej: juan@gmail.com",
      placeholderPhone: "Ej: +57 300 123 4567",
      placeholderSubject: "Ej: Colaboración en proyecto IA",
      placeholderMessage: "Cuéntame un poco más sobre tu idea...",
      submit: "Enviar Mensaje",
      sending: "Enviando...",
      val_name_min: "El nombre debe tener al menos 2 caracteres.",
      val_name_regex: "El nombre solo puede contener letras.",
      val_email: "Por favor, introduce un correo electrónico válido.",
      val_email_gmail: "Se prefiere una cuenta de Gmail (@gmail.com).",
      val_phone: "Por favor, introduce un número de teléfono válido.",
      val_subject_min: "El asunto debe tener al menos 5 caracteres.",
      val_message_min: "El mensaje debe tener al menos 10 caracteres.",
    },
    en: {
      title: "Send a message",
      description: "Fill out the form below and I'll get back to you as soon as possible.",
      name: "Full Name",
      email: "Email Address (Gmail preferred)",
      phone: "Phone Number (Optional)",
      subject: "Subject / Project",
      message: "Your message",
      placeholderName: "e.g., John Doe",
      placeholderEmail: "e.g., john@gmail.com",
      placeholderPhone: "e.g., +1 123 456 7890",
      placeholderSubject: "e.g., AI project collaboration",
      placeholderMessage: "Tell me more about your idea...",
      submit: "Send Message",
      sending: "Sending...",
      val_name_min: "Name must be at least 2 characters.",
      val_name_regex: "Name can only contain letters.",
      val_email: "Please enter a valid email address.",
      val_email_gmail: "A Gmail account is preferred (@gmail.com).",
      val_phone: "Please enter a valid phone number.",
      val_subject_min: "Subject must be at least 5 characters.",
      val_message_min: "Message must be at least 10 characters.",
    }
  }[language === "es" ? "es" : "en"]

  const formSchema = z.object({
    name: z.string().min(2, {
      message: t.val_name_min,
    }).regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: t.val_name_regex,
    }),
    email: z.string().email({
      message: t.val_email,
    }).refine((email) => email.endsWith("@gmail.com"), {
      message: t.val_email_gmail,
    }),
    phone: z.string().optional().refine((val) => !val || /^\+?[\d\s-]{7,15}$/.test(val), {
      message: t.val_phone,
    }),
    subject: z.string().min(5, {
      message: t.val_subject_min,
    }),
    message: z.string().min(10, {
      message: t.val_message_min,
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simular envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    console.log(values)
    setIsSubmitting(false)
    setOpen(false)
    form.reset()
    
    toast.success(
      language === "es" 
        ? "¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto."
        : "Message sent successfully! I'll get back to you soon."
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Mail className="w-6 h-6 text-primary" />
            {t.title}
          </DialogTitle>
          <DialogDescription>
            {t.description}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      {t.name}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={t.placeholderName} {...field} className="bg-muted/30" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      {t.email}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={t.placeholderEmail} {...field} className="bg-muted/30" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      {t.phone}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={t.placeholderPhone} {...field} className="bg-muted/30" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-muted-foreground" />
                      {t.subject}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={t.placeholderSubject} {...field} className="bg-muted/30" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-muted-foreground" />
                    {t.message}
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder={t.placeholderMessage} 
                      className="min-h-[120px] bg-muted/30 resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="pt-4">
              <Button 
                type="submit" 
                className="w-full sm:w-auto gap-2 h-12 px-8 rounded-full font-bold uppercase tracking-widest text-xs"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    {t.sending}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t.submit}
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
