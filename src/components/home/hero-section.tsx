"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Star, MessageCircle, ArrowRight, ShieldCheck, Zap } from "lucide-react"
import Link from "next/link"
import { Marquee } from "@/components/ui/marquee"

const FloatingLogo = ({
  delay,
  children,
  className,
  duration = 5,
}: {
  delay: number
  children: React.ReactNode
  className: string
  duration?: number
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -18, 0],
        x: [0, 12, 0],
        rotate: [0, -6, 6, 0],
      }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
        delay,
      }}
      className={`absolute ${className} bg-white dark:bg-slate-900/60 backdrop-blur-xl shadow-lg dark:shadow-2xl rounded-2xl p-4 border border-slate-200 dark:border-white/15 hover:border-primary/50 dark:hover:border-purple-500/50 flex items-center justify-center transition-colors group`}
    >
      {children}
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section className="pt-20 pb-10 md:pt-28 md:pb-16 bg-white dark:bg-[#0F0F23] relative overflow-hidden">
      {/* Background Lighting & Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-br from-[#4FC3F7]/15 to-[#7B2FBE]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="inline-flex items-center space-x-2 border border-primary/20 bg-primary/5 text-primary px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold backdrop-blur-md"
          >
            <Zap className="w-4 h-4 text-primary fill-current" />
            <span>Instant Digital Credentials Delivery</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] text-foreground tracking-tight">
              Smart Software.<br />
              <span className="bg-gradient-to-r from-primary to-[#7B2FBE] bg-clip-text text-transparent">
                Trusted Solutions.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-800 dark:text-slate-200 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
              Get genuine AI tools, creative suites, and developer platforms at up to <span className="text-[#24CE6E] font-extrabold">75% off</span> official retail prices.
            </p>
          </motion.div>

          {/* Social Proof Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
            className="flex items-center justify-center lg:justify-start space-x-6 py-4 border-y border-slate-200 dark:border-white/10"
          >
            <div>
              <p className="font-extrabold text-2xl text-slate-900 dark:text-white">12,000+</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-bold">Orders Delivered</p>
            </div>
            <div className="w-px h-10 bg-slate-300 dark:bg-white/10" />
            <div>
              <p className="font-extrabold text-2xl text-slate-900 dark:text-white">50+</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-bold">Verified Tools</p>
            </div>
            <div className="w-px h-10 bg-slate-300 dark:bg-white/10" />
            <div>
              <p className="font-extrabold text-2xl text-slate-900 dark:text-white flex items-center justify-center lg:justify-start">
                4.9 <Star className="w-4 h-4 ml-1.5 text-amber-500 fill-current" />
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-bold">Customer Rating</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
            className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start"
          >
            <Link href="/products">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-white hover:brightness-110 transition-all rounded-xl px-8 py-6 text-base font-semibold border-0 shadow-lg shadow-primary/25">
                Browse All Products <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-xl px-8 py-6 text-base font-semibold border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-700 dark:text-white backdrop-blur shadow-sm">
                <MessageCircle className="mr-2 w-5 h-5 text-[#25D366]" /> Chat on WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Right Visual - Dense Masonry Floating Product Cards */}
        <div className="relative h-[550px] w-full max-w-[600px] mx-auto hidden lg:block perspective-[1000px]">
          {/* Central Core Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-primary to-[#7B2FBE] rounded-full blur-[100px] opacity-20 dark:opacity-45" />

          {/* Central Hero Card */}
          <FloatingLogo delay={0} duration={6} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 z-40 shadow-xl shadow-primary/20 bg-white dark:bg-purple-950/80 border-slate-100 dark:border-white/10">
            <div className="text-center">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-[#7B2FBE] text-4xl tracking-tight">PRO</span>
              <p className="text-[11px] text-slate-500 dark:text-purple-300 font-bold tracking-widest mt-1">LIFETIME</p>
            </div>
          </FloatingLogo>

          {/* Layer 1: Core Products */}
          <FloatingLogo delay={0.2} duration={5.5} className="top-8 left-12 w-32 h-24 z-30 flex-col gap-2">
            <img src="https://logo.clearbit.com/openai.com" alt="ChatGPT" className="w-8 h-8 rounded-full bg-white p-1 shadow-sm" />
            <span className="font-bold text-slate-900 dark:text-slate-100 text-[11px] tracking-wide">ChatGPT</span>
          </FloatingLogo>

          <FloatingLogo delay={0.8} duration={6.2} className="top-16 right-8 w-28 h-24 z-30 flex-col gap-2">
            <img src="https://logo.clearbit.com/adobe.com" alt="Adobe" className="w-8 h-8 rounded-md bg-white p-1 shadow-sm" />
            <span className="font-bold text-slate-900 dark:text-slate-100 text-[11px] tracking-wide">Adobe</span>
          </FloatingLogo>

          <FloatingLogo delay={1.4} duration={5.8} className="bottom-24 left-4 w-32 h-24 z-30 flex-col gap-2">
            <img src="https://logo.clearbit.com/lovable.dev" alt="Lovable" className="w-8 h-8 rounded-md bg-white p-1 shadow-sm" />
            <span className="font-bold text-slate-900 dark:text-slate-100 text-[11px] tracking-wide">Lovable</span>
          </FloatingLogo>

          <FloatingLogo delay={2.0} duration={6.5} className="bottom-32 right-2 w-36 h-24 z-30 flex-col gap-2">
            <img src="https://logo.clearbit.com/github.com" alt="GitHub Copilot" className="w-8 h-8 rounded-full bg-white p-1 shadow-sm" />
            <span className="font-bold text-slate-900 dark:text-slate-100 text-[11px] tracking-wide">GitHub Copilot</span>
          </FloatingLogo>

          {/* Layer 2: Extra Products (The "Fourth Image" request) */}
          <FloatingLogo delay={1.0} duration={5.2} className="-top-4 left-1/3 w-28 h-24 z-20 flex-col gap-2">
            <img src="https://logo.clearbit.com/canva.com" alt="Canva" className="w-8 h-8 rounded-md bg-white p-1 shadow-sm" />
            <span className="font-bold text-slate-900 dark:text-slate-100 text-[11px] tracking-wide">Canva</span>
          </FloatingLogo>

          <FloatingLogo delay={1.6} duration={6.0} className="-bottom-8 right-1/4 w-32 h-24 z-20 flex-col gap-2">
            <img src="https://logo.clearbit.com/microsoft.com" alt="Office 365" className="w-8 h-8 rounded-sm bg-white p-1 shadow-sm" />
            <span className="font-bold text-slate-900 dark:text-slate-100 text-[11px] tracking-wide">Office 365</span>
          </FloatingLogo>

          <FloatingLogo delay={2.4} duration={5.4} className="top-1/4 -left-8 w-28 h-24 z-10 opacity-95 flex-col gap-2">
            <img src="https://logo.clearbit.com/google.com" alt="Gemini" className="w-8 h-8 rounded-full bg-white p-1 shadow-sm" />
            <span className="font-bold text-slate-900 dark:text-slate-100 text-[11px] tracking-wide">Gemini</span>
          </FloatingLogo>

          <FloatingLogo delay={2.8} duration={6.8} className="top-1/3 -right-6 w-28 h-24 z-10 opacity-90 flex-col gap-2">
            <img src="https://logo.clearbit.com/midjourney.com" alt="Midjourney" className="w-8 h-8 rounded-full bg-white p-1 shadow-sm" />
            <span className="font-bold text-slate-900 dark:text-slate-100 text-[11px] tracking-wide">Midjourney</span>
          </FloatingLogo>

          <FloatingLogo delay={3.2} duration={7.0} className="-bottom-12 left-1/4 w-28 h-24 z-10 opacity-85 flex-col gap-2">
            <img src="https://logo.clearbit.com/figma.com" alt="Figma" className="w-8 h-8 rounded-md bg-white p-1 shadow-sm" />
            <span className="font-bold text-slate-900 dark:text-slate-100 text-[11px] tracking-wide">Figma</span>
          </FloatingLogo>
        </div>
      </div>

      {/* Marquee injected at bottom of hero */}
      <div className="mt-20 md:mt-28 w-full border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/50 py-6">
        <Marquee pauseOnHover className="[--duration:50s]">
          {[
            { name: "ChatGPT Plus", domain: "openai.com" },
            { name: "Adobe Creative Cloud", domain: "adobe.com" },
            { name: "GitHub Copilot", domain: "github.com" },
            { name: "Canva Pro", domain: "canva.com" },
            { name: "Midjourney", domain: "midjourney.com" },
            { name: "Microsoft Office", domain: "microsoft.com" },
            { name: "Figma Pro", domain: "figma.com" },
            { name: "Notion AI", domain: "notion.so" },
            { name: "Jasper AI", domain: "jasper.ai" },
          ].map((brand) => (
            <div key={brand.name} className="mx-6 md:mx-12 flex items-center gap-3">
              <img src={`https://logo.clearbit.com/${brand.domain}`} alt={brand.name} className="w-8 h-8 rounded-md bg-white p-1 shadow-sm" />
              <span className="font-extrabold text-lg md:text-xl text-slate-800 dark:text-slate-300 whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
