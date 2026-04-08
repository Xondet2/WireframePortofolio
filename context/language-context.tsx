"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { portfolioData, PortfolioContent } from "@/lib/portfolio-data"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  content: PortfolioContent
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && (savedLang === "es" || savedLang === "en")) {
      setLanguageState(savedLang)
    } else {
      const browserLang = navigator.language.split("-")[0] as Language
      if (browserLang === "es" || browserLang === "en") {
        setLanguageState(browserLang)
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const value = {
    language,
    content: portfolioData[language],
    setLanguage,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
