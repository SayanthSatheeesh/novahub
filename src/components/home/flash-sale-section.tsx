"use client"

import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Zap, Star, ChevronLeft, ChevronRight, ArrowRight, MessageCircle } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"
import { motion } from "framer-motion"
import { GuaranteeBadge } from "@/components/ui/guarantee-badge"

const flashSaleProducts = [
  {
    name: "Beautiful.ai (1 Year)",
    slug: "beautiful-ai-1yr",
    price: "₹499",
    original: "₹2,999",
    save: "Save ₹2,500",
    badge: "⚡ 83% OFF - Flash Deal",
    urgency: "Only 3 licenses left!",
    stockPercent: 88,
    logo: "beautiful.ai",
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=600&auto=format&fit=crop",
    rating: "4.9"
  },
  {
    name: "Prime Video (6 Months)",
    slug: "prime-video-6mo",
    price: "₹249",
    original: "₹899",
    save: "Save ₹650",
    badge: "⚡ 72% OFF - Trending",
    urgency: "Only 5 licenses left!",
    stockPercent: 92,
    logo: "primevideo.com",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop",
    rating: "4.8"
  },
  {
    name: "Gemini Advanced (18 Months)",
    slug: "gemini-18mo",
    price: "₹599",
    original: "₹2,999",
    save: "Save ₹2,400",
    badge: "⚡ 80% OFF - Popular",
    urgency: "Only 2 licenses left!",
    stockPercent: 95,
    logo: "google.com",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
    rating: "5.0"
  },
  {
    name: "Netflix 4K (1 Month)",
    slug: "netflix-4k-1mo",
    price: "₹349",
    original: "₹649",
    save: "Save ₹300",
    badge: "⚡ 46% OFF - Hot Deal",
    urgency: "Only 4 licenses left!",
    stockPercent: 82,
    logo: "netflix.com",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=600&auto=format&fit=crop",
    rating: "4.9"
  },
  {
    name: "Notion Business (6 Months)",
    slug: "notion-biz-6mo",
    price: "₹799",
    original: "₹3,999",
    save: "Save ₹3,200",
    badge: "⚡ 80% OFF - Best Value",
    urgency: "Only 6 licenses left!",
    stockPercent: 78,
    logo: "notion.so",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    rating: "4.9"
  }
]

export function FlashSaleSection() {
  const [timeLeft, setTimeLeft] = useState({ h: "00", m: "00", s: "00" })
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", dragFree: true },
    [WheelGesturesPlugin()]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    const deadline = new Date()
    deadline.setHours(23, 59, 59, 999)

    const interval = setInterval(() => {
      const now = new Date()
      const diff = deadline.getTime() - now.getTime()

      if (diff <= 0) return

      setTimeLeft({
        h: Math.floor((diff / (1000 * 60 * 60)) % 24).toString().padStart(2, "0"),
        m: Math.floor((diff / 1000 / 60) % 60).toString().padStart(2, "0"),
        s: Math.floor((diff / 1000) % 60).toString().padStart(2, "0"),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.section 
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-[#0a0514] to-[#120a24] border-b border-white/5 relative overflow-hidden"
    >
      {/* Refined Dark Mode Glows */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="uppercase tracking-[0.25em] font-semibold text-[10px] md:text-xs text-slate-300">Flash Deals</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              Exclusive <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Offers</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-medium">Limited quantities available. Grab them before they're gone.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-white/10 p-2 rounded-2xl border border-white/20 shadow-xl backdrop-blur-md">
              <span className="text-xs font-bold text-white/90 uppercase tracking-wider ml-2">Ends In:</span>
              <div className="flex gap-1.5 items-center">
                <div className="bg-white/20 text-white font-mono font-black text-sm px-2.5 py-1 rounded-lg backdrop-blur-sm">{timeLeft.h}</div>
                <span className="text-white/70 font-black animate-pulse">:</span>
                <div className="bg-white/20 text-white font-mono font-black text-sm px-2.5 py-1 rounded-lg backdrop-blur-sm">{timeLeft.m}</div>
                <span className="text-white/70 font-black animate-pulse">:</span>
                <div className="bg-white/20 text-white font-mono font-black text-sm px-2.5 py-1 rounded-lg backdrop-blur-sm">{timeLeft.s}</div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                className="rounded-full w-11 h-11 border-white/20 bg-white/10 text-white hover:bg-white hover:text-primary transition-all duration-300 shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                className="rounded-full w-11 h-11 border-white/20 bg-white/10 text-white hover:bg-white hover:text-primary transition-all duration-300 shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden -ml-4" ref={emblaRef}>
          <div className="flex">
            {flashSaleProducts.map((product, idx) => (
              <div key={idx} className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_32%] lg:flex-[0_0_24%] min-w-[280px] pl-4 py-8">
                <div className="bg-white border-white/20 rounded-3xl relative group hover:border-amber-500/50 transition-all duration-500 ease-out hover:-translate-y-3 shadow-xl shadow-black/10 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.3)] h-full flex flex-col isolate overflow-hidden">
                  
                  {/* Ambient Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  {/* Top Banner Image */}
                  <div className="relative h-40 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-[500ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                    
                    {/* Discount Pill */}
                    <div className="absolute top-4 right-4 bg-amber-500/90 backdrop-blur-md text-slate-950 border border-amber-300/50 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                      <Zap className="w-3 h-3 fill-current" />
                      {product.badge}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col relative">
                    {/* Floating Logo */}
                    <div className="absolute -top-10 left-6 w-16 h-16 rounded-2xl bg-white border-4 border-white flex items-center justify-center shadow-xl shadow-black/10 overflow-hidden p-2 z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                       <img src={`https://www.google.com/s2/favicons?sz=128&domain=${product.logo}`} alt={`${product.name} logo`} className="w-full h-full object-contain" />
                    </div>

                    <div className="text-left flex-1 flex flex-col pt-8">
                      <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-amber-500 transition-colors line-clamp-1">
                        {product.name}
                      </h3>

                      {/* Price & Rating */}
                      <div className="flex items-center justify-between gap-2.5 mb-2 mt-auto">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-black text-slate-900 tracking-tighter">{product.price}</span>
                          <span className="text-sm font-bold line-through text-slate-400">{product.original}</span>
                        </div>
                        <div className="bg-[#388E3C] text-white px-2 py-0.5 rounded-md flex items-center gap-1 text-[11px] font-extrabold shadow-sm">
                          <Star className="w-3 h-3 fill-current" />
                          <span>{product.rating}</span>
                        </div>
                      </div>

                      {/* Savings text */}
                      <p className="text-xs font-semibold text-emerald-500 mb-3">
                        {product.save}
                      </p>

                      {/* WhatsApp + Guarantee microtexts */}
                      <div className="flex items-center gap-3 text-[10px] text-slate-500 mb-3 flex-wrap">
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3 text-[#25D366]" />
                          Instant WhatsApp
                        </span>
                        <GuaranteeBadge variant="card" days={7} />
                      </div>
                      
                      <a href={`/products/${product.slug}`} className="w-full relative group/btn">
                        <Button className="w-full bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-950 border-0 font-bold py-6 rounded-2xl transition-all duration-300 shadow-md group-hover/btn:shadow-lg group-hover/btn:shadow-amber-500/25">
                          Claim Deal <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
