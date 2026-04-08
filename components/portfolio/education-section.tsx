"use client"

import { motion, Variants } from "framer-motion"
import { useLanguage } from "@/context/language-context"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export function EducationSection() {
  const { content } = useLanguage()
  const { education, ui } = content

  return (
    <section className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.p variants={itemVariants} className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            {ui.education.badge}
          </motion.p>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {ui.education.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-xl mx-auto">
            {ui.education.subtitle}
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          {education.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative pl-12 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              
              {/* Timeline dot */}
              <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-primary" />
              
              {/* Content */}
              <div className="bg-card border border-border p-8 hover:border-primary/30 transition-all duration-500 group relative">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-4xl font-bold tracking-tighter">0{index + 1}</span>
                </div>
                <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4">
                  {item.period}
                </p>
                <h3 
                  className="text-2xl font-bold text-foreground mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                  {item.description}
                </p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {item.items.map((listItem, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      <span className="w-1 h-1 bg-primary/50 mt-2 shrink-0 rounded-full" />
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
