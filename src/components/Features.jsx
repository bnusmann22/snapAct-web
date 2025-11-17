import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

import { motion } from 'framer-motion'

const ANIMATION_TIMINGS = {
  logo: { duration: 0.8 },
  title: { duration: 1 },
  subtitle: { delay: 0.3, duration: 0.8 },
  buttons: { delay: 0.6, duration: 0.8 },
  languagePane: { delay: 0.8, duration: 0.7 },
}


// Register the ScrollTrigger plugin once
gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    title: 'Lightning Fast ⚡',
    desc: 'Optimized performance with zero lag.',
    img: 'https://images.unsplash.com/photo-1518770660439-24edd4c5655c?w=600&h=400&fit=crop',
  },
  {
    title: 'Secure by Default 🛡️',
    desc: 'End-to-end encryption and privacy first.',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
  },
  {
    title: 'Beautiful UI ✨',
    desc: 'Pixel-perfect design that delights.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit-crop',
  },
  {
    title: 'Always Synced 🔄',
    desc: 'Real-time updates across all devices.',
    img: 'https://images.unsplash.com/photo-1518770660439-24edd4c5655c?w=600&h=400&fit=crop',
  },
  {
    title: 'AI Powered 🧠',
    desc: 'Smart features that learn from you.',
    img: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
  },
]

function Features() {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)

  // useGSAP is the recommended way to use GSAP in React for automatic cleanup.
  useGSAP(
    () => {
      const section = sectionRef.current

      // Total width of all feature cards combined
      // We assume each card is 100vw wide
      const cardWidth = window.innerWidth
      const totalScrollWidth = cardWidth * features.length
      const distanceToMove = totalScrollWidth - cardWidth

      // The ScrollTrigger length for the pinning effect
      const pinLength = distanceToMove

      // Pin the section and animate the container horizontally
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `+=${pinLength}`,
        pin: true,
        scrub: 1,
        
      })

      gsap.to(containerRef.current, {
        x: -distanceToMove,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${pinLength}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    },
    { scope: sectionRef, dependencies: [features.length] }
  ) // Scope and dependencies for useGSAP

  return (
    <>
      {/* 1. Introductory Content */}
      

      {/* 2. Horizontal Scroll Section - The container that gets pinned */}
      <section
        ref={sectionRef}
        className="w-full h-screen relative overflow-hidden bg-slate-200"
      >

          <div
            ref={containerRef}
            className="flex h-full"
            // Set the total width to accommodate all cards side-by-side (e.g., 5 cards = 500vw)
            style={{ width: `${features.length * 100}vw` }}
          >
            <div className="p-48 bg-slate-200 mr-[600px]">
            <motion.p
              className="mt-4 text-lgx font-sans md:text-6xl text-black whitespace-nowrap "
            >
              {/* Subtitle text is now a single string from translations */}
              <motion.span >but takes </motion.span>

              <motion.span
                className=" md:text-6xl  font-extrabold text-red-800 "
              >
              ACTION {"   "} 🎯
              </motion.span>
            </motion.p>
          </div>
          {features.map((feature, i) => (
            // Each card takes up 100vw
            <div
              key={i}
              className="w-screen flex-shrink-0 flex items-center justify-center p-10 relative  bg-black text-white"
            >
              <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Text Content */}
                <div className="space-y-4 z-10">
                  <h2 className="text-5xl font-extrabold">{feature.title}</h2>
                  <p className="text-xl text-gray-300">{feature.desc}</p>
                </div>

                {/* Image Content */}
                <div className="w-full h-80 rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Post-Scroll Content */}
      <div className="h-screen flex items-center justify-center bg-gray-100 text-2xl font-bold">
        Ready to take the next step?
      </div>
    </>
  )
}

export default Features
