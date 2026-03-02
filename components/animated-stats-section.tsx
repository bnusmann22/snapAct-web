"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Users, MapPin, CheckCircle2, TrendingUp } from "lucide-react"

const statsContent = {
  ENG: {
    title: "Impact by the Numbers",
    subtitle: "Real people, real change, real results",
    stats: [
      { icon: Users, value: 12500, suffix: "+", label: "Active Citizens" },
      { icon: MapPin, value: 8200, suffix: "+", label: "Issues Reported" },
      { icon: CheckCircle2, value: 73, suffix: "%", label: "Resolution Rate" },
      { icon: TrendingUp, value: 45, suffix: "x", label: "Faster Response" }
    ]
  },
  HAU: {
    title: "Tasiri Ta Lambobi",
    subtitle: "Mutane na gaske, canji na gaske, sakamako na gaske",
    stats: [
      { icon: Users, value: 12500, suffix: "+", label: "'Yan Ƙasa Masu Aiki" },
      { icon: MapPin, value: 8200, suffix: "+", label: "Matsalolin Da Aka Bayar" },
      { icon: CheckCircle2, value: 73, suffix: "%", label: "Matsayin Warwarewa" },
      { icon: TrendingUp, value: 45, suffix: "x", label: "Amsa Mai Sauri" }
    ]
  },
  YOR: {
    title: "Ipa Nipasẹ Awọn Nọmba",
    subtitle: "Awọn eniyan gidi, iyipada gidi, abajade gidi",
    stats: [
      { icon: Users, value: 12500, suffix: "+", label: "Awọn Ara Ilu Ti O Nṣiṣẹ" },
      { icon: MapPin, value: 8200, suffix: "+", label: "Awọn Isoro Ti A Kọ" },
      { icon: CheckCircle2, value: 73, suffix: "%", label: "Oṣuwọn Ipinnu" },
      { icon: TrendingUp, value: 45, suffix: "x", label: "Idahun Yara" }
    ]
  },
  IGB: {
    title: "Mmetụta Site Na Ọnụọgụ",
    subtitle: "Ndị mmadụ n'ezie, mgbanwe n'ezie, nsonaazụ n'ezie",
    stats: [
      { icon: Users, value: 12500, suffix: "+", label: "Ụmụ Amaala Na-arụ Ọrụ" },
      { icon: MapPin, value: 8200, suffix: "+", label: "Nsogbu Akọwara" },
      { icon: CheckCircle2, value: 73, suffix: "%", label: "Ọnụego Mkpebi" },
      { icon: TrendingUp, value: 45, suffix: "x", label: "Nzaghachi Ngwa Ngwa" }
    ]
  }
}

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (value - startValue) + startValue)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export default function AnimatedStatsSection({ language }: { language: "ENG" | "HAU" | "YOR" | "IGB" }) {
  const content = statsContent[language]

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-brand-primary to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-white/80">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="relative group"
              >
                <div className="glass-dark rounded-2xl p-8 text-center border border-white/10 hover:border-white/30 transition-all duration-300">
                  {/* Animated Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Animated Number */}
                  <div className="text-5xl md:text-6xl font-black text-white mb-2">
                    <AnimatedCounter value={stat.value} duration={2.5} />
                    <span className="text-brand-accent">{stat.suffix}</span>
                  </div>

                  {/* Label */}
                  <p className="text-white/80 font-semibold text-lg">
                    {stat.label}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-accent/0 to-brand-primary/0 group-hover:from-brand-accent/20 group-hover:to-brand-primary/20 transition-all duration-300 -z-10" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Animated Pulse Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </div>
    </section>
  )
}
