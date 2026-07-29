"use client"

import { useEffect, useState } from "react"
import { Clock, Zap } from "lucide-react"

const flashSaleDeals = [
  { name: "ChatGPT Plus", price: "₹999", discount: "60% OFF" },
  { name: "Adobe Creative Cloud", price: "₹1,499", discount: "70% OFF" },
  { name: "Canva Pro", price: "₹499", discount: "65% OFF" },
  { name: "Midjourney Pro", price: "₹1,499", discount: "57% OFF" },
  { name: "GitHub Copilot", price: "₹799", discount: "55% OFF" },
]

export function AnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState("")

  useEffect(() => {
    // Set deadline to end of current day for demo purposes
    const deadline = new Date()
    deadline.setHours(23, 59, 59, 999)

    const interval = setInterval(() => {
      const now = new Date()
      const diff = deadline.getTime() - now.getTime()
      
      if (diff <= 0) {
        setTimeLeft("00:00:00")
        return
      }

      const h = Math.floor((diff / (1000 * 60 * 60)) % 24).toString().padStart(2, "0")
      const m = Math.floor((diff / 1000 / 60) % 60).toString().padStart(2, "0")
      const s = Math.floor((diff / 1000) % 60).toString().padStart(2, "0")

      setTimeLeft(`${h}:${m}:${s}`)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-slate-950 dark:bg-[#0a0a0a] border-b border-white/10 flex items-center z-[60] relative h-10 overflow-hidden">
      {/* Scrolling Marquee Area */}
      <div className="flex-1 flex overflow-hidden h-full relative [--gap:0px]">
        {/* We use two identical blocks that both animate left by 100% of their own width */}
        <div className="flex shrink-0 items-center animate-[marquee_40s_linear_infinite]">
          {flashSaleDeals.map((deal, idx) => (
            <div key={`deal-1-${idx}`} className="flex items-center px-4 md:px-6">
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500 mr-2 md:mr-3 shrink-0" />
              <span className="text-white font-bold text-[11px] md:text-xs tracking-wide mr-2 whitespace-nowrap">{deal.name}</span>
              <span className="text-emerald-400 font-black text-[11px] md:text-xs mr-2 whitespace-nowrap">{deal.price}</span>
              <span className="bg-white/10 text-slate-300 text-[9px] md:text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider whitespace-nowrap">{deal.discount}</span>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 items-center animate-[marquee_40s_linear_infinite]" aria-hidden="true">
          {flashSaleDeals.map((deal, idx) => (
            <div key={`deal-2-${idx}`} className="flex items-center px-4 md:px-6">
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500 mr-2 md:mr-3 shrink-0" />
              <span className="text-white font-bold text-[11px] md:text-xs tracking-wide mr-2 whitespace-nowrap">{deal.name}</span>
              <span className="text-emerald-400 font-black text-[11px] md:text-xs mr-2 whitespace-nowrap">{deal.price}</span>
              <span className="bg-white/10 text-slate-300 text-[9px] md:text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider whitespace-nowrap">{deal.discount}</span>
            </div>
          ))}
        </div>
        
        {/* Gradient fade before the timer */}
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-slate-950 dark:from-[#0a0a0a] to-transparent z-10" />
      </div>

      {/* Pinned Countdown Area */}
      <div className="shrink-0 h-full bg-slate-900 dark:bg-[#111] border-l border-white/10 px-3 md:px-5 flex items-center shadow-[-8px_0_15px_-3px_rgba(0,0,0,0.5)] z-20">
        <Clock className="w-3.5 h-3.5 text-amber-500 mr-1.5 shrink-0 animate-pulse" />
        <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-widest hidden sm:inline-block mr-2">Ends In:</span>
        <span className="text-amber-500 font-mono font-bold text-xs md:text-sm tracking-wider w-[60px] md:w-[68px] text-center">{timeLeft || "00:00:00"}</span>
      </div>
    </div>
  )
}
