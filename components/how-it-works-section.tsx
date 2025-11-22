"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { Camera, MapPin, Send, Users } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const howItWorksContent = {
  ENG: {
    title: "How It Works",
    steps: [
      {
        number: "01",
        title: "Capture the Issue",
        description:
          "Open the app, point your camera at the problem (e.g., a broken streetlight), and snap a photo—our AI auto-detects and categorizes it.",
        icon: Camera,
      },
      {
        number: "02",
        title: "Add Details",
        description: "Geo-tagging happens automatically; add a quick description if needed.",
        icon: MapPin,
      },
      {
        number: "03",
        title: "Submit and Track",
        description:
          "Report goes straight to local authorities or community groups; get real-time updates on resolution progress via notifications.",
        icon: Send,
      },
      {
        number: "04",
        title: "Community Engagement",
        description: "See nearby reports, upvote issues, or join discussions to amplify collective action.",
        icon: Users,
      },
    ],
  },
  HAU: {
    title: "Yadda Ake Aiki",
    steps: [
      {
        number: "01",
        title: "Kamo Matsala",
        description:
          "Bugi app-din, yi duba kamar da danja (alal misali, gidaje da ya karye), sannan danna hotuna—AI-din mu yana gano kuma yana tsara shi.",
        icon: Camera,
      },
      {
        number: "02",
        title: "Kari Cikakkiya",
        description: "Geo-tagging yana faruwa ta kansu; kari wata ƙarni idan ma'alif.",
        icon: MapPin,
      },
      {
        number: "03",
        title: "Gabatar da Bincike",
        description: "Rajoyin ka kai tsaye ga manyan jama'a ko ƴan gida; samu sabbin adadin aiki daidai ta sanarwa.",
        icon: Send,
      },
      {
        number: "04",
        title: "Kambittin Jama'a",
        description: "Ga kusa-kusa da rajoyi, taɓa batu, ko shiga tattaunawa don kawar da aiki.",
        icon: Users,
      },
    ],
  },
  YOR: {
    title: "Ilo Ti Iṣẹ Ṣe",
    steps: [
      {
        number: "01",
        title: "Mu Irọ̀nú",
        description:
          "Ṣiṣẹ app naa, wo oju ọkunrin ninu isoro naa (alaye, ita tàbí àwọn eruwọ), sannan ṣe aworan—AI wa ṣe akiyesi ati fifo si ẹka.",
        icon: Camera,
      },
      {
        number: "02",
        title: "Fi Awọn Alaye",
        description: "Geo-tagging n'ṣiṣe pada mi ara; fi eere kiko ti o yiyata bam.",
        icon: MapPin,
      },
      {
        number: "03",
        title: "Fi Sinu ati Tani",
        description:
          "Iroyin yio lo duro si awọn oluṣe ilu tabi awọn ẹgbẹ ti awujọ; gba imuditun laipin nipa olutiju ayẹwo.",
        icon: Send,
      },
      {
        number: "04",
        title: "Ẹgbẹ Ajointọ",
        description: "Ri awọn iroyin ti o sunmọ, ye batu, tabi wọle sinu iyalẹnu lati pade wiwọle.",
        icon: Users,
      },
    ],
  },
  IGB: {
    title: "Iji Ebe O Si",
    steps: [
      {
        number: "01",
        title: "Jide Nsogbu",
        description:
          "Meghee app, nye anya na nsogbu (iji ka, okwu odighi mma), ma foto—AI anyị ga-achọpụta ma sorọ ya.",
        icon: Camera,
      },
      {
        number: "02",
        title: "Tinye Nkọwa",
        description: "Geo-tagging na-eme onwe ya; tinye nkọwa mma ma ọ dị mkpa.",
        icon: MapPin,
      },
      {
        number: "03",
        title: "Ziga Ma Ịchọ",
        description: "Akụkọ ga-ala ozugbo na ndị ọrụ obodo ma ọ bu ìgwè mmadụ; anụ ọkụ mma gbasara ịrụ mgbe niile.",
        icon: Send,
      },
      {
        number: "04",
        title: "Ndị Otu Mmadụ",
        description: "Hụ akụkọ dị nso, tinye aka ma ọ bu sonụ ụka iji mụbaa ihe karịrị.",
        icon: Users,
      },
    ],
  },
}

export default function HowItWorksSection({ language }: { language: "ENG" | "HAU" | "YOR" | "IGB" }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement[]>([])
  const content = howItWorksContent[language]

  useEffect(() => {
    if (!containerRef.current) return

    // Animate each step on scroll
    stepsRef.current.forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: step,
            start: "top 75%",
          },
          delay: index * 0.15,
        },
      )
    })
  }, [language])

  return (
    <section
      ref={containerRef}
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(246, 248, 252, 1) 0%, rgba(254, 248, 246, 1) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "var(--primary)" }}>
            {content.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "ENG"
              ? "Understand the simple journey from identifying an issue to creating community impact."
              : language === "HAU"
                ? "Fahimta jiya mai sauki daga nemo matsala zuwa abubuwan da aka samu."
                : language === "YOR"
                  ? "Ye oye jẹrẹ kan ti itujade lati ṣawari ninu itijoko ape itujade adugbo."
                  : "Mahụ otutu nkwuri-ocha site na nchoputa nsogbu rue mma nke obodo."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {content.steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                ref={(el) => {
                  if (el) stepsRef.current[index] = el
                }}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <div
                  className="p-8 rounded-2xl"
                  style={{ background: "rgba(255, 255, 255, 0.6)", border: "1px solid rgba(0, 0, 0, 0.05)" }}
                >
                  {/* Step Number */}
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl font-black text-2xl mb-6"
                    style={{
                      background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                      color: "white",
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      background: "rgba(255, 107, 29, 0.1)",
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: "var(--accent-primary)" }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                  {/* Connection line */}
                  {index < content.steps.length - 1 && (
                    <div className="hidden md:block absolute -bottom-12 -right-6 w-12 h-12">
                      <svg
                        viewBox="0 0 100 100"
                        className="w-full h-full"
                        style={{ stroke: "var(--accent-primary)", opacity: 0.2 }}
                      >
                        <path d="M 50 0 Q 50 50 0 100" fill="none" strokeWidth="2" />
                        <path d="M 0 85 L -5 95 L 0 92 L 5 95" fill="currentColor" />
                      </svg>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
