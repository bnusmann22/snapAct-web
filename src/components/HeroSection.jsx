'use client'

// src/components/HeroSection.tsx
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { useState } from 'react'
import CameraImage from '../assets/lensNOBG.png'

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
      className="relative h-screen flex justify-center items-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('heroBG.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>

      {/* Header: Logo + GitHub */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-6 z-20 md:px-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: ANIMATION_TIMINGS.logo.duration }}
        >
          <img
            src="/VECTOR.png"
            alt="SnapAct Logo"
            className="h-12 w-auto md:h-20"
          />
        </motion.div>

        {/* GitHub Star Glass Pane */}
        <motion.a
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.01 }}
          className="backdrop-blur-lg bg-blue-800 border border-[#ff7300] text-sm font-medium px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2  transition-all"
        >
          <Github className="w-4 h-4" />
          <span>⭐ Star on GitHub</span>
        </motion.a>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 w-full flex flex-col  items-end px-12  max-w-3xl">
        <img
          src={CameraImage} // **IMPORTANT: Replace with the actual path to your image**
          alt="Camera lens visual"
          className="
              absolute
              -z-10  /* Place it behind the text (which has z-10) */
               top-1/2 transform right-0 translate-x-1/4 -translate-y-1/2 /* Center it */
              w-[600px] h-[600px] md:w-[800px] md:h-[800px] /* Adjust size as needed */
              opacity-20 /* Make it subtle */
              object-cover
              pointer-events-none /* Prevents interaction with the image */
          "
        />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION_TIMINGS.title.duration }}
          class="
          text-5xl md:text-8xl font-extrabold leading-none md:leading-snug
          text-transparent [-webkit-text-stroke:2px_black]
           text-blue-950
        "
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
          className="mt-4 text-lg font-roboto md:text-4xl text-black"
        >
          It's like Snap, but takes{' '}
          <span className="text-[#ff7300] font-semibold">ACTION.</span>
        </motion.p>

        {/* CTA Buttons */}
      </div>

      {/* Floating Translation Pane */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: ANIMATION_TIMINGS.languagePane.delay,
          duration: ANIMATION_TIMINGS.languagePane.duration,
        }}
        className="absolute top-[60%] md:top-1/2 right-[-9px] md:right-8 -translate-y-1/2 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-2 md:p-3 flex flex-col gap-2 md:gap-3 z-20 shadow-lg"
      >
        {LANGUAGES.map((lang) => (
          <motion.button
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            whileHover={{ scale: 1.1 }}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              language === lang
                ? ' text-black '
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
