"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/context/language-context"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { content } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isHashLink = href.startsWith("/#")
    
    // Always close menu on click
    setIsOpen(false)

    if (isHashLink && pathname === "/") {
      e.preventDefault()
      const targetId = href.replace("/#", "")
      const element = document.getElementById(targetId)
      if (element) {
        const navbarHeight = 80
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - navbarHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      }
    }
    // For other links (like /blog or hash links from other pages), 
    // we let the default Link behavior handle it.
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-sm border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/#inicio"
            onClick={(e) => handleSmoothScroll(e, "/#inicio")}
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground cursor-pointer group"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <div className="relative w-8 h-8 flex items-center justify-center bg-primary/5 rounded-lg border border-primary/10 group-hover:border-primary/30 transition-colors">
              <Image 
                src="/gemini-svg.svg" 
                alt="Logo" 
                width={20} 
                height={20} 
                className="w-5 h-5"
              />
            </div>
            <span>
              {content.personalInfo.name}
              <span className="block h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {content.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer hover:text-primary ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 border-l border-border pl-8">
              <LanguageToggle />
              <ThemeToggle />
              <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="gap-2 h-10 px-6 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-primary/5 transition-colors">
                  <Download className="w-4 h-4" />
                  CV
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-border"
            >
              <div className="px-2 pt-2 pb-6 space-y-1">
                {content.navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-4 text-base font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 px-3">
                  <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full gap-2 h-12 rounded-full font-bold uppercase tracking-widest text-xs">
                      <Download className="w-4 h-4" />
                      Descargar CV
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
