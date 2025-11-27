"use client"

import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Share2, Zap, Globe, Lock, TrendingUp, Users2, Map } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

// Keep your full multilingual data exactly as you had it
const featureContent = {
  ENG: {
    title: "Powerful Civic Reporting",
    features: [
      { title: "Instant Capture", description: "Document issues in real-time with your camera", icon: Share2 },
      { title: "Real Impact", description: "Your reports directly reach local authorities", icon: Zap },
      { title: "Global Reach", description: "Join a community making cities better", icon: Globe },
      { title: "Privacy-Focused", description: "End-to-end encryption and anonymized reports", icon: Lock },
      { title: "Smart Detection", description: "AI auto-categorizes issues for faster resolution", icon: Zap },
      { title: "Track Progress", description: "Get real-time updates on your reported issues", icon: TrendingUp },
      { title: "Community Power", description: "Upvote, discuss, and amplify collective action", icon: Users2 },
      { title: "Precise Location", description: "Automatic geo-tagging for accurate reporting", icon: Map },
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
        icon: Zap,
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
        icon: Zap,
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
        icon: Zap,
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

export default function FeatureSection({ 
  language = "ENG" 
}: { 
  language: "ENG" | "HAU" | "YOR" | "IGB" 
}) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const content = featureContent[language]

  useGSAP(() => {
    if (!containerRef.current || !sectionRef.current) return

    const container = containerRef.current
    const cards = container.children
    const totalCards = cards.length

    // Each card = 100vw → total width = totalCards × 100vw
    gsap.set(container, { width: `${totalCards * 100}vw` })

    // Distance to move = everything except the first visible card
    const distanceToMove = () => (totalCards - 1) * window.innerWidth

    gsap.to(container, {
      x: () => -distanceToMove(),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${distanceToMove()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    })

  }, { scope: sectionRef, dependencies: [language] })

  return (
    <>
      {/* Fullscreen Pinned Horizontal Scroll Section */}
      <section
        ref={sectionRef}
        className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-orange-50 to-purple-50"
      >
        {/* Optional decorative background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
        </div>

        <div
          ref={containerRef}
          className="flex h-full"
        >
          {content.features.map((feature, i) => {
            const Icon = feature.icon

            return (
              <div
                key={i}
                className="w-screen flex-shrink-0 flex items-center justify-center px-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-md w-full"
                >
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/30">
                    <div className="w-20 h-20 rounded-2xl bg-orange-100 flex items-center justify-center mb-8">
                      <Icon className="w-10 h-10 text-orange-600" />
                    </div>

                    <h3 className="text-4xl font-black mb-6 text-gray-900">
                      {feature.title}
                    </h3>

                    <p className="text-xl text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Optional next section after scroll ends */}
      {/* <section className="h-screen bg-gradient-to-b from-purple-900 to-black flex items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center px-8"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            {language === "ENG" ? "Ready to Make a Difference?" :
             language === "HAU" ? "A shirye ku canza al'umma?" :
             language === "YOR" ? "Ṣe o ti ṣetan lati ṣe iyipada?" :
             "Ị dịla njikere ime mgbanwe?"}
          </h2>
          <button className="px-12 py-6 bg-orange-600 hover:bg-orange-700 text-xl font-bold rounded-full transition">
            {language === "ENG" ? "Get Started Now" : "Bincika Yanzu"}
          </button>
        </motion.div>
      </section> */}
    </>
  )
}