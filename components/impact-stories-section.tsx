"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const translations = {
  ENG: {
    title: "Impact Stories",
    subtitle: "Real-world examples transforming our communities",
    caseTitle: "Waste Cleanup in Danbarre",
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
    caseTitle: "Tsabtace Danbarre",
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
    caseTitle: "Itusilẹ Danbarre",
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
    caseTitle: "Nhazi Danbarre",
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
      className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white via-emerald-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-brand-accent/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-brand-accent">Real Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-slate-900">{t.title}</h2>
          <p className="text-lg text-slate-600">{t.subtitle}</p>
        </div>

        {/* Case Study Card */}
        <div className="impact-card mb-12 glass rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-slate-900">{t.caseTitle}</h3>
              <p className="text-lg text-slate-600 leading-relaxed">{t.caseDescription}</p>
            </div>
            <div className="bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-2xl h-64 flex items-center justify-center shadow-inner">
              <div className="text-center">
                <div className="text-7xl font-black text-brand-primary mb-3">5</div>
                <p className="text-slate-700 font-semibold text-lg">tons of waste removed</p>
              </div>
            </div>
          </div>
        </div>

        {/* By The Numbers */}
        <div className="impact-card">
          <h3 className="text-3xl font-black text-center mb-10 text-slate-900">{t.byNumbers}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-5xl font-black text-brand-primary mb-3">1,000+</div>
              <p className="text-slate-900 font-bold text-lg">{t.reports}</p>
              <p className="text-sm text-slate-500 mt-2">{t.reported}</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-5xl font-black text-green-600 mb-3">70%</div>
              <p className="text-slate-900 font-bold text-lg">{t.resolved}</p>
            </div>
            <div className="bg-gradient-to-br from-brand-accent/10 to-orange-100 border-2 border-brand-accent/30 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-2xl font-black text-slate-900 mb-2">Real Impact</div>
              <p className="text-sm text-slate-600 mt-4 font-medium">{t.coverage}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
