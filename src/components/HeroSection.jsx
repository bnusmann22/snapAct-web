'use client'

// src/components/HeroSection.tsx
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { useState } from 'react'

const ANIMATION_TIMINGS = {
  logo: { duration: 0.8 },
  title: { duration: 1 },
  subtitle: { delay: 0.3, duration: 0.8 },
  buttons: { delay: 0.6, duration: 0.8 },
  languagePane: { delay: 0.8, duration: 0.7 },
}

const LANGUAGES = ['ENG', 'YOR', 'HAU', 'IGB']

const GITHUB_REPO_URL = 'https://github.com/bnusmann22/snapAct-web'

const HeroSection = () => {
  const [language, setLanguage] = useState('ENG')

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
    // TODO: integrate translation API call here (Google or LibreTranslate)
    console.log(`Language switched to ${lang}`)
  }

  return (
    <section
      className="relative h-screen flex justify-end items-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('heroBG.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      {/* Header: Logo + GitHub */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-6 z-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: ANIMATION_TIMINGS.logo.duration }}
        >
          <img src="/VECTOR.png" alt="SnapAct Logo" className="h-10 w-auto " />
        </motion.div>

        {/* GitHub Star Glass Pane */}
        <motion.a
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="backdrop-blur-lg bg-white/10 border border-white/20 text-sm font-medium px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2 hover:bg-white/20 transition-all"
        >
          <Github className="w-4 h-4" />
          <span>⭐ Star on GitHub</span>
        </motion.a>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 w-full flex flex-col justify-center items-start px-12 md:px-24 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION_TIMINGS.title.duration }}
          className="text-5xl md:text-7xl font-extrabold leading-tight  bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,115,0,0.6)]"
        >
          Report it with pictures.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: ANIMATION_TIMINGS.subtitle.delay,
            duration: ANIMATION_TIMINGS.subtitle.duration,
          }}
          className="mt-4 text-lg md:text-xl text-white/90 italic"
        >
          It's like Snap, but takes{' '}
          <span className="text-[#ff7300] font-semibold">ACTION.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: ANIMATION_TIMINGS.buttons.delay,
            duration: ANIMATION_TIMINGS.buttons.duration,
          }}
          className="mt-8 flex gap-4"
        >
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff7300] to-[#ff9e00] text-black font-semibold shadow-[0_0_20px_rgba(255,115,0,0.6)] hover:scale-95 transition-transform">
            Download App
          </button>
          <button className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all">
            Watch Demo
          </button>
        </motion.div>
      </div>

      {/* Floating Translation Pane */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: ANIMATION_TIMINGS.languagePane.delay,
          duration: ANIMATION_TIMINGS.languagePane.duration,
        }}
        className="absolute top-1/2 right-8 -translate-y-1/2 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-3 flex flex-col gap-3 z-20 shadow-lg"
      >
        {LANGUAGES.map((lang) => (
          <motion.button
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            whileHover={{ scale: 1.1 }}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              language === lang
                ? ' text-black shadow-[0_0_10px_rgba(255,115,0,0.5)]'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            {lang}
          </motion.button>
        ))}
      </motion.div>
    </section>
  )
}

export default HeroSection
