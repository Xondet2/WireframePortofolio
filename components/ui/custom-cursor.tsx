"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [hoverType, setHoverType] = useState<"default" | "project" | "action">("default")
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Suavizado del movimiento - Un poco más reactivo para el estilo terminal
  const springConfig = { damping: 20, stiffness: 300 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    setMounted(true)
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const projectCard = target.closest('#proyectos div.group')
      const actionButton = target.closest('button') || target.closest('a')
      
      if (projectCard) {
        setIsHovering(true)
        setHoverType("project")
      } else if (actionButton) {
        setIsHovering(true)
        setHoverType("action")
      } else {
        setIsHovering(false)
        setHoverType("default")
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [isVisible, mouseX, mouseY])

  if (!mounted) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center gap-1 font-mono text-[10px] font-bold tracking-tight"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "10px", // Un poco desplazado para no tapar el punto de clic real
        translateY: "10px",
      }}
    >
      <motion.div
        animate={{
          width: isHovering ? "auto" : "14px",
          height: isHovering ? "24px" : "14px",
          padding: isHovering ? "0 10px" : "0",
          borderRadius: isHovering ? "4px" : "2px",
        }}
        className="flex items-center justify-center bg-primary text-primary-foreground overflow-hidden whitespace-nowrap shadow-[0_0_15px_rgba(var(--primary),0.5)]"
      >
        <span className="flex items-center">
          {isHovering ? (
            hoverType === "project" ? "run.project()" : "sudo.exec()"
          ) : (
            ">"
          )}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
            className="ml-0.5 inline-block w-1.5 h-3 bg-current"
          />
        </span>
      </motion.div>
    </motion.div>
  )
}
