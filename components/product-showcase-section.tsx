"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Camera, Zap, MessageSquare, CheckCircle } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const showcaseContent = {
  ENG: {
    badge: "Product Showcase",
    title: "Civic Engagement Made Simple",
    subtitle: "See how SnapAct transforms your photos into real community action",
    features: [
      { icon: Camera, title: "Snap", description: "Capture any civic issue instantly" },
      { icon: Zap, title: "Auto-Detect", description: "AI identifies the problem category" },
      { icon: MessageSquare, title: "Report", description: "Send directly to authorities" },
      { icon: CheckCircle, title: "Track", description: "Monitor resolution status" }
    ],
    demoSteps: [
      "Point camera at issue",
      "AI detects & categorizes",
      "Auto-fills report details",
      "Submit with one tap"
    ]
  },
  HAU: {
    badge: "Nuni Samfur",
    title: "Haɗin Kai da Jama'a Ta Sauƙi",
    subtitle: "Ga yadda SnapAct ke canza hotunanku zuwa ayyukan al'umma na gaske",
    features: [
      { icon: Camera, title: "Dauki Hoto", description: "Dauki hoton matsala nan take" },
      { icon: Zap, title: "Gano Kai-Tsaye", description: "AI ya gano nau'in matsala" },
      { icon: MessageSquare, title: "Rahoto", description: "Aika kai tsaye ga hukuma" },
      { icon: CheckCircle, title: "Bi Daidai", description: "Kula da matsayin warwarewa" }
    ],
    demoSteps: [
      "Nuna kyamara ga matsala",
      "AI ya gano kuma ya tsara",
      "Cika bayanan rahoto",
      "Gabatar da danna daya"
    ]
  },
  YOR: {
    badge: "Ifihan Ọja",
    title: "Ìfọwọ́sowọ́pọ̀ Ìlú Tó Rọrùn",
    subtitle: "Wo bi SnapAct ṣe n yipada awọn fọto rẹ si iṣe agbegbe gidi",
    features: [
      { icon: Camera, title: "Ya Fọto", description: "Gba isoro ilu lẹsẹkẹsẹ" },
      { icon: Zap, title: "Ṣawari-Auto", description: "AI ṣe idanimọ iru isoro" },
      { icon: MessageSquare, title: "Fi Ranṣẹ", description: "Fi ranṣẹ si awọn alaṣẹ" },
      { icon: CheckCircle, title: "Ṣe Atẹle", description: "Ṣe atẹle ipo ipinnu" }
    ],
    demoSteps: [
      "To kamera si isoro",
      "AI ṣe idanimọ ati ṣiṣe ẹka",
      "Fi kun alaye iroyin",
      "Fi sile pẹlu tẹ kan"
    ]
  },
  IGB: {
    badge: "Ngosipụta Ngwaahịa",
    title: "Ntinye Aka Obodo Dị Mfe",
    subtitle: "Hụ ka SnapAct si eme ka foto gị bụrụ ezi omume obodo",
    features: [
      { icon: Camera, title: "Kpọọ Foto", description: "Wepụta nsogbu obodo ozugbo" },
      { icon: Zap, title: "Chọpụta-Auto", description: "AI chọpụta ụdị nsogbu" },
      { icon: MessageSquare, title: "Kọọ", description: "Zipu ozugbo n'aka ndị ọchịchị" },
      { icon: CheckCircle, title: "Soro", description: "Nyochaa ọnọdụ mkpebi" }
    ],
    demoSteps: [
      "Tụnye igwefoto na nsogbu",
      "AI chọpụta ma hazie",
      "Dejupụta nkọwa akụkọ",
      "Tinye na otu pịa"
    ]
  }
}

export default function ProductShowcaseSection({ language }: { language: "ENG" | "HAU" | "YOR" | "IGB" }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const content = showcaseContent[language]
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const phoneY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const phoneRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  useEffect(() => {
    if (!phoneRef.current) return

    // Floating animation for phone
    gsap.to(phoneRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    })

    // Feature cards stagger animation
    const cards = sectionRef.current?.querySelectorAll('.feature-card')
    if (cards) {
      gsap.fromTo(cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      )
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden bg-gradient-to-br from-brand-primary/5 via-white to-brand-accent/5"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1 bg-brand-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-brand-primary">{content.badge}</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6">
            {content.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Animated Phone Mockup */}
          <motion.div
            style={{ y: phoneY, rotate: phoneRotate, opacity }}
            className="relative"
          >
            <div ref={phoneRef} className="relative z-10">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/30 to-brand-accent/30 blur-3xl scale-110" />
              
              {/* Phone */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <Image
                  src="/snapPhone.png"
                  alt="SnapAct app interface"
                  width={600}
                  height={700}
                  className="drop-shadow-2xl relative z-10"
                />
                
                {/* Animated UI Elements Overlay */}
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute top-1/4 right-10 glass-dark px-4 py-2 rounded-full"
                >
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-bold">Scanning...</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                  className="absolute bottom-1/3 left-10 w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center"
                >
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </motion.div>
              </motion.div>
            </div>

            {/* Floating Feature Pills */}
            {content.demoSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="absolute glass px-4 py-2 rounded-full text-sm font-semibold text-slate-700 shadow-lg"
                style={{
                  top: `${20 + index * 20}%`,
                  left: index % 2 === 0 ? '-10%' : 'auto',
                  right: index % 2 === 1 ? '-10%' : 'auto',
                }}
              >
                <span className="text-brand-primary font-black mr-2">{index + 1}</span>
                {step}
              </motion.div>
            ))}
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {content.features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="feature-card group"
                >
                  <div className="glass rounded-2xl p-6 border border-slate-200 h-full transition-all duration-300 hover:shadow-2xl hover:border-brand-primary/50">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-brand-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
