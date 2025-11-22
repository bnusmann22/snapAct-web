"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const languages = [
  { code: "ENG", label: "English", flag: "🇬🇧" },
  { code: "HAU", label: "Hausa", flag: "🇳🇪" },
  { code: "YOR", label: "Yoruba", flag: "🇳🇬" },
  { code: "IGB", label: "Igbo", flag: "🇳🇬" },
]

export default function TranslationPane({
  language,
  setLanguage,
}: {
  language: "ENG" | "HAU" | "YOR" | "IGB"
  setLanguage: (lang: "ENG" | "HAU" | "YOR" | "IGB") => void
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Glassmorphic Translation Pane */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-6 right-6 z-50 w-80 p-6 rounded-3xl"
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 107, 29, 0.2)",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1), inset 0 1px rgba(255, 255, 255, 0.5)",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-foreground">Select Language</h3>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as "ENG" | "HAU" | "YOR" | "IGB")
                    setIsOpen(false)
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl transition-all duration-300 flex flex-col items-center gap-2"
                  style={{
                    background: language === lang.code ? "rgba(255, 107, 29, 0.1)" : "rgba(0, 0, 0, 0.03)",
                    border:
                      language === lang.code ? "2px solid rgba(255, 107, 29, 0.4)" : "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="text-sm font-semibold text-foreground">{lang.code}</span>
                  <span className="text-xs text-muted-foreground">{lang.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Glassmorphic edge highlight */}
            <div
              className="absolute inset-0 rounded-3xl opacity-10 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, transparent 50%)",
              }}
            />
          </motion.div>
        ) : (
          <motion.button
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="fixed top-6 right-6 z-40 px-4 py-2 rounded-full flex items-center justify-center transition-all duration-300 text-sm font-semibold"
            style={{
              background: "rgba(255, 107, 29, 0.1)",
              border: "1px solid rgba(255, 107, 29, 0.3)",
              color: "var(--accent-primary)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🌐 {language}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Background overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/10"
          />
        )}
      </AnimatePresence>
    </>
  )
}
