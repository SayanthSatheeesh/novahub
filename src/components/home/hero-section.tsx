"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Star, MessageCircle, ArrowRight, ShieldCheck, Zap } from "lucide-react"
import Link from "next/link"
import { Marquee } from "@/components/ui/marquee"

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.031 0C5.385 0 0 5.386 0 12.033c0 2.148.563 4.248 1.637 6.096L.103 23.68l5.706-1.496c1.782.973 3.791 1.488 5.86 1.488h.005c6.645 0 12.032-5.387 12.032-12.035C23.705 5.385 18.32 0 12.031 0zm0 21.674h-.005c-1.815 0-3.593-.487-5.143-1.408l-.369-.219-3.821 1.002 1.022-3.725-.24-.383A9.972 9.972 0 0 1 1.996 12.03c0-5.518 4.49-10.007 10.035-10.007 5.518 0 10.009 4.489 10.009 10.007 0 5.517-4.491 10.007-10.009 10.007zM17.525 14.153c-.302-.151-1.783-.88-2.06-.98-.276-.101-.478-.151-.679.151-.201.302-.78 1.023-.956 1.233-.176.211-.352.236-.653.085-1.722-.862-2.92-1.579-4.041-3.48-.176-.302-.019-.465.132-.616.136-.136.302-.352.453-.528.151-.176.201-.302.302-.503.1-.201.05-.377-.025-.528-.075-.151-.679-1.636-.93-2.24-.244-.59-.493-.51-.679-.52-.176-.01-.377-.01-.578-.01-.201 0-.528.075-.805.377-.276.302-1.056 1.031-1.056 2.515s1.081 2.917 1.232 3.118c.151.201 2.126 3.245 5.149 4.549.72.311 1.28.497 1.718.636.721.231 1.378.198 1.896.12.58-.088 1.783-.729 2.034-1.433.251-.704.251-1.308.176-1.433-.075-.126-.276-.201-.578-.352z" />
  </svg>
)

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
        y: [0, -16, 0],
        x: [0, 10, 0],
        rotate: [0, -4, 4, 0],
      }}
      whileHover={{ scale: 1.25, zIndex: 50 }}
      whileTap={{ scale: 1.3, zIndex: 50 }}
      transition={{
        y: { duration, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", delay },
        x: { duration: duration * 1.1, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", delay },
        rotate: { duration: duration * 1.2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", delay },
        scale: { type: "spring", stiffness: 350, damping: 20 },
      }}
      className={`absolute ${className} bg-white dark:bg-slate-900/85 backdrop-blur-xl shadow-lg shadow-violet-200/80 dark:shadow-2xl dark:shadow-black/50 rounded-2xl p-3 sm:p-4 border border-violet-200 dark:border-white/15 hover:border-primary dark:hover:border-purple-500 hover:shadow-xl hover:shadow-primary/20 dark:hover:shadow-purple-500/35 flex items-center justify-center transition-colors duration-300 cursor-pointer group select-none`}
    >
      {children}
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section className="pt-24 pb-10 md:pt-32 md:pb-16 bg-background dark:bg-[#0F0F23] relative overflow-hidden">
      {/* Background Lighting & Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-br from-[#4FC3F7]/15 to-[#7B2FBE]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex items-center space-x-2 border border-primary/30 bg-primary/10 text-primary px-6 py-2.5 rounded-full text-sm md:text-base font-semibold backdrop-blur-md shadow-md hover:shadow-primary/30 relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <Zap className="w-5 h-5 text-primary fill-current animate-pulse" />
            <span>Instant Digital Credentials Delivery</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] text-foreground tracking-tighter">
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
            <div className="flex flex-col items-center lg:items-start">
              <p className="font-black text-3xl text-slate-900 dark:text-white tracking-tight mb-0.5">12,000+</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Orders Delivered</p>
            </div>
            <div className="w-px h-12 bg-slate-200 dark:bg-white/10" />
            <div className="flex flex-col items-center lg:items-start">
              <p className="font-black text-3xl text-slate-900 dark:text-white tracking-tight mb-0.5">50+</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Verified Tools</p>
            </div>
            <div className="w-px h-12 bg-slate-200 dark:bg-white/10" />
            <div className="flex flex-col items-center lg:items-start">
              <p className="font-black text-3xl text-slate-900 dark:text-white tracking-tight flex items-center justify-center lg:justify-start mb-0.5">
                4.9 <Star className="w-5 h-5 ml-1.5 text-amber-500 fill-current" />
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Customer Rating</p>
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
              <Button size="lg" className="w-full sm:w-auto bg-primary text-white transition-all duration-300 ease-out hover:-translate-y-[2px] active:scale-[0.98] rounded-xl px-8 py-6 text-base font-semibold border-0 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 group">
                Browse All Products <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto transition-all duration-300 ease-out hover:-translate-y-[2px] active:scale-[0.98] rounded-xl px-8 py-6 text-base font-semibold border-0 bg-[#25D366] hover:bg-[#20b858] active:bg-[#1EBE5B] focus:bg-[#20b858] focus-visible:ring-[#25D366] text-white hover:text-white active:text-white focus:text-white focus-visible:text-white shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 group [&_svg]:text-white">
                <WhatsAppIcon className="mr-3 w-7 h-7 transition-transform duration-300 group-hover:scale-110" /> Chat on WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Right Visual - Responsive Dense Masonry Floating Product Cards */}
        <div className="relative h-[440px] sm:h-[500px] lg:h-[550px] w-full max-w-[360px] sm:max-w-[480px] lg:max-w-[600px] mx-auto perspective-[1000px] my-6 lg:my-0 scale-90 sm:scale-95 lg:scale-100 transition-all origin-center select-none">
          {/* Central Core Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-br from-primary to-[#7B2FBE] rounded-full blur-[90px] sm:blur-[100px] opacity-25 dark:opacity-50" />

          {/* Central Hero Card */}
          <FloatingLogo delay={0} duration={6} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 z-40 shadow-xl shadow-primary/25 bg-white dark:bg-purple-950/90 border-slate-200 dark:border-white/20">
            <div className="text-center group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-[#7B2FBE] text-3xl sm:text-4xl tracking-tight">PRO</span>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-purple-300 font-extrabold tracking-widest mt-1 uppercase">LIFETIME</p>
            </div>
          </FloatingLogo>

          {/* Layer 1: Core Products */}
          <FloatingLogo delay={0.2} duration={5.5} className="top-4 sm:top-8 left-4 sm:left-12 w-30 h-24 sm:w-36 sm:h-28 z-30 flex-col gap-2">
            <img src="https://www.google.com/s2/favicons?sz=128&domain=openai.com" alt="ChatGPT" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-125 group-active:scale-125 group-hover:rotate-6" />
            <span className="font-extrabold text-slate-800 dark:text-slate-100 text-xs tracking-wide">ChatGPT</span>
          </FloatingLogo>

          <FloatingLogo delay={0.8} duration={6.2} className="top-8 sm:top-16 right-2 sm:right-8 w-28 h-24 sm:w-34 sm:h-28 z-30 flex-col gap-2">
            <img src="https://www.google.com/s2/favicons?sz=128&domain=adobe.com" alt="Adobe" className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-125 group-active:scale-125 group-hover:-rotate-6" />
            <span className="font-extrabold text-slate-800 dark:text-slate-100 text-xs tracking-wide">Adobe</span>
          </FloatingLogo>

          <FloatingLogo delay={1.4} duration={5.8} className="bottom-16 sm:bottom-24 left-2 sm:left-4 w-30 h-24 sm:w-36 sm:h-28 z-30 flex-col gap-2">
            <img src="https://www.google.com/s2/favicons?sz=128&domain=lovable.dev" alt="Lovable" className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-125 group-active:scale-125 group-hover:rotate-6" />
            <span className="font-extrabold text-slate-800 dark:text-slate-100 text-xs tracking-wide">Lovable</span>
          </FloatingLogo>

          <FloatingLogo delay={2.0} duration={6.5} className="bottom-20 sm:bottom-32 right-0 sm:right-2 w-32 h-24 sm:w-40 sm:h-28 z-30 flex-col gap-2">
            <img src="https://www.google.com/s2/favicons?sz=128&domain=github.com" alt="GitHub Copilot" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-125 group-active:scale-125 group-hover:-rotate-6" />
            <span className="font-extrabold text-slate-800 dark:text-slate-100 text-xs tracking-wide">GitHub Copilot</span>
          </FloatingLogo>

          {/* Layer 2: Extra Products */}
          <FloatingLogo delay={1.0} duration={5.2} className="-top-6 sm:-top-4 left-1/3 w-28 h-22 sm:w-34 sm:h-26 z-20 flex-col gap-2">
            <img src="https://www.google.com/s2/favicons?sz=128&domain=canva.com" alt="Canva" className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-125 group-active:scale-125 group-hover:rotate-6" />
            <span className="font-extrabold text-slate-800 dark:text-slate-100 text-xs tracking-wide">Canva</span>
          </FloatingLogo>

          <FloatingLogo delay={1.6} duration={6.0} className="-bottom-10 sm:-bottom-8 right-1/4 w-30 h-24 sm:w-36 sm:h-28 z-20 flex-col gap-2">
            <img src="https://www.google.com/s2/favicons?sz=128&domain=microsoft.com" alt="Office 365" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-125 group-active:scale-125 group-hover:-rotate-6" />
            <span className="font-extrabold text-slate-800 dark:text-slate-100 text-xs tracking-wide">Office 365</span>
          </FloatingLogo>

          <FloatingLogo delay={2.4} duration={5.4} className="top-1/4 -left-6 sm:-left-8 w-28 h-22 sm:w-34 sm:h-26 z-10 opacity-95 flex-col gap-2">
            <img src="https://www.google.com/s2/favicons?sz=128&domain=google.com" alt="Gemini" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-125 group-active:scale-125 group-hover:rotate-6" />
            <span className="font-extrabold text-slate-800 dark:text-slate-100 text-xs tracking-wide">Gemini</span>
          </FloatingLogo>

          <FloatingLogo delay={2.8} duration={6.8} className="top-1/3 -right-4 sm:-right-6 w-28 h-22 sm:w-34 sm:h-26 z-10 opacity-90 flex-col gap-2">
            <img src="https://www.google.com/s2/favicons?sz=128&domain=midjourney.com" alt="Midjourney" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-125 group-active:scale-125 group-hover:-rotate-6" />
            <span className="font-extrabold text-slate-800 dark:text-slate-100 text-xs tracking-wide">Midjourney</span>
          </FloatingLogo>

          <FloatingLogo delay={3.2} duration={7.0} className="-bottom-14 sm:-bottom-12 left-1/4 w-28 h-22 sm:w-34 sm:h-26 z-10 opacity-85 flex-col gap-2">
            <img src="https://www.google.com/s2/favicons?sz=128&domain=figma.com" alt="Figma" className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-125 group-active:scale-125 group-hover:rotate-6" />
            <span className="font-extrabold text-slate-800 dark:text-slate-100 text-xs tracking-wide">Figma</span>
          </FloatingLogo>
        </div>
      </div>


    </section>
  )
}
