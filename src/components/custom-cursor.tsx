"use client"

import React, { useEffect, useState, useRef } from "react"

const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = document.getElementById("standard-skin")
    if (!section || !cursorRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX + 10}px, ${e.clientY + 10}px)`
      }
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    section.addEventListener("mousemove", handleMouseMove)
    section.addEventListener("mouseenter", handleMouseEnter)
    section.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      section.removeEventListener("mousemove", handleMouseMove)
      section.removeEventListener("mouseenter", handleMouseEnter)
      section.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed top-0 left-0 z-100 hidden font-extralight italic text-white transition-opacity duration-300 will-change-transform md:block ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      (click)
    </div>
  )
}

export default CustomCursor
