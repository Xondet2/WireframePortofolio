"use client"

import { Button } from "@/components/ui/button"
import { Mail, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { useLanguage } from "@/context/language-context"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export function ContactSection() {
  const { content } = useLanguage()
  const { socialLinks, ui } = content

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.p variants={itemVariants} className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            {ui.contact.badge}
          </motion.p>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {ui.contact.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-12 max-w-md mx-auto">
            {ui.contact.subtitle}
          </motion.p>

          <motion.div 
            variants={containerVariants}
            className="grid gap-4 mb-12"
          >
            {socialLinks.map((link) => (
              <motion.div key={link.label} variants={itemVariants}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between p-6 bg-card border border-border transition-all duration-300 group hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 rounded-2xl"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 border border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/5 rounded-xl">
                      <link.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1">{link.label}</p>
                      <p className="text-foreground font-bold text-lg">{link.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button size="lg" className="gap-2 group h-14 px-10 rounded-full text-base font-bold uppercase tracking-widest">
              <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
              {ui.contact.send}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
