"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { Share2, Zap, Globe, Lock, LightbulbOff as LightningBolt, TrendingUp, Users2, Map } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const featureContent = {
  ENG: {
    title: "Powerful Civic Reporting",
    features: [
      {
        title: "Instant Capture",
        description: "Document issues in real-time with your camera",
        icon: Share2,
      },
      {
        title: "Real Impact",
        description: "Your reports directly reach local authorities",
        icon: Zap,
      },
      {
        title: "Global Reach",
        description: "Join a community making cities better",
        icon: Globe,
      },
      {
        title: "Privacy-Focused",
        description: "End-to-end encryption and anonymized reports",
        icon: Lock,
      },
      {
        title: "Smart Detection",
        description: "AI auto-categorizes issues for faster resolution",
        icon: LightningBolt,
      },
      {
        title: "Track Progress",
        description: "Get real-time updates on your reported issues",
        icon: TrendingUp,
      },
      {
        title: "Community Power",
        description: "Upvote, discuss, and amplify collective action",
        icon: Users2,
      },
      {
        title: "Precise Location",
        description: "Automatic geo-tagging for accurate reporting",
        icon: Map,
      },
    ],
  },
  HAU: {
    title: "Raportin Kasar Musamman",
    features: [
      {
        title: "Karɓa Nan Take",
        description: "Sani matsayin da kyau ta jiya-jiya da kamera",
        icon: Share2,
      },
      {
        title: "Aiki na Gaske",
        description: "Rajocinki ka kai tsaye ga jama'a",
        icon: Zap,
      },
      {
        title: "Kayan Jiya",
        description: "Shiga kasua na gida da bettarwa",
        icon: Globe,
      },
      {
        title: "Kare Asiri",
        description: "Encryption daga gida zuwa gida da cire sunaye",
        icon: Lock,
      },
      {
        title: "Ware Tutudde",
        description: "AI yana tsara matsala don sauri",
        icon: LightningBolt,
      },
      {
        title: "Bincika Ci Gaba",
        description: "Samu sabbin labari game da abubuwan da ka sani",
        icon: TrendingUp,
      },
      {
        title: "Karfen Jama'a",
        description: "Taɓa batu, tattauna, da girma aiki",
        icon: Users2,
      },
      {
        title: "Ingancin Wuri",
        description: "Geo-tagging ta kansu don sani daidai",
        icon: Map,
      },
    ],
  },
  YOR: {
    title: "Iroyin Aṣa Ilu Wipe",
    features: [
      {
        title: "Yanju Nipa Igbanu",
        description: "Ṣẹda aworan ti isọkan ni abini pelu kamera",
        icon: Share2,
      },
      {
        title: "Ise Gidi",
        description: "Iroyin rẹ tẹnumọ si awọn oluṣe ilu",
        icon: Zap,
      },
      {
        title: "Agbaye Laipin",
        description: "Darapọ si agbegbe ti o ṣe ilu dara",
        icon: Globe,
      },
      {
        title: "Ifojusun Asiri",
        description: "Encryption duro si owu ati ifirayese orukọ",
        icon: Lock,
      },
      {
        title: "Ọgbọ́ Abẹ̀",
        description: "AI ṣe akiyesi ati ṣiṣe ẹka fun iṣu",
        icon: LightningBolt,
      },
      {
        title: "Ṣawari Iyipada",
        description: "Gba alaye laipin nipa isọkan rẹ",
        icon: TrendingUp,
      },
      {
        title: "Ẹgbẹ Agbegbe",
        description: "Ye batu, tattauna, ki o diju iṣẹ ọkan",
        icon: Users2,
      },
      {
        title: "Aaye Ṣoṣo",
        description: "Automatic geo-tagging fun sọ daidai",
        icon: Map,
      },
    ],
  },
  IGB: {
    title: "Ngosipụta Obodo Dị Ike",
    features: [
      {
        title: "Nweta Nweta",
        description: "Debe ihe ọjọọ n'ụzọ ije ma ọ bu kamera",
        icon: Share2,
      },
      {
        title: "Ọrụ Eziokwu",
        description: "Akụkọ gị bata na ndị ọrụ obodo",
        icon: Zap,
      },
      {
        title: "Mụmụ Ụwa",
        description: "Soro mpaghara ime obodo kacha mma",
        icon: Globe,
      },
      {
        title: "Nchekwa Nzuzo",
        description: "Mgbanaka na-egbeke na nnabata orụ aha",
        icon: Lock,
      },
      {
        title: "Nyocha Ọgbụgbụ",
        description: "AI na-akọ ihe n'ime ụdị maka ngwa ngwa",
        icon: LightningBolt,
      },
      {
        title: "Ịchọ Ike",
        description: "Anụ ọkụ mma gbasara akụkọ gị",
        icon: TrendingUp,
      },
      {
        title: "Mmadụ Obodo",
        description: "Tinye aka, sọrọ, ma tinye ike ọrụ",
        icon: Users2,
      },
      {
        title: "Ọnọdụ Ziri Ezi",
        description: "Automatic geo-tagging maka ngosipụta kwesịrị ekwesị",
        icon: Map,
      },
    ],
  },
}

export default function FeatureSection({ language }: { language: "ENG" | "HAU" | "YOR" | "IGB" }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const featuresWrapperRef = useRef<HTMLDivElement>(null)
  const content = featureContent[language]

  useEffect(() => {
    if (!featuresWrapperRef.current) return

    const proxy = { skew: 0 },
      skewSetter = (x: number) => {
        proxy.skew = gsap.utils.clamp(-20, 20, x)
      },
      skewGetter = () => proxy.skew,
      clamp = gsap.utils.clamp(-20, 20)

    gsap.set(featuresWrapperRef.current, { transformOrigin: "center center" })

    const animation = gsap.to(featuresWrapperRef.current, {
      x: -800 * (content.features.length - 1),
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        onUpdate: (self) => {
          skewSetter(self.getVelocity() / 300)
        },
        end: "+=3000",
        scrub: 0.6,
        markers: false,
      },
      ease: "none",
    })

    gsap.set(featuresWrapperRef.current, { skewY: skewGetter }, 0.1)

    gsap.to(proxy, {
      skew: 0,
      duration: 0.8,
      ease: "power3",
      onUpdate: () => {
        gsap.set(featuresWrapperRef.current, { skewY: skewGetter() })
      },
    })

    return () => {
      animation.kill()
    }
  }, [language, content.features.length])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-20 px-4 overflow-hidden flex items-center justify-center"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(135deg, rgba(249, 246, 244, 1) 0%, rgba(240, 245, 250, 1) 100%)" }}
      >
        <div
          className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: "var(--accent-primary)" }}
        />
      </div>

      <div className="max-w-full">
        <div className="text-center mb-20 px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "var(--primary)" }}>
            {content.title}
          </h2>
        </div>

        <div className="w-full overflow-hidden">
          <div ref={featuresWrapperRef} className="flex gap-8 will-change-transform">
            {content.features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex-shrink-0 w-80 p-8 rounded-2xl transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                    style={{
                      background: "rgba(255, 107, 29, 0.1)",
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: "var(--accent-primary)" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-12 px-4">
          {language === "ENG"
            ? "Scroll horizontally to see more features →"
            : language === "HAU"
              ? "Cire a dama don ga ƙarin sifa →"
              : language === "YOR"
                ? "Wa ni yika lati ri sifa ti o pọ si →"
                : "Ụzọ ụzọ ka n'ụzọ ụzọ lọ iji hụ ebe ọzọ →"}
        </p>
      </div>
    </section>
  )
}
