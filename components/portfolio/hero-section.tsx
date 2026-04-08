"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"

export function HeroSection() {
  const { content } = useLanguage()
  const { personalInfo, ui } = content

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background animated elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-[10%] right-[10%] w-[30%] h-[30%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Avatar/Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="relative group">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-border bg-card flex items-center justify-center shadow-2xl relative z-10"
                >
                  <Image
                    src={personalInfo.avatarUrl}
                    alt={`Foto de ${personalInfo.name}`}
                    width={384}
                    height={384}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                </motion.div>
                {/* Decorative rings */}
                <div className="absolute inset-0 border-2 border-primary/20 rounded-full scale-110 animate-[ping_3s_linear_infinite] opacity-20" />
                <div className="absolute inset-0 border border-primary/10 rounded-full scale-125" />
              </div>
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xs font-bold tracking-[0.2em] uppercase text-primary"
              >
                {personalInfo.title}
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground text-balance leading-[0.9]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {ui.hero.greeting} <span className="text-primary">{personalInfo.name.split(' ')[0]}</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed"
              >
                {personalInfo.description}
              </motion.p>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground leading-relaxed max-w-lg text-lg"
            >
              {personalInfo.longDescription}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button asChild size="lg" className="gap-2 h-14 px-8 text-base rounded-full group">
                <Link href="#proyectos">
                  {ui.hero.viewProjects}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 h-14 px-8 text-base rounded-full hover:bg-primary/5 transition-colors">
                <Link href="#contacto">
                  <Mail className="w-4 h-4" />
                  {ui.hero.contact}
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
