"use client"

import { useEffect, useState } from "react"
import { House } from 'lucide-react';
import { useSearchParams } from "next/navigation"
import MissionSection from "@/components/about/mission-section"
import TeamSection from "@/components/about/team-section"
import BlogSection from "@/components/about/blog-section"
import Footer from "@/components/footer"

export default function AboutPage() {
  const searchParams = useSearchParams()
  const [language, setLanguage] = useState<"ENG" | "HAU" | "YOR" | "IGB">("ENG")

  useEffect(() => {
    const lang = searchParams.get("lang") as "ENG" | "HAU" | "YOR" | "IGB" | null
    if (lang && ["ENG", "HAU", "YOR", "IGB"].includes(lang)) {
      setLanguage(lang)
    }
  }, [searchParams])

  return (
    <main className="bg-background overflow-x-hidden">
      {/* Header Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-accent-primary hover:opacity-80 transition-opacity">
            SnapAct
          </a>
          <a href="/" className="text-sm font-medium text-foreground/60 hover:text-accent-primary transition-colors">
             <House size={34}  strokeWidth={2} />
          </a>
        </div>
      </nav>

      {/* Content Sections */}
      <MissionSection language={language} />
      <TeamSection language={language} />
      <BlogSection language={language} />

      {/* Footer */}
      <Footer language={language} />
    </main>
  )
}
