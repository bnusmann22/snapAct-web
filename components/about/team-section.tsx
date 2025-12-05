"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const translations = {
  ENG: {
    team: "Meet Our Team",
    teamDesc: "Passionate innovators working to make a difference in civic engagement",
  },
  HAU: {
    team: "Sanin Ƙungiyarmu",
    teamDesc: "Masu murna da abubuwan sababba da suke aiki don canja al'amura a cikin jama'a",
  },
  YOR: {
    team: "Pàdé Ẹgbẹ́ Awa",
    teamDesc: "Awọn onimọ̀ràn tí ó nifẹ̀ ìbágbisí tí wọn ń ṣiṣẹ́ láti ṣe iyipada nínú ibasọ̀rọ̀ ọmọ àdúmọ̀",
  },
  IGB: {
    team: "Gụopu Anyị",
    teamDesc: "Ndị na-ataghị igbu ume na-arụ ọrụ iji mezie ihe omume na mmekorita",
  },
}

const teamMembers = [
  {
    id: 1,
    name: "Jamil Muhammad",
    role: "CEO & Co-founder",
    bio: "Tech entrepreneur focused on social impact",
    image: "/professional-woman-african-tech-leader.jpg",
  },
  {
    id: 2,
    name: "Idris Mukhtar",
    role: "CTO & Lead Engineer",
    bio: "AI specialist with 10+ years experience",
    image: "/professional-man-african-tech-engineer.jpg",
  },
  {
    id: 3,
    name: "Zainab Abdulazeez",
    role: "Community Manager",
    bio: "Bridging technology and grassroots movements",
    image: "/professional-woman-african-community-leader.jpg",
  },
  {
    id: 4,
    name: "GodsPower AkpaKpan",
    role: "Design Lead",
    bio: "Creating intuitive experiences for all users",
    image: "/professional-woman-african-ux-designer.jpg",
  },
]

export default function TeamSection({ language }: { language: "ENG" | "HAU" | "YOR" | "IGB" }) {
  const t = translations[language]
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const membersRef = useRef<HTMLDivElement[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

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

    membersRef.current.forEach((member, index) => {
      gsap.fromTo(
        member,
        { opacity: 0, scale: 0.95, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: member,
            start: "top 85%",
            end: "top 55%",
            scrub: 1,
          },
        },
      )

      // Create sticky stacking effect for each team member
      gsap.to(member, {
        position: "sticky",
        top: `${index * 2}px`, // 2px offset for each member
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [language])

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-orange-50/10 to-background"
    >
      <div className="max-w-6xl mx-auto">
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
          {t.team}
        </h2>
        <p className="text-lg text-center text-foreground/60 max-w-2xl mx-auto mb-16">{t.teamDesc}</p>

        {/* Team Stack Container */}
        <div ref={containerRef} className="relative">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              ref={(el) => {
                if (el) membersRef.current[index] = el
              }}
              className="group mb-0 transition-all duration-300 ease-out"
              style={{
                zIndex: 10 - index, // Reverse z-index so earlier items appear on top visually but are clickable
              }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100/50 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                    <p className="text-base font-semibold text-accent-primary mb-3">{member.role}</p>
                    <p className="text-foreground/70 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
