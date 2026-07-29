"use client"

import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Zap, Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"
import { motion } from "framer-motion"

const flashSaleProducts = [
  {
    name: "ChatGPT Plus (1 Month)",
    slug: "chatgpt-plus",
    price: "₹999",
    original: "₹2,499",
    save: "Save ₹1,500",
    badge: "⚡ 60% OFF - Limited Slots",
    urgency: "Only 3 licenses left!",
    stockPercent: 88,
    logo: "openai.com",
    image: "https://images.unsplash.com/photo-1665686376173-ada7a0031a85?q=80&w=600&auto=format&fit=crop",
    rating: "4.9"
  },
  {
    name: "Adobe Creative Cloud",
    slug: "adobe-creative-cloud",
    price: "₹1,499",
    original: "₹4,999",
    save: "Save ₹3,500",
    badge: "⚡ 70% OFF - Popular",
    urgency: "Only 5 licenses left!",
    stockPercent: 92,
    logo: "adobe.com",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop",
    rating: "4.8"
  },
  {
    name: "Canva Pro",
    slug: "canva-pro",
    price: "₹499",
    original: "₹1,299",
    save: "Save ₹800",
    badge: "⚡ 65% OFF - Trending",
    urgency: "Only 2 licenses left!",
    stockPercent: 95,
    logo: "canva.com",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&auto=format&fit=crop",
    rating: "5.0"
  },
  {
    name: "Midjourney Pro",
    slug: "midjourney",
    price: "₹1,499",
    original: "₹3,500",
    save: "Save ₹2,001",
    badge: "⚡ 57% OFF - Hot Deal",
    urgency: "Only 4 licenses left!",
    stockPercent: 82,
    logo: "midjourney.com",
    image: "https://images.unsplash.com/photo-1686191128892-3b370133a4bf?q=80&w=600&auto=format&fit=crop",
    rating: "4.9"
  },
  {
    name: "GitHub Copilot",
    slug: "github-copilot",
    price: "₹799",
    original: "₹1,800",
    save: "Save ₹1,001",
    badge: "⚡ 55% OFF - Flash Offer",
    urgency: "Only 6 licenses left!",
    stockPercent: 78,
    logo: "github.com",
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
      className="py-16 md:py-20 bg-background dark:bg-[#0D0D20] border-b border-border dark:border-white/5 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-500 mb-2">
              <Zap className="w-5 h-5 fill-current animate-pulse text-amber-500" />
              <span className="uppercase tracking-[0.2em] font-black text-[10px] md:text-xs">Limited Quantity Flash Deals</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tighter">Flash Sale</h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-slate-900 dark:bg-[#0a0a0a] p-2 rounded-2xl border border-amber-500/30 shadow-xl shadow-amber-900/20 backdrop-blur-md">
              <span className="text-xs font-bold text-amber-500/90 uppercase tracking-wider ml-2">Ends In:</span>
              <div className="flex gap-1.5 items-center">
                <div className="bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 text-slate-950 font-mono font-black text-sm px-2.5 py-1 rounded-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">{timeLeft.h}</div>
                <span className="text-amber-500 font-black animate-pulse">:</span>
                <div className="bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 text-slate-950 font-mono font-black text-sm px-2.5 py-1 rounded-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">{timeLeft.m}</div>
                <span className="text-amber-500 font-black animate-pulse">:</span>
                <div className="bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 text-slate-950 font-mono font-black text-sm px-2.5 py-1 rounded-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">{timeLeft.s}</div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                className="rounded-full w-11 h-11 border-violet-300 dark:border-white/15 bg-white dark:bg-white/5 text-slate-700 dark:text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                className="rounded-full w-11 h-11 border-violet-300 dark:border-white/15 bg-white dark:bg-white/5 text-slate-700 dark:text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
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
                <div className="bg-white/80 dark:bg-white/5 backdrop-blur-2xl border border-slate-200/50 dark:border-white/10 rounded-3xl relative group hover:border-amber-500/50 transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.2)] dark:hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)] h-full flex flex-col isolate overflow-hidden">
                  
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
                    <div className="absolute -top-10 left-6 w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border-4 border-white dark:border-[#141414] flex items-center justify-center shadow-xl shadow-black/10 overflow-hidden p-2 z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                       <img src={`https://www.google.com/s2/favicons?sz=128&domain=${product.logo}`} alt={`${product.name} logo`} className="w-full h-full object-contain" />
                    </div>

                    <div className="text-left flex-1 flex flex-col pt-8">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-amber-500 transition-colors line-clamp-1">
                        {product.name}
                      </h3>

                      {/* Price & Rating */}
                      <div className="flex items-center justify-between gap-2.5 mb-6 mt-auto">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">{product.price}</span>
                          <span className="text-sm font-bold line-through text-slate-400">{product.original}</span>
                        </div>
                        <div className="bg-[#388E3C] text-white px-2 py-0.5 rounded-md flex items-center gap-1 text-[11px] font-extrabold shadow-sm">
                          <Star className="w-3 h-3 fill-current" />
                          <span>{product.rating}</span>
                        </div>
                      </div>
                      
                      <a href={`/products/${product.slug}`} className="w-full relative group/btn">
                        <Button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-slate-950 dark:hover:text-slate-950 border-0 font-bold py-6 rounded-2xl transition-all duration-300 shadow-md group-hover/btn:shadow-lg group-hover/btn:shadow-amber-500/25">
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
