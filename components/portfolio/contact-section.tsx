"use client"

import { Button } from "@/components/ui/button"
import { Mail, Github, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:david.ordonezla@campusucc.edu.co",
    value: "david.ordonezla@campusucc.edu.co",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Xondet2",
    value: "@Xondet2",
  },
]

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section id="contacto" ref={ref} className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-4">
            Conectemos
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Contacto
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-md mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme.
          </p>

          <div
            className={`space-y-3 mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {socialLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-4 bg-card border border-border transition-all duration-300 group hover:border-foreground/20 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center">
                    <link.icon className="w-4 h-4 text-foreground" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{link.label}</p>
                    <p className="text-foreground text-sm">{link.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>

          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <Link href="mailto:david.ordonezla@campusucc.edu.co">
              <Button size="lg" className="gap-2">
                <Mail className="w-4 h-4" />
                Enviar mensaje
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}