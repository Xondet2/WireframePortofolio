"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

export function ProjectsSection() {
  const { content } = useLanguage()
  const { projects, ui } = content

  return (
    <section id="proyectos" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.p variants={itemVariants} className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            {ui.projects.badge}
          </motion.p>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {ui.projects.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-xl mx-auto">
            {ui.projects.subtitle}
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-card border border-border overflow-hidden flex flex-col h-full hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_40px_-15px_rgba(var(--primary),0.1)]"
            >
              {/* Project Preview */}
              <div className="aspect-video bg-muted border-b border-border flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <span className="text-xs text-muted-foreground uppercase tracking-widest group-hover:scale-110 transition-transform duration-500 z-20">Preview</span>
                
                {/* Floating tags on image */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                  {project.tags.slice(0, 1).map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-background/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider border border-border rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-8 space-y-4 flex-grow flex flex-col">
                <h3 
                  className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-3 text-sm flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground bg-muted/30 border border-border transition-all duration-300 group-hover:border-primary/20 group-hover:text-primary/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-6">
                  <Button variant="ghost" size="sm" className="gap-2 p-0 h-auto hover:bg-transparent hover:text-primary group/btn font-bold uppercase tracking-widest text-xs">
                    {ui.projects.explore}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
