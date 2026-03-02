"use client"

import { motion } from "framer-motion"
import { Share2, Zap, Globe, Lock, TrendingUp, Users2, Map } from "lucide-react"

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
      {title: "Karɓa Nan Take",description: "Sani matsayin da kyau ta jiya-jiya da kamera",icon: Share2,},
      {title: "Aiki na Gaske",description: "Rajocinki ka kai tsaye ga jama'a",icon: Zap},
      {title: "Kayan Jiya",description: "Shiga kasua na gida da bettarwa",icon: Globe},
      {title: "Kare Asiri",description: "Encryption daga gida zuwa gida da cire sunaye",icon: Lock},
      {title: "Ware Tutudde",description: "AI yana tsara matsala don sauri",icon: Zap},
      {title: "Bincika Ci Gaba",description: "Samu sabbin labari game da abubuwan da ka sani",icon: TrendingUp},
      {title: "Karfen Jama'a",description: "Taɓa batu, tattauna, da girma aiki",icon: Users2},
      {title: "Ingancin Wuri",description: "Geo-tagging ta kansu don sani daidai",icon: Map},
    ],
  },
  YOR: {
    title: "Iroyin Aṣa Ilu Wipe",
    features: [
      {title: "Yanju Nipa Igbanu",description: "Ṣẹda aworan ti isọkan ni abini pelu kamera",icon: Share2},
      {title: "Ise Gidi",description: "Iroyin rẹ tẹnumọ si awọn oluṣe ilu",icon: Zap},
      {title: "Agbaye Laipin",description: "Darapọ si agbegbe ti o ṣe ilu dara",icon: Globe},
      {title: "Ifojusun Asiri",description: "Encryption duro si owu ati ifirayese orukọ",icon: Lock},
      {title: "Ọgbọ́ Abẹ̀",description: "AI ṣe akiyesi ati ṣiṣe ẹka fun iṣu",icon: Zap},
      {title: "Ṣawari Iyipada",description: "Gba alaye laipin nipa isọkan rẹ",icon: TrendingUp},
      {title: "Ẹgbẹ Agbegbe",description: "Ye batu, tattauna, ki o diju iṣẹ ọkan",icon: Users2},
      {title: "Aaye Ṣoṣo",description: "Automatic geo-tagging fun sọ daidai",icon: Map},
    ],
  },
  IGB: {
    title: "Ngosipụta Obodo Dị Ike",
    features: [
      {title: "Nweta Nweta",description: "Debe ihe ọjọọ n'ụzọ ije ma ọ bu kamera",icon: Share2},
      {title: "Ọrụ Eziokwu",description: "Akụkọ gị bata na ndị ọrụ obodo",icon: Zap},
      {title: "Mụmụ Ụwa",description: "Soro mpaghara ime obodo kacha mma",icon: Globe},
      {title: "Nchekwa Nzuzo",description: "Mgbanaka na-egbeke na nnabata orụ aha",icon: Lock},
      {title: "Nyocha Ọgbụgbụ",description: "AI na-akọ ihe n'ime ụdị maka ngwa ngwa",icon: Zap},
      {title: "Ịchọ Ike",description: "Anụ ọkụ mma gbasara akụkọ gị",icon: TrendingUp},
      {title: "Mmadụ Obodo",description: "Tinye aka, sọrọ, ma tinye ike ọrụ",icon: Users2},
      {title: "Ọnọdụ Ziri Ezi",description: "Automatic geo-tagging maka ngosipụta kwesịrị ekwesị",icon: Map},
    ],
  },
}

export default function FeatureSection({ language}: { 
  language: "ENG" | "HAU" | "YOR" | "IGB" 
}) {
  const content = featureContent[language]

  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-brand-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-brand-primary">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to create real civic impact
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.features.map((feature, i) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="h-full glass rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-brand-primary/10 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-300 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-black mb-3 text-slate-900 group-hover:text-brand-primary transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}