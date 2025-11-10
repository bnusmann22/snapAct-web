import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

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

/**
 * Renamed main component to Features.
 * Implements a horizontal scrolling effect using GSAP ScrollTrigger.
 */
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

      // The distance the container needs to move horizontally.
      // We subtract one card's width because the animation starts at x: 0 (showing the first card)
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
        // This is a common pattern for horizontal scroll pinning
        //
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
      <div className="h-screen flex items-center justify-center bg-gray-100 text-2xl font-bold">
        Discover Our Core Features ↓
      </div>

      {/* 2. Horizontal Scroll Section - The container that gets pinned */}
      <section
        ref={sectionRef}
        className="w-full h-screen relative overflow-hidden bg-black text-white"
      >
        <div
          ref={containerRef}
          className="flex h-full"
          // Set the total width to accommodate all cards side-by-side (e.g., 5 cards = 500vw)
          style={{ width: `${features.length * 100}vw` }}
        >
          {features.map((feature, i) => (
            // Each card takes up 100vw
            <div
              key={i}
              className="w-screen flex-shrink-0 flex items-center justify-center p-10 relative"
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
