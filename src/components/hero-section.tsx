"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { motion } from "framer-motion"
import { Camera, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroContent = {
  ENG: {
    title: "Report with Pictures",
    subtitle: "...it's just like Snapchat, but takes action",
    comparison: "Like Snapchat, but for civic action",
    cta1: "Get Started",
    cta2: "Learn More",
  },
  HAU: {
    title: "Tabbatar da Hotuna",
    subtitle: "...kama Snapchat, amma yana aiki",
    comparison: "Kamar Snapchat, amma don aiki na gida",
    cta1: "Fara Aiki",
    cta2: "Koyi Kaari",
  },
  YOR: {
    title: "Iroyin Pelu Aworan",
    subtitle: "...kan Snapchat, ṣugbọn ṣe-ise",
    comparison: "Gẹgẹ bi Snapchat, ṣugbọn fun iṣe ti aṣa",
    cta1: "Bẹrẹ Iṣẹ",
    cta2: "Kọ Kari",
  },
  IGB: {
    title: "Mara Maka Ihe Ngosi",
    subtitle: "...dika Snapchat, mana ọ na-arụ ọrụ",
    comparison: "Dika Snapchat, mana maka ọrụ obodo",
    cta1: "Malite Mma",
    cta2: "Mụta Karịa",
  },
}

export default function HeroSection({ language }: { language: "ENG" | "HAU" | "YOR" | "IGB" }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  const content = heroContent[language]

  useEffect(() => {
    // Title text reveal animation
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
        },
      )
    }

    // Subtitle fade in
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "power3.out",
        },
      )
    }

    if (bgRef.current) {
      gsap.to(bgRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom 50%",
          scrub: true,
        },
      })
    }
  }, [language])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 md:px-8"
      style={{
        background: "linear-gradient(135deg, rgba(249, 246, 244, 1) 0%, rgba(240, 245, 250, 1) 100%)",
      }}
    >
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, color-mix(in oklch, var(--accent-primary) 8%, transparent) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, color-mix(in oklch, var(--accent-secondary) 8%, transparent) 0%, transparent 50%)
          `,
        }}
      >
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="rgba(7, 109, 46, 0.56)" stroke="rgba(7, 109, 46, 0.56)" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="rgba(7, 109, 46, 0.56)" />
        </svg>

        {/* Accent shapes */}
        <div
          className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-5"
          style={{ background: "var(--accent-primary)" }}
        />
        <div
          className="absolute bottom-20 right-10 w-48 h-48 rounded-full opacity-5"
          style={{ background: "var(--accent-secondary)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
        {/* Left Column - Text and CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Comparison Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit"
            style={{
              background: "color-mix(in oklch, var(--accent-primary) 8%, transparent)",
              backdropFilter: "blur(10px)",
              border: "1px solid color-mix(in oklch, var(--accent-secondary) 22%, transparent)",
            }}
          >
            <Camera className="w-4 h-4" style={{ color: "var(--accent-secondary)" }} />
            <span className="text-sm font-medium">{content.comparison}</span>
          </motion.div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
            style={{ color: "var(--primary)" }}
          >
            {content.title}
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
          >
            {content.subtitle}
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button
              size="lg"
              className="px-8 py-3 text-base font-semibold"
              style={{ background: "var(--accent-primary)", color: "var(--accent-foreground)" }}
            >
              {content.cta1}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-base font-semibold"
            >
              {content.cta2}
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column - 3 Image Collage */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 gap-4 h-96"
        >
          {/* Large image top left */}
          <div className="col-span-1 row-span-2 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop"
              alt="Community reporting"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Top right image */}
          <div className="col-span-1 rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&h=280&fit=crop"
              alt="Civic action"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Bottom right image */}
          <div className="col-span-1 rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=280&fit=crop"
              alt="Making impact"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
