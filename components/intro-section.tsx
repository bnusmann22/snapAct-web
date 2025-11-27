"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

interface Translations {
  [key: string]: {
    description: string
  }
}

const translations: Translations = {
  ENG: {
    description: "SnapAct is an AI-driven camera-first civic engagement platform that lets citizens report civic issues  potholes, broken streetlights, illegal dumping, flooded drains, and more using nothing but their phone camera.",
  },
  HAU: {
    description: "SnapAct app ne mai amfani da AI wanda ke ba mu damar ɗaukar hoton matsala  rami, fitila da ta lalace, jefi shara  a cikin sekunan 4 kawai, sai ya aika rahoton ga hukumar da ta dace.",
  },
  YOR: {
    description: "SnapAct ni app AI tó ń jẹ́ ká ya fọ́tò ìṣòro lójú ọ̀nà  kòtò, fìtílà tó bàjẹ́, ìdọ̀tí  láàrin 4 síkọ́ndù, ó sì ń ránṣẹ́ sí ẹ̀ka tó yẹ láìfọ̀rọ̀ sọ̀rọ̀.",
  },
  IGB: {
    description: "SnapAct bụ app AI na-eme ka anyị were foto kpọọ nsogbu okporo ụzọ  olulu, ọkụ gbawara, mkpọfụ  n’ime sekọnd 4, o wee zipu ya ozugbo n’aka ndị ga-edozi ya.",
  },
}

export default function IntroSection({ language }: { language: "ENG" | "HAU" | "YOR" | "IGB" }) {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  const content = translations[language]

  useEffect(() => {
    // Scroll animation for the intro section
    if (containerRef.current && titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )

      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.4,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 px-4 md:py-32 bg-gradient-to-b from-background via-[rgba(255,107,29,0.03)] to-background"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8 order-1 md:order-2">
            <h2
              ref={titleRef}
              className="text-5xl md:text-7xl font-bold"
              style={{
                backgroundImage: "linear-gradient(135deg, #ff6b1d 0%, #2e5fb8 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SnapAct
            </h2>

            {/* Description text */}
            <p ref={descriptionRef} className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {content.description}
            </p>
          </div>


          <div ref={imageRef} className="flex justify-center items-center order-2 md:order-1">
            <div className="relative w-full max-w-sm h-96 md:h-[450px]">
              <Image
                src="/code.png"
                alt="SnapAct mobile app features"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}