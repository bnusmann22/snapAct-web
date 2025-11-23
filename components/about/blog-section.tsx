"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const translations = {
  ENG: {
    blog: "Latest Stories",
    blogDesc: "Insights, updates, and stories from the SnapAct community",
    readMore: "Read More",
    date: "Published",
  },
  HAU: {
    blog: "Labarai na Gida",
    blogDesc: "Yadda-yadda, sabuntawa, da labarai daga al'ummar SnapAct",
    readMore: "Kara Karatu",
    date: "An buga",
  },
  YOR: {
    blog: "Àwọn Ìtàn Tuntun",
    blogDesc: "Ìmọ̀-ìmọ̀lẹ̀, ìfẹ́, àti àwọn ìtàn láti inú àwùjọ SnapAct",
    readMore: "Kà Síbẹ",
    date: "A ìbúkọ̀",
  },
  IGB: {
    blog: "Akụkọ Nke Ọhụrụ",
    blogDesc: "Amamihe, mgbanyuanya, na akụkọ sitere na ụmụ SnapAct",
    readMore: "Gụkwuo Mma",
    date: "E bipụtara",
  },
}

const blogPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing Civic Participation",
    excerpt: "Exploring how machine learning helps citizens report and resolve issues faster than ever before.",
    date: "2025-01-15",
    image: "/artificial-intelligence-civic-technology.jpg",
    category: "Technology",
  },
  {
    id: 2,
    title: "Community Success: Accra's Waste Cleanup Initiative",
    excerpt: "How 500+ SnapAct users came together to clean up neighborhoods and create lasting change.",
    date: "2025-01-10",
    image: "/community-cleanup-environmental-action.jpg",
    category: "Impact",
  },
  {
    id: 3,
    title: "Supporting 4 African Languages: Why Inclusion Matters",
    excerpt: "SnapAct now supports Hausa, Yoruba, and Igbo—making civic action accessible to millions.",
    date: "2025-01-05",
    image: "/african-languages-multilingual-inclusion.jpg",
    category: "Feature",
  },
]

export default function BlogSection({ language }: { language: "ENG" | "HAU" | "YOR" | "IGB" }) {
  const t = translations[language]
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const postsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      },
    )

    postsRef.current.forEach((post, index) => {
      gsap.fromTo(
        post,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: post,
            start: "top 85%",
            end: "top 55%",
            scrub: 1,
          },
        },
      )
    })
  }, [language])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-background to-blue-50/20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
          {t.blog}
        </h2>
        <p className="text-lg text-center text-foreground/60 max-w-2xl mx-auto mb-16">{t.blogDesc}</p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              ref={(el) => {
                if (el) postsRef.current[index] = el
              }}
              className="group bg-white/60 backdrop-blur-sm rounded-lg overflow-hidden border border-border hover:border-accent-primary/50 transition-all hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-primary/10 text-accent-primary">
                    {post.category}
                  </span>
                  <span className="text-xs text-foreground/50">
                    {t.date}: {formatDate(post.date)}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-foreground/70 mb-4 line-clamp-3">{post.excerpt}</p>

                <button className="inline-flex items-center text-sm font-semibold text-accent-primary hover:text-accent-secondary transition-colors">
                  {t.readMore}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
