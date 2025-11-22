"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const translations = {
  ENG: {
    title: "Impact Stories",
    subtitle: "Real-world examples transforming our communities",
    caseTitle: "Waste Cleanup in Accra",
    caseDescription:
      "Users snapped overflowing bins; reports led to a community-driven cleanup event, removing 5 tons of waste.",
    byNumbers: "By the Numbers",
    reports: "1,000+ Reports",
    reported: "submitted",
    resolved: "70% Resolved",
    coverage: "Covering traffic hazards & safety",
  },
  HAU: {
    title: "Labarun Tasiri",
    subtitle: "Abubuwan gida da ke canza jama'a",
    caseTitle: "Tsabtace Accra",
    caseDescription:
      "Masu amfani sun daukar hotuna; rahotanni sun haifar da taron jama'a, wanda ya cirewa kayan samu 5.",
    byNumbers: "Ta hanyar lambobi",
    reports: "1,000+ Rahotanni",
    reported: "an gabatar",
    resolved: "70% An warware",
    coverage: "Sakamako: harikari da kiyaye",
  },
  YOR: {
    title: "Awon Itan Ipa",
    subtitle: "Awon apẹẹrẹ gidi ti o n ṣaṣeyori awon ilu wa",
    caseTitle: "Itusilẹ Accra",
    caseDescription:
      "Awon oniko lo gbẹhin awon foto; awon itan naa da ọna si idile ti o dan kigbe, ti o si muso oniko 5 tan.",
    byNumbers: "Nipa Awon Nọmba",
    reports: "1,000+ Awon Itan",
    reported: "ti a gbe",
    resolved: "70% Ti a ṣe",
    coverage: "Isọdi: ijamba ati aaro",
  },
  IGB: {
    title: "Akụkọ Ndị Emero",
    subtitle: "Ihe omume na-eme ka ọ mụta na mpaghara anyị",
    caseTitle: "Nhazi Accra",
    caseDescription: "Ndị ọrụ weere ihe osise; akụkọ ndị ahụ mere ka njupụta ha kọọ, nke wepụtarakwu 5 nke mkpụmkpu.",
    byNumbers: "Site na Nọmba",
    reports: "1,000+ Ihe Omume",
    reported: "akwụgharịra",
    resolved: "70% Eze Emero",
    coverage: "Mkpọsa: ihe egwu na ihe ọchu",
  },
}

export default function ImpactStoriesSection({ language }: { language: "ENG" | "HAU" | "YOR" | "IGB" }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const t = translations[language]

  useEffect(() => {
    if (!sectionRef.current) return

    const cards = sectionRef.current.querySelectorAll(".impact-card")

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            markers: false,
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [language])

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-background via-blue-50 to-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{t.title}</h2>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </div>

        {/* Case Study Card */}
        <div className="impact-card mb-12 bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t.caseTitle}</h3>
              <p className="text-foreground/80 leading-relaxed">{t.caseDescription}</p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-blue-100 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-accent-primary mb-2">5</div>
                <p className="text-foreground/60">tons of waste removed</p>
              </div>
            </div>
          </div>
        </div>

        {/* By The Numbers */}
        <div className="impact-card mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">{t.byNumbers}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-accent-primary mb-2">1,000+</div>
              <p className="text-foreground/70">{t.reports}</p>
              <p className="text-sm text-muted-foreground mt-2">{t.reported}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-accent-secondary mb-2">70%</div>
              <p className="text-foreground/70">{t.resolved}</p>
            </div>
            <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-xl p-8 text-center">
              <div className="text-xl font-semibold text-foreground">Real Impact</div>
              <p className="text-sm text-muted-foreground mt-4">{t.coverage}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
