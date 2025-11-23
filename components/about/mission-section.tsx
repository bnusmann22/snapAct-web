"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const translations = {
  ENG: {
    mission: "Our Mission",
    missionDesc:
      "We empower citizens to report local issues and create positive change in their communities. By combining AI technology with civic participation, SnapAct bridges the gap between problems and solutions.",
    vision: "Our Vision",
    visionDesc:
      "A world where every community can instantly report and resolve local issues together—making cities safer, cleaner, and more responsive to citizen needs.",
    values: "Our Values",
    value1: "Transparency",
    value1Desc: "Open communication with authorities and communities",
    value2: "Empowerment",
    value2Desc: "Citizens driving change in their neighborhoods",
    value3: "Innovation",
    value3Desc: "Cutting-edge AI and technology for social good",
    value4: "Inclusivity",
    value4Desc: "Supporting multiple languages and all communities",
  },
  HAU: {
    mission: "Manufar Mu",
    missionDesc:
      "Mun haɓa jama'a don ba da rahoton al'amurin gida kuma gina juyayi masu kyau a cikin al'ummominsu. Ta hanyar haɗa fasaha AI da hutu-hutu na jama'a, SnapAct yana ɗauki ragin tsakanin matsaloli da mafitarwa.",
    vision: "Hanyar Gani Mu",
    visionDesc:
      "Jihar inda kowane al'umma za ta iya ba da labari da warware al'amurin gida a gaggawa—gida ta fashi, tsabta, da gajere ga bukatun jama'a.",
    values: "Kiyayewan Mu",
    value1: "Kamili-kamili",
    value1Desc: "Bubuwan sanar da jiya tare da masarautu da al'ummomi",
    value2: "Karfi",
    value2Desc: "Jama'a ta haɗa gida a gida",
    value3: "Abubuwan Sababba",
    value3Desc: "Fasaha ta AI da fasaha don kyau na jama'a",
    value4: "Kwareya",
    value4Desc: "Goyon bayan yare da duka al'ummomi",
  },
  YOR: {
    mission: "Etu Awa",
    missionDesc:
      "A ṣe awọn ọmọ àgbègbè láti se ìsìn ilẹ̀ tí ó ti wáyé ní ilẹ̀ nwọn tí àti ṣe àwọn iyipada tí ó dúra nínú àwùjọ wọn. Nípasẹ̀ pípapo imọ-ẹrọ AI pẹ̀lú páàtì ìbágbisí, SnapAct ń ọ̀gbúnrì àga láti arin àwọn ìṣoro àti àwọn àyènìwò.",
    vision: "Ìrànwọ́ Ọ́ Awa",
    visionDesc:
      "Ayé níbi tí gbogbo àwùjọ yíò le ṣe ìsìn kíkiri ati fi ọ̀tun àwọn ìṣoro tí ó ti wáyé - ṣíṣe àwọn ìlú tí ó sábájọ, tí ó ní ìfẹ́, àti ìgbọ́ si ìbéèrè àwọn ọmọ àgbègbè.",
    values: "Àwọn Ìyafin Awa",
    value1: "Ìfihàn",
    value1Desc: "Ibaraẹ́nisọ́rọ̀ rirù pẹ̀lú àwọn olókìkí àti àwùjọ",
    value2: "Ìmọ́ Agbára",
    value2Desc: "Àwọn ìbágbisí ń ṣe iyipada ní àwùjọ wọn",
    value3: "Ìmọ̀ Tuntun",
    value3Desc: "Imọ-ẹrọ AI àti ẹrọ fún ire ọmọ àdúmọ̀",
    value4: "Ìbágbisí",
    value4Desc: "Ìrànlọ́wọ́ gbogbo èdè àti gbogbo àwùjọ",
  },
  IGB: {
    mission: "Ebumnuche Anyị",
    missionDesc:
      "Anyị na-enye ndị obodo ike ịkọrọ ụdị okwu na-eme n'obodo ha inyere ha aka isi mgbawa nke ọma. Site n'idọgide nke teknụzụ AI na mmasị obodo, SnapAct na-ejikọ nsogbu na ihe ngwọta.",
    vision: "Ọhụhụ Anyị",
    visionDesc:
      "Ụwa ebe ọ bụla na-eme ka mmekorita ọbụ ike ịkọrọ ụdị okwu na-eme na ngwọta ha ngwa ngwa— ime obodo dị ire, dị eme, na-eche mmasị ndị obodo.",
    values: "Ụkpụrụ Anyị",
    value1: "Ìhighị Okpukpu",
    value1Desc: "Oke ịgwa okwu na ụmụ akwụkwọ na mmekorita",
    value2: "Ike Onwe",
    value2Desc: "Ndị obodo na-ewere ihe omume na mpaghara ha",
    value3: "Otu Ọhụ",
    value3Desc: "Ihe otucha na teknụzụ maka okwu obodo",
    value4: "Ịnwe Isi n'ụka",
    value4Desc: "Inyere ndị asụsụ niihe na mmekorita niile aka",
  },
}

export default function MissionSection({ language }: { language: "ENG" | "HAU" | "YOR" | "IGB" }) {
  const t = translations[language]
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      },
    )

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 55%",
            scrub: 1,
          },
        },
      )
    })
  }, [language])

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-background via-blue-50/20 to-orange-50/10"
    >
      <div className="max-w-6xl mx-auto">
        <h1 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
          {t.mission}
        </h1>
        <p className="text-lg text-center text-foreground/70 max-w-3xl mx-auto mb-16">{t.missionDesc}</p>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission Card */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[0] = el
            }}
            className="p-8 rounded-xl bg-white/60 backdrop-blur-sm border border-border hover:border-accent-primary/50 transition-all hover:shadow-lg"
          >
            <h3 className="text-2xl font-bold text-accent-primary mb-3">{t.mission}</h3>
            <p className="text-foreground/70">{t.missionDesc}</p>
          </div>

          {/* Vision Card */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[1] = el
            }}
            className="p-8 rounded-xl bg-white/60 backdrop-blur-sm border border-border hover:border-accent-secondary/50 transition-all hover:shadow-lg"
          >
            <h3 className="text-2xl font-bold text-accent-secondary mb-3">{t.vision}</h3>
            <p className="text-foreground/70">{t.visionDesc}</p>
          </div>

          {/* Values Card */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[2] = el
            }}
            className="p-8 rounded-xl bg-white/60 backdrop-blur-sm border border-border hover:border-accent-primary/50 transition-all hover:shadow-lg"
          >
            <h3 className="text-2xl font-bold text-accent-primary mb-4">{t.values}</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-foreground/80">
                <span className="font-semibold">{t.value1}:</span> {t.value1Desc}
              </li>
              <li className="text-foreground/80">
                <span className="font-semibold">{t.value2}:</span> {t.value2Desc}
              </li>
              <li className="text-foreground/80">
                <span className="font-semibold">{t.value3}:</span> {t.value3Desc}
              </li>
              <li className="text-foreground/80">
                <span className="font-semibold">{t.value4}:</span> {t.value4Desc}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
