import React from 'react'
import { motion } from 'framer-motion'

const ANIMATION_TIMINGS = {
  logo: { duration: 0.8 },
  title: { duration: 1 },
  subtitle: { delay: 0.3, duration: 0.8 },
  buttons: { delay: 0.6, duration: 0.8 },
  languagePane: { delay: 0.8, duration: 0.7 },
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: ANIMATION_TIMINGS.subtitle.delay,
      staggerChildren: 0.2,
    },
  },
};

function ScrollySection() {
  return (

  )
}

export default ScrollySection
