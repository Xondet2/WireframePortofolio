"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const projects = [
  {
    title: "AXI – Aplicación de Dibujo Creativo",
    description: "Aplicación enfocada en desarrollar la creatividad mediante ejercicios interactivos para todas las edades.",
    tags: ["Creatividad", "Interactivo", "UI/UX"],
  },
  {
    title: "SmartMarketAI",
    description: "Scraper inteligente de páginas web para análisis de benchmarking utilizando inteligencia artificial.",
    tags: ["Python", "IA", "Web Scraping", "Análisis"],
  },
  {
    title: "Proyectos de Bases de Datos",
    description: "Análisis y modelado de sistemas de información utilizando diagramas entidad-relación.",
    tags: ["SQL", "Modelado", "Análisis"],
  },
]

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section id="proyectos" ref={ref} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-4">
            Portafolio
          </p>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Proyectos
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Una selección de proyectos en los que he trabajado, combinando tecnología y creatividad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group bg-card border border-border transition-all duration-700 hover:border-foreground/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Project Preview */}
              <div className="aspect-video bg-muted border-b border-border flex items-center justify-center">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Preview</span>
              </div>
              
              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 
                  className="text-lg font-semibold text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="gap-2 p-0 h-auto hover:bg-transparent hover:text-foreground group/btn">
                  Ver proyecto
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
