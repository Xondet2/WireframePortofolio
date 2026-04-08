"use client"

import { motion, Variants } from "framer-motion"
import { useLanguage } from "@/context/language-context"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export function TechnologiesSection() {
  const { content, language } = useLanguage()
  const { technologies, ui } = content

  return (
    <section key={`technologies-${language}`} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.p variants={itemVariants} className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            {ui.technologies.badge}
          </motion.p>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {ui.technologies.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-xl mx-auto">
            {ui.technologies.subtitle}
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              className="px-6 py-3 bg-card border border-border text-sm font-bold uppercase tracking-widest text-foreground transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 rounded-full"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
