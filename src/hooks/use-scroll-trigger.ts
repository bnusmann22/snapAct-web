"use client"

import { useEffect, useState } from "react"

export function useScrollTrigger() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 10
      setIsScrolled(isScrolling)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return isScrolled
}
