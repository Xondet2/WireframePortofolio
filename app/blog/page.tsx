"use client"

import { Navbar } from "@/components/portfolio/navbar"
import { Footer } from "@/components/portfolio/footer"
import { useLanguage } from "@/context/language-context"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export default function BlogPage() {
  const { content } = useLanguage()
  const { blogPosts, ui } = content

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <header className="max-w-3xl mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            {ui.blog.badge}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            {ui.blog.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {ui.blog.subtitle}
          </p>
        </header>

        <div className="grid gap-12 max-w-4xl">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group relative">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest font-bold">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readingTime}
                  </div>
                </div>
                
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-3xl font-bold group-hover:text-primary transition-colors duration-300" style={{ fontFamily: 'var(--font-heading)' }}>
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-primary/70 bg-primary/5 px-2 py-1 border border-primary/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest group/link mt-2">
                  {ui.blog.readMore}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
