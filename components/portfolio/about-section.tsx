"use client"

import { Code2, Brain, Lightbulb } from "lucide-react"
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

export function AboutSection() {
  const { content, language } = useLanguage()
  const { personalInfo, highlights, ui } = content

  return (
    <section key={`about-${language}`} id="sobre-mi" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.p variants={itemVariants} className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            {ui.about.badge}
          </motion.p>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {ui.about.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {ui.about.intro} {personalInfo.fullName}, {personalInfo.longDescription.toLowerCase()}
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-px bg-border overflow-hidden border border-border"
        >
          {highlights.map((item) => (
            <motion.div 
              key={item.title}
              variants={itemVariants}
              className="bg-card p-10 group hover:bg-muted/50 transition-colors duration-500"
            >
              <div className="w-14 h-14 border border-border flex items-center justify-center mb-8 transition-all duration-500 group-hover:border-primary/50 group-hover:bg-primary/5">
                <item.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 
                className="text-xl font-bold text-foreground mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
