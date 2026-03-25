"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Typewriter from "typewriter-effect"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Avatar/Image */}
          <div
            className={`order-2 lg:order-1 flex justify-center lg:justify-start transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-border bg-card flex items-center justify-center">
                  <Image
                    src="/face.webp"
                    alt="Foto de David"
                    width={384}
                    height={384}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div
              className={`space-y-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                Desarrollador de Software
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground text-balance"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <Typewriter
                  options={{
                    strings: ["Hola, soy David"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p
                className={`text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                Desarrollador enfocado en software, inteligencia artificial y proyectos creativos
              </p>
            </div>

            <p
              className={`text-muted-foreground leading-relaxed max-w-lg transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Estudiante apasionado por la tecnología, el diseño de sistemas y la creación de
              experiencias digitales innovadoras. Me especializo en desarrollo web y exploración
              de soluciones con IA.
            </p>

            <div
              className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <Button asChild size="lg" className="gap-2">
                <Link href="#proyectos">
                  Ver proyectos
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="#contacto">
                  <Mail className="w-4 h-4" />
                  Contactar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}