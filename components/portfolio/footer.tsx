"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

import { useLanguage } from "@/context/language-context"

export function Footer() {
  const { content } = useLanguage()
  const { personalInfo, socialLinks } = content

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p 
            className="text-sm font-medium text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {personalInfo.name}
          </p>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="w-8 h-8 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
          
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} — {personalInfo.fullName}
          </p>
        </div>
      </div>
    </footer>
  )
}
