"use client"

import { useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HeroSection from "@/components/hero-section"


gsap.registerPlugin(ScrollTrigger)

export default function Page() {
  const [language, setLanguage] = useState<"ENG" | "HAU" | "YOR" | "IGB">("ENG")

  return (
     <div className="w-full">
      <HeroSection language={language} />
    </div>
  )
}
