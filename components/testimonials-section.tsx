"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Star } from "lucide-react"
import { useRef } from "react"

const testimonialsContent = {
  ENG: {
    badge: "Community Voices",
    title: "Real Stories from Real Citizens",
    subtitle: "Join thousands making a difference in their communities",
    testimonials: [
      {
        name: "Aisha Mohammed",
        location: "Lagos, Nigeria",
        role: "Community Advocate",
        quote: "SnapAct helped us fix 12 streetlights in our neighborhood. The authorities responded in just 3 days!",
        avatar: "/placeholder-user.jpg",
        rating: 5
      },
      {
        name: "Chidi Okafor",
        location: "Abuja, Nigeria",
        role: "Student",
        quote: "I reported a pothole that caused an accident. It was fixed within a week. This app actually works!",
        avatar: "/placeholder-user.jpg",
        rating: 5
      },
      {
        name: "Fatima Yusuf",
        location: "Kano, Nigeria",
        role: "Teacher",
        quote: "The AI categorization is brilliant. I don't have to explain what the problem is—it just knows!",
        avatar: "/placeholder-user.jpg",
        rating: 5
      },
      {
        name: "Samuel Ade",
        location: "Port Harcourt, Nigeria",
        role: "Developer",
        quote: "Using SnapAct I tracked a leaking pipe that civil servants repaired within two days. Truly impactful!",
        avatar: "/placeholder-user.jpg",
        rating: 5
      }
    ]
  },
  HAU: {
    badge: "Muryar Al'umma",
    title: "Labarai Na Gaske Daga 'Yan Ƙasa",
    subtitle: "Shiga dubban mutane masu kawo canji a al'ummomin su",
    testimonials: [
      {
        name: "Aisha Mohammed",
        location: "Lagos, Najeriya",
        role: "Mai Tallata Al'umma",
        quote: "SnapAct ya taimaka mana mu gyara fitilun Waya 12 a unguwarmu. Hukumomi sun amsa a cikin kwanaki 3 kawai!",
        avatar: "/placeholder-user.jpg",
        rating: 5
      },
      {
        name: "Chidi Okafor",
        location: "Abuja, Najeriya",
        role: "Ɗalibi",
        quote: "Na bayar da rahoton rami wanda ya haifar da hatsari. An gyara shi a cikin mako guda. Wannan app yana aiki da gaske!",
        avatar: "/placeholder-user.jpg",
        rating: 5
      },
      {
        name: "Fatima Yusuf",
        location: "Kano, Najeriya",
        role: "Malami",
        quote: "Rarraban AI yana da kyau sosai. Ba sai in bayyana menene matsalar ba—ya sani kawai!",
        avatar: "/placeholder-user.jpg",
        rating: 5
      },
      {
        name: "Samuel Ade",
        location: "Port Harcourt, Najeriya",
        role: "Mai Haɓaka",
        quote: "Ta amfani da SnapAct na sa ido kan bututun da ke zubowa wanda jami'an gwamnati suka gyara cikin kwana biyu. Cikin tasiri sosai!",
        avatar: "/placeholder-user.jpg",
        rating: 5
      }
    ]
  },
  YOR: {
    badge: "Ohùn Àwùjọ",
    title: "Àwọn Ìtàn Gidi Láti Ọdọ̀ Àwọn Ará Ìlú",
    subtitle: "Darap mọ ẹgbẹrun ti o n ṣe iyipada ni agbegbe wọn",
    testimonials: [
      {
        name: "Aisha Mohammed",
        location: "Lagos, Nigeria",
        role: "Alagbawi Agbegbe",
        quote: "SnapAct ṣe iranlọwọ fun wa lati ṣe atunṣe awọn fìtílà méjìlá ni agbegbe wa. Awọn alaṣẹ dahun ni ọjọ mẹta nikan!",
        avatar: "/placeholder-user.jpg",
        rating: 5
      },
      {
        name: "Chidi Okafor",
        location: "Abuja, Nigeria",
        role: "Akẹkọọ",
        quote: "Mo kọ ihò kan ti o fa ijamba kan. O ti wa ni atunṣe laarin ọsẹ kan. App yii n ṣiṣẹ gaan!",
        avatar: "/placeholder-user.jpg",
        rating: 5
      },
      {
        name: "Fatima Yusuf",
        location: "Kano, Nigeria",
        role: "Olùkọ́",
        quote: "Ìpínsí AI naa dara pupọ. Mi o ni lati ṣe alaye ohun ti isoro naa jẹ—o mọ nikan!",
        avatar: "/placeholder-user.jpg",
        rating: 5
      },
      {
        name: "Samuel Ade",
        location: "Port Harcourt, Nigeria",
        role: "Oníṣẹ́",
        quote: "Nípasẹ̀ SnapAct mo tọ́pa ìtọ́jú pípa omi tí àwọn aṣọ́tẹ́lẹ̀ ṣètọ́ nínu ọjọ́ méjì. Ó nífẹ̀ẹ́ gan-an!",
        avatar: "/placeholder-user.jpg",
        rating: 5
      }
    ]
  },
  IGB: {
    badge: "Olu Obodo",
    title: "Akụkọ Nke Ezi Ndị Obodo",
    subtitle: "Sonyere ọtụtụ puku na-eme mgbanwe na obodo ha",
    testimonials: [
      {
        name: "Aisha Mohammed",
        location: "Lagos, Nigeria",
        role: "Onye Nkwado Obodo",
        quote: "SnapAct nyeere anyị aka dozie ọkụ okporo ụzọ 12 n'ime mpaghara anyị. Ndị ọchịchị zara n'ime ụbọchị 3 naanị!",
        avatar: "/placeholder-user.jpg",
        rating: 5
      },
      {
        name: "Chidi Okafor",
        location: "Abuja, Nigeria",
        role: "Nwa akwụkwọ",
        quote: "Akọrọ m olulu nke kpatara ọghọm. A rụziri ya n'ime otu izu. Ngwa a na-arụ ọrụ n'ezie!",
        avatar: "/placeholder-user.jpg",
        rating: 5
      },
      {
        name: "Fatima Yusuf",
        location: "Kano, Nigeria",
        role: "Onye nkuzi",
        quote: "Nhazi AI dị mma nke ukwuu. Achọghị m ịkọwa ihe nsogbu ahụ bụ—ọ maara naanị!",
        avatar: "/placeholder-user.jpg",
        rating: 5
      },
      {
        name: "Samuel Ade",
        location: "Port Harcourt, Nigeria",
        role: "Onye mmepe",
        quote: "Site na SnapAct, achọtara m ọkpọkọ mmiri nke ndị ọchịchị rụzuru n'ime ụbọchị abụọ. Ọ bara ezigbo uru!",
        avatar: "/placeholder-user.jpg",
        rating: 5
      }
    ]
  }
}

export default function TestimonialsSection({ language }: { language: "ENG" | "HAU" | "YOR" | "IGB" }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const content = testimonialsContent[language]

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-white via-amber-50/30 to-white"
    >
      {/* Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-30 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-yellow-500/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-yellow-700">{content.badge}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-slate-600">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="glass rounded-3xl p-8 border border-slate-200 h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + i * 0.1, duration: 0.3 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-700 leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-lg shadow-md"
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                    <div className="text-xs text-slate-400">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all"
          >
            {language === "ENG" ? "Read More Stories" : 
             language === "HAU" ? "Karanta Ƙarin Labarai" :
             language === "YOR" ? "Ka Awọn Itan Diẹ Sii" :
             "Gụkwuo Akụkọ Ndị Ọzọ"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
