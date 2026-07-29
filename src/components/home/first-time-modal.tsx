"use client"

import { useState, useEffect } from "react"
import { X, Sparkles, Check, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function FirstTimeDiscountModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15 * 60) // 15 minutes

  useEffect(() => {
    // Show after 10 seconds on first visit unless already dismissed
    const dismissed = localStorage.getItem("novahub_lead_modal_dismissed")
    if (dismissed) return

    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10000)

    // Exit intent trigger
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setIsOpen(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const handleDismiss = () => {
    localStorage.setItem("novahub_lead_modal_dismissed", "true")
    setIsOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setTimeout(() => {
      handleDismiss()
    }, 2000)
  }

  useEffect(() => {
    if (!isOpen || submitted) return
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [isOpen, submitted])

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#0F0F23] border border-amber-500/30 rounded-3xl p-8 md:p-10 shadow-2xl z-10 text-center overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

            <button
              onClick={handleDismiss}
              className="absolute top-5 right-5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 space-y-4">
                <div className="w-16 h-16 mx-auto bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-500/30">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">Coupon Code: NOVA10</h3>
                <p className="text-sm text-slate-300">Your 10% discount coupon has been generated! Use code <span className="font-mono font-bold text-amber-400">NOVA10</span> at checkout.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex flex-col items-center gap-3">
                  <div className="inline-flex items-center space-x-2 bg-amber-500/10 text-amber-300 border border-amber-500/20 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 fill-current" />
                    <span>First-Time Customer Special</span>
                  </div>
                  <div className="inline-flex items-center space-x-1.5 bg-red-500/10 text-red-500 border border-red-500/20 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider animate-pulse">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Offer ends in: {formatTime(timeLeft)}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    Get <span className="text-amber-400">10% OFF</span>
                  </h2>
                  <p className="text-sm font-semibold tracking-wider text-slate-300 uppercase">
                    Your First Software Order
                  </p>
                  <p className="text-xs md:text-sm text-slate-400 max-w-sm mx-auto leading-relaxed pt-1">
                    Join 12,000+ creators & developers. Get secret wholesale deal alerts sent directly to your inbox.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 max-w-sm mx-auto pt-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-white/5 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm py-6 rounded-xl shadow-lg shadow-amber-500/20 border-0 uppercase tracking-wide transition-all"
                  >
                    UNLOCK MY 10% DISCOUNT
                  </Button>
                </form>

                <div>
                  <button
                    onClick={handleDismiss}
                    className="text-xs text-slate-500 hover:text-slate-400 underline font-medium cursor-pointer"
                  >
                    No thanks, I'd rather pay full price
                  </button>
                </div>

                <p className="text-[10px] text-slate-600">
                  First-time customers only. One-time use. Cannot be combined with other promotion codes.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
