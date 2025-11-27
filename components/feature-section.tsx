"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { Share2, Zap, Globe, Lock, LightbulbOff as LightningBolt, TrendingUp, Users2, Map } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const featureContent = {
  ENG: {
    title: "Powerful Civic Reporting",
    features: [
      {
        title: "Instant Capture",
        description: "Document issues in real-time with your camera",
        icon: Share2,
      },
      {
        title: "Real Impact",
        description: "Your reports directly reach local authorities",
        icon: Zap,
      },
      {
        title: "Global Reach",
        description: "Join a community making cities better",
        icon: Globe,
      },
      {
        title: "Privacy-Focused",
        description: "End-to-end encryption and anonymized reports",
        icon: Lock,
      },
      {
        title: "Smart Detection",
        description: "AI auto-categorizes issues for faster resolution",
        icon: LightningBolt,
      },
      {
        title: "Track Progress",
        description: "Get real-time updates on your reported issues",
        icon: TrendingUp,
      },
      {
        title: "Community Power",
        description: "Upvote, discuss, and amplify collective action",
        icon: Users2,
      },
      {
        title: "Precise Location",
        description: "Automatic geo-tagging for accurate reporting",
        icon: Map,
      },
    ],
  },
  HAU: {
    title: "Raportin Kasar Musamman",
    features: [
      {
        title: "Karɓa Nan Take",
        description: "Sani matsayin da kyau ta jiya-jiya da kamera",
        icon: Share2,
      },
      {
        title: "Aiki na Gaske",
        description: "Rajocinki ka kai tsaye ga jama'a",
        icon: Zap,
      },
      {
        title: "Kayan Jiya",
        description: "Shiga kasua na gida da bettarwa",
        icon: Globe,
      },
      {
        title: "Kare Asiri",
        description: "Encryption daga gida zuwa gida da cire sunaye",
        icon: Lock,
      },
      {
        title: "Ware Tutudde",
        description: "AI yana tsara matsala don sauri",
        icon: LightningBolt,
      },
      {
        title: "Bincika Ci Gaba",
        description: "Samu sabbin labari game da abubuwan da ka sani",
        icon: TrendingUp,
      },
      {
        title: "Karfen Jama'a",
        description: "Taɓa batu, tattauna, da girma aiki",
        icon: Users2,
      },
      {
        title: "Ingancin Wuri",
        description: "Geo-tagging ta kansu don sani daidai",
        icon: Map,
      },
    ],
  },
  YOR: {
    title: "Iroyin Aṣa Ilu Wipe",
    features: [
      {
        title: "Yanju Nipa Igbanu",
        description: "Ṣẹda aworan ti isọkan ni abini pelu kamera",
        icon: Share2,
      },
      {
        title: "Ise Gidi",
        description: "Iroyin rẹ tẹnumọ si awọn oluṣe ilu",
        icon: Zap,
      },
      {
        title: "Agbaye Laipin",
        description: "Darapọ si agbegbe ti o ṣe ilu dara",
        icon: Globe,
      },
      {
        title: "Ifojusun Asiri",
        description: "Encryption duro si owu ati ifirayese orukọ",
        icon: Lock,
      },
      {
        title: "Ọgbọ́ Abẹ̀",
        description: "AI ṣe akiyesi ati ṣiṣe ẹka fun iṣu",
        icon: LightningBolt,
      },
      {
        title: "Ṣawari Iyipada",
        description: "Gba alaye laipin nipa isọkan rẹ",
        icon: TrendingUp,
      },
      {
        title: "Ẹgbẹ Agbegbe",
        description: "Ye batu, tattauna, ki o diju iṣẹ ọkan",
        icon: Users2,
      },
      {
        title: "Aaye Ṣoṣo",
        description: "Automatic geo-tagging fun sọ daidai",
        icon: Map,
      },
    ],
  },
  IGB: {
    title: "Ngosipụta Obodo Dị Ike",
    features: [
      {
        title: "Nweta Nweta",
        description: "Debe ihe ọjọọ n'ụzọ ije ma ọ bu kamera",
        icon: Share2,
      },
      {
        title: "Ọrụ Eziokwu",
        description: "Akụkọ gị bata na ndị ọrụ obodo",
        icon: Zap,
      },
      {
        title: "Mụmụ Ụwa",
        description: "Soro mpaghara ime obodo kacha mma",
        icon: Globe,
      },
      {
        title: "Nchekwa Nzuzo",
        description: "Mgbanaka na-egbeke na nnabata orụ aha",
        icon: Lock,
      },
      {
        title: "Nyocha Ọgbụgbụ",
        description: "AI na-akọ ihe n'ime ụdị maka ngwa ngwa",
        icon: LightningBolt,
      },
      {
        title: "Ịchọ Ike",
        description: "Anụ ọkụ mma gbasara akụkọ gị",
        icon: TrendingUp,
      },
      {
        title: "Mmadụ Obodo",
        description: "Tinye aka, sọrọ, ma tinye ike ọrụ",
        icon: Users2,
      },
      {
        title: "Ọnọdụ Ziri Ezi",
        description: "Automatic geo-tagging maka ngosipụta kwesịrị ekwesị",
        icon: Map,
      },
    ],
  },
}

