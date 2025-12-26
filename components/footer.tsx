"use client"

const translations = {
  ENG: {
    aboutUs: "About Us",
    privacyPolicy: "Privacy Policy",
    contact: "Contact",
    social: "Follow Us",
    tagline: "One snap at a time, fixing our cities.",
  },
  HAU: {
    aboutUs: "Gane Mu",
    privacyPolicy: "Siyasar Asiri",
    contact: "Tuntubakin",
    social: "Bi Mu",
    tagline: "Daya snap a lokaci, gyara kasusuwan mu.",
  },
  YOR: {
    aboutUs: "Mọ Wa",
    privacyPolicy: "Ipolisi Asiri",
    contact: "Bawo",
    social: "Tẹle Wa",
    tagline: "Kan snapshot ni akoko, ṣe ona ilu wa.",
  },
  IGB: {
    aboutUs: "Mara Anyị",
    privacyPolicy: "Iwu Nzuzo",
    contact: "Kpọkọtara",
    social: "Soro Anyị",
    tagline: "Ihe osise otu n'otu, emepụta obodo anyị.",
  },
}

export default function Footer({ language }: { language: "ENG" | "HAU" | "YOR" | "IGB" }) {
  const t = translations[language]

  return (
    <footer className="bg-gradient-to-b from-orange-50 to-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-accent-primary mb-2">SnapAct</h3>
            <p className="text-sm text-foreground/60">{t.tagline}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t.aboutUs}</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="/about" className="hover:text-accent-primary transition-colors">
                  {t.aboutUs}
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-accent-primary transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-accent-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="https://en.wikipedia.org/wiki/Privacy_policy" className="hover:text-accent-primary transition-colors">
                  {t.privacyPolicy}
                </a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/Terms_of_service" className="hover:text-accent-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t.contact}</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="mailto:hello@snapact.com" className="hover:text-accent-primary transition-colors">
                  hello@snapact.com
                </a>
              </li>
              <li>
                <a href="tel:+234-800-000-0000" className="hover:text-accent-primary transition-colors">
                  +234-800-000-0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-border pt-8">
          <p className="font-semibold text-foreground mb-4">{t.social}</p>
          <div className="flex gap-4 text-accent-primary">
            <a href="https://x.com/BnUsmann22" className="hover:text-accent-secondary transition-colors font-semibold">
              Twitter
            </a>
            <a href="https://www.instagram.com/bn_usmann24/" className="hover:text-accent-secondary transition-colors font-semibold">
              Instagram
            </a>
            <a href="#" className="hover:text-accent-secondary transition-colors font-semibold">
              Facebook
            </a>
            <a href="https://www.linkedin.com/in/abdullahi-jamil-26b940275/" className="hover:text-accent-secondary transition-colors font-semibold">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-foreground/50">
          <p>&copy; 2025 SnapAct. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
