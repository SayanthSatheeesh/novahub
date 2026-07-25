"use client"

import { motion } from "framer-motion"

const BRANDS = [
  { name: "ChatGPT", domain: "openai.com" },
  { name: "Adobe", domain: "adobe.com" },
  { name: "Lovable", domain: "lovable.dev" },
  { name: "GitHub Copilot", domain: "github.com" },
  { name: "Canva", domain: "canva.com" },
  { name: "Office 365", domain: "microsoft.com" },
  { name: "Gemini", domain: "google.com" },
  { name: "Midjourney", domain: "midjourney.com" },
]

export function LogoCloud() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeBrands = [...BRANDS, ...BRANDS, ...BRANDS]

  return (
    <section className="py-10 bg-slate-50 dark:bg-[#0F0F23] border-b border-slate-200 dark:border-white/5 overflow-hidden relative">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
          Trusted subscriptions for top-tier software & AI tools
        </p>
      </div>

      {/* Marquee Wrapper with Gradient Mask Fading */}
      <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            ease: "linear",
            duration: 12,
            repeat: Infinity,
          }}
          className="flex flex-nowrap items-center gap-12 md:gap-20 min-w-max pr-12"
        >
          {marqueeBrands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 dark:hover:border-purple-500/50 backdrop-blur-md px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-sm"
            >
              <img src={`https://logo.clearbit.com/${brand.domain}`} alt={brand.name} className="w-8 h-8 rounded-md bg-white p-1 shadow-sm" />
              <span className={`text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white`}>
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
