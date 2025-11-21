"use client"

import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect, useState } from "react"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    title: "Real-Time Insights",
    subtitle: "AI-Powered Civic Data",
    desc: "Transform raw civic data into actionable intelligence. Our AI analyzes millions of data points to surface meaningful patterns in community issues.",
    highlights: ["ML-Driven Analysis", "Instant Processing", "99.9% Accuracy"],
    icon: "📊",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Intelligent Reporting",
    subtitle: "Smart Report Generation",
    desc: "Auto-generate comprehensive civic reports with AI-powered insights. Visualize complex data trends with stunning, interactive charts.",
    highlights: ["Auto-Generated Reports", "Visual Analytics", "One-Click Export"],
    icon: "📈",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "Community Impact",
    subtitle: "Measure What Matters",
    desc: "Track community engagement and civic impact in real-time. See how initiatives drive change with our predictive impact modeling.",
    highlights: ["Impact Tracking", "Predictive Models", "Real-Time Updates"],
    icon: "🎯",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Collaborative Platform",
    subtitle: "Connect & Engage",
    desc: "Unite stakeholders around shared civic goals. Seamless collaboration tools powered by AI for better decision-making.",
    highlights: ["Team Tools", "Smart Notifications", "Instant Sharing"],
    icon: "🤝",
    gradient: "from-pink-500 to-red-600",
  },
  {
    title: "Predictive Analytics",
    subtitle: "The Future, Today",
    desc: "Stay ahead with AI-powered predictions. Forecast civic trends and community needs before they emerge.",
    highlights: ["Trend Forecasting", "Risk Assessment", "Opportunity Detection"],
    icon: "🔮",
    gradient: "from-cyan-500 to-teal-600",
  },
]

export default function FeaturesSection() {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 768)
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useGSAP(
    () => {
      if (!sectionRef.current || !containerRef.current) return

      // Only apply horizontal scroll on desktop
      if (window.innerWidth < 768) {
        return
      }

      const cardWidth = window.innerWidth
      const totalScrollWidth = cardWidth * features.length
      const distanceToMove = totalScrollWidth - cardWidth

      // Intro animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "center center",
          scrub: 1,
          markers: false,
        },
        opacity: 0,
        y: 100,
        duration: 1,
      })

      // Horizontal scroll with smooth easing
      gsap.to(containerRef.current, {
        x: -distanceToMove,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${distanceToMove * 1.2}`,
          scrub: 1.2,
          pin: true,
          invalidateOnRefresh: true,
          markers: false,
        },
      })

      // Stagger animation for individual cards
      gsap.utils.toArray(".feature-card").forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "left center",
            end: "center center",
            scrub: 1,
            markers: false,
          },
          opacity: 0,
          scale: 0.8,
          rotationY: 45,
          duration: 0.8,
        })
      })

      // Parallax effect on feature images
      gsap.utils.toArray(".feature-image").forEach((image) => {
        gsap.to(image, {
          scrollTrigger: {
            trigger: image,
            start: "left center",
            end: "right center",
            scrub: 1,
            markers: false,
          },
          scale: 1.1,
          rotationZ: 5,
          duration: 1,
        })
      })
    },
    { scope: sectionRef, dependencies: [features.length, isSmallScreen] },
  )

  return (
    <section ref={sectionRef} className="relative w-full bg-black">
      {/* Hero Section */}
      <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div ref={titleRef} className="relative z-10 text-center space-y-6 max-w-3xl">
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Powered by AI</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Features That{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Transform</span>{" "}
            Civic Engagement
          </h1>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Experience the future of civic technology. AI-driven insights that empower communities to take meaningful
            action.
          </p>

          <div className="pt-4">
            <p className="text-sm text-gray-500 animate-bounce">↓ Scroll to explore →</p>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Section - Desktop */}
      <div className="hidden md:block relative w-full h-screen">
        <div ref={containerRef} className="flex h-full" style={{ width: `${features.length * 100}vw` }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card w-screen flex-shrink-0 h-full flex items-center justify-center px-8 md:px-16 relative overflow-hidden"
            >
              {/* Background gradient blob */}
              <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${feature.gradient}`}></div>

              <div className="relative z-10 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-8">
                  <div>
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">
                      {feature.subtitle}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">{feature.title}</h2>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed">{feature.desc}</p>

                  <div className="space-y-3 pt-4">
                    {feature.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feature Image */}
                <div className="feature-image relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/20">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-50`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-20">{feature.icon}</div>
                  </div>
                  {/* Grid overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Version - Vertical Scroll */}
      <div className="md:hidden w-full bg-black py-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden border-t border-cyan-500/10"
          >
            <div className={`absolute inset-0 opacity-5 bg-gradient-to-br ${feature.gradient}`}></div>

            <div className="relative z-10 space-y-8 w-full max-w-md">
              <div>
                <div className="text-5xl mb-4">{feature.icon}</div>
                <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">{feature.subtitle}</p>
                <h2 className="text-3xl font-bold text-white leading-tight">{feature.title}</h2>
              </div>

              <p className="text-base text-gray-300 leading-relaxed">{feature.desc}</p>

              <div className="feature-image relative h-72 rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/20">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-50`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-7xl opacity-20">{feature.icon}</div>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                {feature.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    <span className="text-gray-300 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="relative w-full py-20 px-4 bg-gradient-to-b from-black to-cyan-950/10">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Transform Civic Engagement?</h2>
          <p className="text-gray-400 text-lg">Join forward-thinking communities using Snapact to drive real change.</p>
          <button className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
            Get Started Today →
          </button>
        </div>
      </div>
    </section>
  )
}
