"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center bg-muted/50 rounded-full p-1 border border-border">
      <button
        onClick={() => setLanguage("es")}
        className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all ${
          language === "es" 
            ? "bg-primary text-primary-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all ${
          language === "en" 
            ? "bg-primary text-primary-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  )
}
