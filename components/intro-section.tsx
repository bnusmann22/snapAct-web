"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const translations = {
  ENG: {
    description: "SnapAct is an AI-driven camera-first civic engagement platform that lets citizens report civic issues   potholes, broken streetlights, illegal dumping, flooded drains, and more   using nothing but their phone camera.",
  },
  HAU: {
    description: "SnapAct app ne mai amfani da AI wanda ke ba mu damar ɗaukar hoton matsala  rami, fitila da ta lalace, jefi shara   a cikin sekunan 4 kawai, sai ya aika rahoton ga hukumar da ta dace.",
  },
  YOR: {
    description: "SnapAct ni app AI tó ń jẹ́ ká ya fọ́tò ìṣòro lójú ọ̀nà   kòtò, fìtílà tó bàjẹ́, ìdọ̀tí   láàrin 4 síkọ́ndù, ó sì ń ránṣẹ́ sí ẹ̀ka tó yẹ láìfọ̀rọ̀ sọ̀rọ̀.",
  },
  IGB: {
    description: "SnapAct bụ app AI na-eme ka anyị were foto kpọọ nsogbu okporo ụzọ   olulu, ọkụ gbawara, mkpọfụ   n’ime sekọnd 4, o wee zipu ya ozugbo n’aka ndị ga-edozi ya.",
  },
}

export default function IntroSection({ language }: { language: "ENG" | "HAU" | "YOR" | "IGB" }) {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  const content = translations[language]

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    )

    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    )

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -100, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.4,
        delay: 0.5,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    )
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-background via-orange-50/30 to-background "
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content - Right Side */}
          <div className="space-y-10 order-2 lg:order-2 text-center lg:text-left">
            <h2
              ref={titleRef}
              className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight"
              style={{
                backgroundImage: "linear-gradient(135deg, #ff6b1d 0%, #2e5fb8 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SnapAct
            </h2>

            <p ref={descriptionRef} className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {content.description}
            </p>
          </div>

          {/* BIG PHONE IMAGE - Left Side */}
          <div ref={imageRef} className="order-1 lg:order-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-xl xl:max-w-2xl h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px]">
              {/* Subtle floating animation */}
              <div className="absolute inset-0 animate-float">
                <Image
                  src="/snapPhone.png"
                  alt="SnapAct mobile app in action"
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                  style={{
                    filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Add floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}