"use client"

import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"

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
    <div className="h-9 w-full bg-gradient-to-r from-[#4FC3F7] to-[#7B2FBE] flex items-center justify-center overflow-hidden z-[60] relative">
      <div className="container flex items-center justify-center space-x-2 px-4">
        <Sparkles className="w-4 h-4 text-white animate-pulse shrink-0" />
        <p className="text-white text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis">
          ⚡ FLASH SALE: ChatGPT Plus at ₹999 · Ends in <span className="font-mono bg-white/20 px-1 rounded">{timeLeft || "00:00:00"}</span>
        </p>
      </div>
    </div>
  )
}
