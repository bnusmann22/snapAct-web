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
      className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 bg-brand-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-brand-primary">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-slate-900">
            {content.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {language === "ENG"
              ? "Report civic issues in seconds with our streamlined process."
              : language === "HAU"
                ? "Fahimta jiya mai sauki daga nemo matsala zuwa abubuwan da aka samu."
                : language === "YOR"
                  ? "Ye oye jẹrẹ kan ti itujade lati ṣawari ninu itijoko ape itujade adugbo."
                  : "Mahụ otutu nkwuri-ocha site na nchoputa nsogbu rue mma nke obodo."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\">
          {content.steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                ref={(el) => {
                  if (el) stepsRef.current[index] = el
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className="h-full p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Step Number Badge */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl font-black text-xl mb-6 bg-gradient-to-br from-brand-primary to-green-600 text-white shadow-lg shadow-brand-primary/25">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-brand-accent/10 group-hover:bg-brand-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-brand-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-black mb-3 text-slate-900">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>

                  {/* Connector Arrow for Desktop */}
                  {index < content.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-4 z-10">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-brand-primary flex items-center justify-center">
                        <svg className="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
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
