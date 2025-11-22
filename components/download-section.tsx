"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const translations = {
  ENG: {
    title: "Download Now",
    subtitle: "Available on iOS and Android—free to download",
    teaser: "Join thousands fixing their cities one snap at a time.",
    cta: "Download and start reporting today!",
    appStore: "App Store",
    googlePlay: "Google Play",
  },
  HAU: {
    title: "Kunna Yanzu",
    subtitle: "Akwai iPhone da Android—kyauta",
    teaser: "Shiga da dubu-dubu da ke gyara kasusuwan su one snap a lokaci.",
    cta: "Kunna kuma fara yin rahotin jiya!",
    appStore: "App Store",
    googlePlay: "Google Play",
  },
  YOR: {
    title: "Wọ Laisi",
    subtitle: "Lo wa lori iOS ati Android—tọ kutu",
    teaser: "Darapọ pẹlu ẹgbẹrun ti o n ṣe awon ilu nwon kan shot ni akoko.",
    cta: "Wọ kii kii bẹrẹ itan ijoba!",
    appStore: "App Store",
    googlePlay: "Google Play",
  },
  IGB: {
    title: "Budata Ugbu a",
    subtitle: "Dị na iOS na Android—n'efu",
    teaser: "Sonyere na ọtụtụ na-emeputa obodo ha otu ihe osise.",
    cta: "Budata wee malite ikwu akụkọ taa!",
    appStore: "App Store",
    googlePlay: "Google Play",
  },
}

export default function DownloadSection({ language }: { language: "ENG" | "HAU" | "YOR" | "IGB" }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const t = translations[language]

  useEffect(() => {
    if (!contentRef.current) return

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          markers: false,
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [language])

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-background to-orange-50">
      <div ref={contentRef} className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{t.title}</h2>
        <p className="text-lg text-muted-foreground mb-4">{t.subtitle}</p>

        <div className="bg-card border border-border rounded-2xl p-12 mb-8">
          <p className="text-xl font-semibold text-foreground mb-2">{t.teaser}</p>
          <p className="text-foreground/70">{t.cta}</p>
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-colors">
            {t.appStore}
          </button>
          <button className="px-8 py-4 bg-accent-primary text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
            {t.googlePlay}
          </button>
        </div>
      </div>
    </section>
  )
}
