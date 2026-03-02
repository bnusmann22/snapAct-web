"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Apple, Store, Play } from 'lucide-react';
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
    <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white via-orange-50/30 to-white">
      <div ref={contentRef} className="max-w-5xl mx-auto">
        {/* Main Content Card */}
        <div className="glass rounded-3xl p-12 md:p-16 text-center space-y-8 shadow-xl">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">{t.title}</h2>
            <p className="text-xl md:text-2xl text-slate-600 font-medium">{t.subtitle}</p>
          </div>

          <div className="py-8">
            <p className="text-lg text-slate-700 mb-2 font-semibold">{t.teaser}</p>
            <p className="text-base text-slate-500">{t.cta}</p>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group w-full sm:w-auto cursor-pointer px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
              <Apple size={24} />
              {t.appStore}
            </button>
            <button className="group w-full sm:w-auto cursor-pointer px-8 py-4 bg-brand-primary text-white font-bold rounded-full hover:bg-brand-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
              <Play size={24} />
              {t.googlePlay}
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Free Download</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>No Credit Card</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>iOS & Android</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
