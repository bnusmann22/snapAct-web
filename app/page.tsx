"use client"

import { useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HeroSection from "@/components/hero-section"
// import FeatureSection from "@/components/feature-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TranslationPane from "@/components/translation-pane"
import ImpactStoriesSection from "@/components/impact-stories-section"
import DownloadSection from "@/components/download-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"
import IntroSection from "@/components/intro-section"

gsap.registerPlugin(ScrollTrigger)

export default function Page() {
  const [language, setLanguage] = useState<"ENG" | "HAU" | "YOR" | "IGB">("ENG")

  return (
    <main className="bg-background text-foreground overflow-hidden">
      {/* Translation Pane */}
      <TranslationPane language={language} setLanguage={setLanguage} />

      {/* Hero Section */}
      <HeroSection language={language} />

      {/* Intro Section */}
      <IntroSection language={language} />

      {/* How It Works Section */}
      <HowItWorksSection language={language} />

      {/* Feature Sections */}
      {/* <FeatureSection language={language} /> */}

      {/* Impact Stories Section */}
      <ImpactStoriesSection language={language} />

      {/* Download Section */}
      <DownloadSection language={language} />

      {/* FAQ Section */}
      <FAQSection language={language} />

      {/* Footer */}
      <Footer language={language} />
    </main>
  )
}
