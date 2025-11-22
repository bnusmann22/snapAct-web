"use client"

import { useState, useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronDown } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const translations = {
  ENG: {
    title: "Frequently Asked Questions",
    faqItems: [
      {
        question: "How accurate is the geo-tagging?",
        answer:
          "Our technology uses GPS and AR for pinpoint precision, even in urban areas with limited satellite signal. We continuously improve accuracy through machine learning.",
      },
      {
        question: "What happens after I report an issue?",
        answer:
          "Reports are automatically routed to relevant local authorities, community groups, or maintenance teams. You'll receive real-time status updates and notifications as your report progresses.",
      },
      {
        question: "Is reporting anonymous?",
        answer:
          "Yes, all reports are anonymous by default. However, you can choose to share your contact information if you'd like follow-ups or to join community discussions about the issue.",
      },
      {
        question: "What devices are supported?",
        answer:
          "SnapAct is available on iOS (version 12+) and Android (version 8+). We're continuously optimizing for all device types and screen sizes.",
      },
    ],
  },
  HAU: {
    title: "Tambayoyin Gida",
    faqItems: [
      {
        question: "Kina yawa ne geo-tagging?",
        answer:
          "Saniyarmu ta amfani da GPS da AR don daidaita aiki, ko da a yawan karuwar. Mun cigaba da haɓaka dacewa ta hanyar machine learning.",
      },
      {
        question: "Me kake faru after na raida matsaloli?",
        answer:
          "Rahotanni an gorshi ga jiya gida, ƙungiyoyi, ko ƙwararrun kula. Za ka karɓi sabis na lokaci-lokaci da sanarwa kamar rahotin ka na tafiya.",
      },
      {
        question: "Shin raida an iya bayarwa anonim?",
        answer:
          "Eh, duk rahotanni suna anonim by default. Kuma za ka iya zaba bayar da alamar da ke shiga in kana so maidaowa ko shiga jima'a.",
      },
      {
        question: "Wane nau'ikan allon da aka tarayya?",
        answer: "SnapAct akwai a iOS (version 12+) da Android (version 8+). Mun cigaba da kulla ga duk nau'ikan allon.",
      },
    ],
  },
  YOR: {
    title: "Awon Ibeere ti Ise Ninu",
    faqItems: [
      {
        question: "Eka geo-tagging?",
        answer:
          "Isha wa lo GPS ati AR fun igbadoge ti o nipọn, paapaa ni awon ili ti o ko wi ni GPS. A lo tun fa ede jara nipase machine learning.",
      },
      {
        question: "Kini o le gbe tii n ba fun?",
        answer:
          "Awon itan a tu si awon ile to sin, awon ajo, tabi awon olu. O yoo gba ifihan akokunlepo ati ibadandun bi itan e n lo.",
      },
      {
        question: "Ọkan kan ti o ba rọ itan?",
        answer:
          "Eh, gbogbo awon itan wa ni akanpo lopẹ lati ibẹrẹ. Bibẹ, o le yan lati fi sini ti o ba fẹ atilẹyin tabi lati pade awon eniyan.",
      },
      {
        question: "Awon iru ẹrọ wo ni a ti ṣatunṣe?",
        answer: "SnapAct wa lori iOS (version 12+) ati Android (version 8+). A lo tun fa ṣiṣe fun gbogbo iru ẹrọ.",
      },
    ],
  },
  IGB: {
    title: "Ajụjụ a Azụmapụta Ugboro Ugboro",
    faqItems: [
      {
        question: "Kedu nke geo-tagging?",
        answer:
          "Saịens anyị eji GPS na AR maka nkọ ziri ezi, n'ụlọ ọrụ nke agbanyụ. Anyị na-aga n'ihu mabuli nkọ site n'ụzọ nke nkà iwu.",
      },
      {
        question: "Gini ka na-eme mgbe m gwara chi ihe?",
        answer:
          "A napụta ozi na ndị ọchịchị gburugburu, otu ọrụ, ma ọ bụ ndị ọrụ nlekọta. Ị ga-enweta nkọwa oge-oge na ụpụ ụpụ ka ozi gị n'aga.",
      },
      {
        question: "Ọ bụ na ịgwa chi ihe nwere nzuzo?",
        answer:
          "Ee, ihe nile nzuzo site n'isi. Mana, ị nwere ike ịzọ inye ozi gị ma ọ bụrụ na ị chọrọ azizza ma ọ bụ ikwu okwu.",
      },
      {
        question: "Kedu ụdị ngwa a gbara ume?",
        answer:
          "SnapAct dị na iOS (version 12+) na Android (version 8+). Anyị na-aga n'ihu ỵmezi ume maka ụdị ngwa nile.",
      },
    ],
  },
}

export default function FAQSection({ language }: { language: "ENG" | "HAU" | "YOR" | "IGB" }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const t = translations[language]

  useEffect(() => {
    if (!sectionRef.current) return

    const items = sectionRef.current.querySelectorAll(".faq-item")

    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            markers: false,
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [language])

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-background via-blue-50 to-background"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">{t.title}</h2>

        <div className="space-y-4">
          {t.faqItems.map((item, index) => (
            <div key={index} className="faq-item bg-card border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground text-left">{item.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-accent-primary transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 pb-4 border-t border-border">
                  <p className="text-foreground/70 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
