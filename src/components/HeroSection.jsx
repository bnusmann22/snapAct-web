import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { useState, useMemo } from 'react'
// CameraImage and snapIcon imports are not used in the final JSX but kept for reference if needed elsewhere.
import CameraImage from '../assets/lensNOBG.png'
import snapIcon from '../assets/snapICON.png';

const ANIMATION_TIMINGS = {
  logo: { duration: 0.8 },
  title: { duration: 1 },
  subtitle: { delay: 0.3, duration: 0.8 },
  buttons: { delay: 0.6, duration: 0.8 },
  languagePane: { delay: 0.8, duration: 0.7 },
}

// Define animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: ANIMATION_TIMINGS.subtitle.delay,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: ANIMATION_TIMINGS.subtitle.duration } },
};

const snapVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: ANIMATION_TIMINGS.subtitle.duration } },
};

const LANGUAGES = ['ENG', 'YOR', 'HAU', 'IGB']

const GITHUB_REPO_URL = 'https://github.com/bnusmann22/snapAct-web'

// Hard-coded translations dictionary
const translations = {
  ENG: {
    title: "Report it with pictures.",
    subtitlePart1: "... it's just like",
    snapChatText: "SnapChat",
    starOnGitHub: "⭐ Star on GitHub",
    
  },
  YOR: {
    title: "Fi aworan sọ funni.", 
    subtitlePart1: "... o dabi", 
    snapChatText: "SnapChat", 
    starOnGitHub: "⭐ Ṣe irawọ lori GitHub", 
  },
  HAU: {
    title: "Ba da rahoto da hotuna.", 
    subtitlePart1: "... yana kamar", 
    snapChatText: "SnapChat",
    starOnGitHub: "⭐ Ba da tauraro a GitHub", 
  },
  IGB: {
    title: "Kọ akụkọ ya na foto.", 
    subtitlePart1: "... ọ dị ka", 
    snapChatText: "SnapChat",
    starOnGitHub: "⭐ Nye kpakpando na GitHub", 
  },
};

const HeroSection = () => {
  const [language, setLanguage] = useState('ENG');

  const currentTranslations = useMemo(() => translations[language], [language]);

  const handleLanguageChange = (lang) => {
    if (LANGUAGES.includes(lang)) {
      setLanguage(lang);
      // Removed the old console log for a cleaner implementation
    }
  };

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
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
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
        <motion.div
          className="
            px-1
            bg-white/20
            backdrop-blur-lg
            shadow-2xl
            rounded-2xl
            border border-white/30
            text-white
            transition-all
            flex items-center justify-end gap-3 cursor-pointer
          "
        >
          <Github className="w-6 h-6 text-blue-900" />
          <motion.a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-lg bg-blue-800 border border-[#ff7300] text-sm font-medium rounded-2xl shadow-lg px-4 py-2 flex items-center"
          >
            <span>{currentTranslations.starOnGitHub}</span>
          </motion.a>
        </motion.div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 w-full flex flex-col px-12  max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION_TIMINGS.title.duration }}
          className="
          text-5xl md:text-8xl font-extrabold leading-none md:leading-snug
           text-blue-950
        "
        >
          {currentTranslations.title}
        </motion.h1>

        <motion.p
          variants={containerVariants}
          initial="hidden"
          animate="visible" // Animates on load
          className="mt-4 text-lgx italic font-display md:text-6xl text-black whitespace-nowrap "
        >
          {/* Subtitle text is now a single string from translations */}
          <motion.span variants={childVariants}>{currentTranslations.subtitlePart1} </motion.span>

          <motion.span
            variants={snapVariants}
            className="italic  md:text-6xl  text-yellow-400 inline-flex items-center"
          >
            {currentTranslations.snapChatText}
            <img
              src={snapIcon}
              alt="Snap Act Icon"
              className="h-48 w-48 md:h-20 md:w-20 object-contain ml-1" // Added ml-1 for space between text and icon
            />
          </motion.span>
        </motion.p>
      </div>

      {/* Floating Translation Pane */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: ANIMATION_TIMINGS.languagePane.delay,
          duration: ANIMATION_TIMINGS.languagePane.duration,
        }}
        className="absolute top-[60%] md:top-1/2 md:fixed right-[-9px] md:right-8 -translate-y-1/2 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-2 md:p-3 flex flex-col gap-2 md:gap-3 z-20 shadow-lg"
      >
        {LANGUAGES.map((lang) => (
          <motion.button
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            whileHover={{ scale: 1.1 }}
            // Apply unique background color for the active button to clearly show the state
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              language === lang
                ? 'bg-[#ff7300] text-white shadow-md' // Active state style (used your theme color #ff7300)
                : 'bg-white/10 text-white/80 hover:bg-white/20' // Inactive state style
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
