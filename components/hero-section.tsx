"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { motion, useScroll, useTransform } from "framer-motion"
import { Camera, ArrowRight, Sparkles } from "lucide-react"

const heroContent = {
  ENG: {
    title: "Report with Pictures",
    subtitle: "Like Snapchat, but takes action on civic issues",
    description: "Document local problems instantly and watch them get fixed",
    cta: "Download Now",
    badge: "Camera-First Civic Platform",
  },
  HAU: {
    title: "Tabbatar da Hotuna",
    subtitle: "Kama Snapchat, amma yana aiki",
    description: "Yi hotuna matsalar gida kuma duba an warware su",
    cta: "Kunna Yanzu",
    badge: "Dandalin Kama-Farko",
  },
  YOR: {
    title: "Iroyin Pelu Aworan",
    subtitle: "Gẹgẹ bi Snapchat, ṣugbọn ṣe-ise",
    description: "Ṣe aworan awọn isoro ilu ara ẹni ki o wo olutoju",
    cta: "Wọ Laisi",
    badge: "Kamera-First Ilu Eto",
  },
  IGB: {
    title: "Mara Maka Ihe Ngosi",
    subtitle: "Dika Snapchat, mana ọ na-arụ ọrụ",
    description: "Debe nsogbu obodo ozugbo ma hụ ka a na-edozi ha",
    cta: "Budata Ugbu a",
    badge: "Kamera-First Obodo Ebe",
  },
}

export default function HeroSection({ language }: { language: "ENG" | "HAU" | "YOR" | "IGB" }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const content = heroContent[language]
  
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Split text animation
    const titleChars = titleRef.current?.querySelectorAll('.char')
    if (titleChars) {
      gsap.fromTo(titleChars,
        { opacity: 0, y: 50, rotateX: -90 },
        { 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: "back.out(1.7)"
        }
      )
    }

    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8 },
      "-=0.4"
    )
    .fromTo(
      ctaRef.current,
      { opacity: 0, y: 20, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6 },
      "-=0.4"
    )

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 2
      const y = (clientY / innerHeight - 0.5) * 2
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [language])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 bg-gradient-to-br from-background via-slate-50 to-emerald-50"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 backdrop-blur-sm"
        >
          <Camera className="w-4 h-4 text-brand-primary" />
          <span className="text-sm font-semibold text-brand-primary">{content.badge}</span>
        </motion.div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] text-slate-900"
        >
          {content.title}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          {content.subtitle}
        </p>

        {/* Description */}
        <p className="text-lg text-slate-500 max-w-xl mx-auto">
          {content.description}
        </p>

        {/* CTA Button */}
        <div ref={ctaRef}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-primary text-white rounded-full font-bold text-lg shadow-lg shadow-brand-primary/25 hover:shadow-xl hover:shadow-brand-primary/40 transition-all"
          >
            {content.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Stats or Social Proof */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>1,000+ Active Users</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>70% Issues Resolved</span>
          </div>
        </div>
      </div>
    </section>
  )
}
