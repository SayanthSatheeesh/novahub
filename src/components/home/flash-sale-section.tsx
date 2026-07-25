"use client"

import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Zap, Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"

const flashSaleProducts = [
  {
    name: "ChatGPT Plus (1 Month)",
    price: "₹999",
    original: "₹2,499",
    save: "Save ₹1,500",
    badge: "⚡ 60% OFF - Limited Slots",
    urgency: "Only 3 licenses left at this price!",
    logo: "openai.com",
    image: "https://images.unsplash.com/photo-1665686376173-ada7a0031a85?q=80&w=600&auto=format&fit=crop",
    rating: "4.9/5.0"
  },
  {
    name: "Adobe Creative Cloud",
    price: "₹1,499",
    original: "₹4,999",
    save: "Save ₹3,500",
    badge: "⚡ 70% OFF - Popular",
    urgency: "Deal ends in 2 hours!",
    logo: "adobe.com",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop",
    rating: "4.8/5.0"
  },
  {
    name: "Lovable Pro AI",
    price: "₹1,199",
    original: "₹3,199",
    save: "Save ₹2,000",
    badge: "⚡ 65% OFF - Trending",
    urgency: "High demand - selling fast!",
    logo: "lovable.dev",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop",
    rating: "5.0/5.0"
  },
  {
    name: "Midjourney Pro",
    price: "₹1,499",
    original: "₹3,500",
    save: "Save ₹2,001",
    badge: "⚡ 57% OFF - Hot Deal",
    urgency: "Selling extremely fast!",
    logo: "midjourney.com",
    image: "https://images.unsplash.com/photo-1686191128892-3b370133a4bf?q=80&w=600&auto=format&fit=crop",
    rating: "4.9/5.0"
  },
  {
    name: "GitHub Copilot",
    price: "₹799",
    original: "₹1,800",
    save: "Save ₹1,001",
    badge: "⚡ 55% OFF - Flash Offer",
    urgency: "Last few hours!",
    logo: "github.com",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    rating: "4.9/5.0"
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
    <section className="py-16 md:py-20 bg-slate-100 dark:bg-[#0B0B1E] border-b border-slate-200 dark:border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-rose-500 mb-2">
              <Zap className="w-5 h-5 fill-current animate-pulse text-rose-500" />
              <span className="font-bold uppercase tracking-wider text-xs md:text-sm">Limited Quantity Deals</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Flash Sale</h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-white dark:bg-white/5 p-2.5 rounded-xl border border-rose-500/20 shadow-sm backdrop-blur-md">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-300">Ends in:</span>
              <div className="flex gap-1">
                <div className="bg-rose-600 text-white font-mono font-bold text-sm px-2 py-1 rounded">{timeLeft.h}</div>
                <span className="text-rose-400 font-bold">:</span>
                <div className="bg-rose-600 text-white font-mono font-bold text-sm px-2 py-1 rounded">{timeLeft.m}</div>
                <span className="text-rose-400 font-bold">:</span>
                <div className="bg-rose-600 text-white font-mono font-bold text-sm px-2 py-1 rounded">{timeLeft.s}</div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                className="rounded-full w-9 h-9 border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                className="rounded-full w-9 h-9 border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden -ml-4" ref={emblaRef}>
          <div className="flex">
            {flashSaleProducts.map((product, idx) => (
              <div key={idx} className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_32%] lg:flex-[0_0_24%] min-w-[280px] pl-4">
                <div className="bg-white dark:bg-[#15152a] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden relative group hover:border-rose-500/50 transition-all duration-300 transform hover:-translate-y-1.5 shadow-md hover:shadow-xl dark:hover:shadow-rose-500/10 h-full flex flex-col">
                  {/* Top Gradient Banner */}
                  <div className="bg-gradient-to-r from-[#F43F5E] via-[#D946EF] to-[#A855F7] text-white text-center text-[12px] font-extrabold py-2 uppercase tracking-wider relative z-20 shadow-md">
                    {product.badge}
                  </div>
                  
                  {/* Top Image Section */}
                  <div className="relative h-40 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay to ensure smooth blending */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
                  </div>

                  {/* Content Section */}
                  <div className="p-5 flex-1 flex flex-col relative pt-8 bg-white dark:bg-[#15152a]">
                    {/* Overlapping Logo */}
                    <div className="absolute -top-8 left-5 w-14 h-14 rounded-xl bg-white dark:bg-slate-900 border-4 border-white dark:border-[#15152a] flex items-center justify-center shadow-md overflow-hidden p-1.5 z-10">
                       <img src={`https://logo.clearbit.com/${product.logo}`} alt={`${product.name} logo`} className="w-full h-full object-contain" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-primary transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center text-amber-500 text-sm mb-4">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      <span className="font-bold text-slate-600 dark:text-slate-300 text-xs">{product.rating}</span>
                    </div>

                    <div className="flex items-baseline gap-2 mb-2 mt-auto">
                      <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{product.price}</span>
                      <span className="text-sm line-through text-slate-500 dark:text-slate-400 font-semibold">{product.original}</span>
                    </div>
                    
                    <Button className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white border-0 font-semibold py-5 rounded-xl shadow-md transition-transform active:scale-95">
                      Buy Now <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
