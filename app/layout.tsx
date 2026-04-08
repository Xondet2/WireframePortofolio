import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { portfolioData } from "@/lib/portfolio-data"

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: {
    default: `${portfolioData.es.personalInfo.name} | ${portfolioData.es.personalInfo.title}`,
    template: `%s | ${portfolioData.es.personalInfo.name}`
  },
  description: portfolioData.es.personalInfo.description,
  keywords: ["Desarrollador de Software", "Next.js", "React", "Inteligencia Artificial", "David Ordoñez", "Portafolio"],
  authors: [{ name: portfolioData.es.personalInfo.fullName }],
  creator: portfolioData.es.personalInfo.fullName,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tu-dominio.com", // Cambiar por tu URL real
    title: `${portfolioData.es.personalInfo.name} | ${portfolioData.es.personalInfo.title}`,
    description: portfolioData.es.personalInfo.description,
    siteName: portfolioData.es.personalInfo.name,
    images: [
      {
        url: "/og-image.png", // Debes crear esta imagen (1200x630)
        width: 1200,
        height: 630,
        alt: `Portafolio de ${portfolioData.es.personalInfo.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.es.personalInfo.name} | ${portfolioData.es.personalInfo.title}`,
    description: portfolioData.es.personalInfo.description,
    images: ["/og-image.png"],
    creator: "@tu_usuario", // Cambiar por tu usuario de X
  },
  icons: {
    icon: [
      {
        url: '/gemini-svg.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/gemini-svg.svg',
  },
}

import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/context/language-context"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased cursor-none">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <SmoothScroll>
              <CustomCursor />
              {children}
              <Analytics />
            </SmoothScroll>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
