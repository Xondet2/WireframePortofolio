"use client"

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

export function SkillsSection() {
  const { content } = useLanguage()
  const { skills, ui } = content

  return (
    <section id="habilidades" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.p variants={itemVariants} className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-4">
            {ui.skills.badge}
          </motion.p>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {ui.skills.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-xl mx-auto">
            {ui.skills.subtitle}
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Skills Grid Layout */}
          {skills.map((category) => (
            <motion.div 
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card/50 backdrop-blur-md border border-border p-8 hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(var(--primary),0.2)] group relative overflow-hidden"
            >
              {/* Glassmorphism gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 
                className="text-xl font-bold text-foreground mb-6 pb-4 border-b border-border transition-colors duration-300 group-hover:border-primary/30"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm bg-muted/50 text-muted-foreground border border-border rounded-full transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
