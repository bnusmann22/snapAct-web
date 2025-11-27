"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { motion } from "framer-motion"
import { Camera } from "lucide-react"
import Image from "next/image"

const heroContent = {
  ENG: {
    title: "Report with Pictures",
    subtitle: "...it's just like Snapchat, but takes action",
    comparison: "Like Snapchat, but for civic action",
  },
  HAU: {
    title: "Tabbatar da Hotuna",
    subtitle: "...kama Snapchat, amma yana aiki",
    comparison: "Kamar Snapchat, amma don aiki na gida",
  },
  YOR: {
    title: "Iroyin Pelu Aworan",
    subtitle: "...kan Snapchat, ṣugbọn ṣe-ise",
    comparison: "Gẹgẹ bi Snapchat, ṣugbọn fun iṣe ti aṣa",
  },
  IGB: {
    title: "Mara Maka Ihe Ngosi",
    subtitle: "...dika Snapchat, mana ọ na-arụ ọrụ",
    comparison: "Dika Snapchat, mana maka ọrụ obodo",
  },
}

export default function HeroSection({ language }: { language: "ENG" | "HAU" | "YOR" | "IGB" }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

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

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.7,
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4"
      style={{
        background: "linear-gradient(135deg, rgba(249, 246, 244, 1) 0%, rgba(240, 245, 250, 1) 100%)",
      }}
    >
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(255, 107, 29, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(46, 95, 184, 0.08) 0%, transparent 50%)
          `,
        }}
      >
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="#0000" stroke="#888" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
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

      <div className="max-w-6xl mx-auto w-full relative z-10 ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-center ">
          {/* Left column - Text */}
          <div className="space-y-8  md:col-span-3 pl-8">
            {/* Comparison Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(255, 107, 29, 0.08)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 107, 29, 0.2)",
              }}
            >
              <Camera className="w-4 h-4" style={{ color: "var(--accent-primary)" }} />
              <span className="text-sm font-medium">{content.comparison}</span>
            </motion.div>

            {/* Main Title */}
            <h1
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight "
              style={{ color: "var(--primary)" }}
            >
              {content.title}
            </h1>

            {/* Subtitle */}
            <p ref={subtitleRef} className="text-lg md:text-2xl text-muted-foreground leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          {/* Right column - Image */}
          <div ref={imageRef} className="flex justify-center items-center md:col-span-2 ">
            <div className="relative w-full max-w-sm h-96 md:h-[500px]">
              <Image
                src="/code.png"
                alt="SnapAct mobile app preview"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
