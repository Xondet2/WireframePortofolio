"use client"

import { Navbar } from "@/components/portfolio/navbar"
import { Footer } from "@/components/portfolio/footer"
import { useLanguage } from "@/context/language-context"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { content } = useLanguage()
  const { blogPosts, ui } = content
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) return <div>Post no encontrado</div>

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          {ui.blog.back}
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest font-bold mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readingTime}
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-primary/70 bg-primary/5 px-2 py-1 border border-primary/10 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6 py-2 mb-12">
            {post.excerpt}
          </p>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Este es un ejemplo de contenido para tu blog. Aquí podrías escribir tus tutoriales, reflexiones y experiencias como desarrollador. 
              Utilizar Next.js con MDX o un CMS te permitiría gestionar estos contenidos de forma profesional.
            </p>
            <p>
              En el futuro de la IA aplicada al desarrollo web, veremos una integración mucho más profunda de herramientas que no solo sugieren código, 
              sino que entienden el contexto completo de la arquitectura de una aplicación.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Explorando nuevas fronteras</h2>
            <p>
              La adopción de Next.js 15 y React 19 marca un punto de inflexión en cómo manejamos el renderizado en el servidor y las acciones de cliente. 
              La eficiencia y la experiencia de desarrollo se han elevado a niveles sin precedentes.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
