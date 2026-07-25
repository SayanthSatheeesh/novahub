"use client"

import { useEffect, useState } from "react"
import { X, Gift, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface MultiCouponModalProps {
  isOpen: boolean
  onClose: () => void
}

export function MultiCouponModal({ isOpen, onClose }: MultiCouponModalProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [timeLeft, setTimeLeft] = useState({ m: "29", s: "54" })

  useEffect(() => {
    const interval = setInterval(() => {
      const s = Math.floor(Math.random() * 60).toString().padStart(2, "0")
      setTimeLeft((prev) => ({ ...prev, s }))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const coupons = [
    {
      badge: "Special Offer",
      title: "AI Suite Bundle Special",
      code: "NOVA-AI15",
      discount: "15% OFF",
      validity: "Valid until midnight",
    },
    {
      badge: "Storewide Deal",
      title: "All Subscriptions & Packages",
      code: "NOVA-STORE10",
      discount: "10% OFF",
      validity: "Instant auto-apply",
    },
    {
      badge: "First Purchase",
      title: "First-Time Buyer Voucher",
      code: "NOVA-WELCOME",
      discount: "₹150 OFF",
      validity: "Minimum order ₹500",
    },
  ]

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2500)
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
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-[#0F0F23] border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10"
          >
            {/* Header Gift Banner */}
            <div className="bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 p-6 text-center text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-1.5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 mx-auto bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-2 border border-white/30">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-extrabold tracking-tight">Claim Exclusive Coupons</h3>
              <p className="text-xs text-white/80 mt-1 font-medium">Unlock instant savings on genuine software credentials</p>
            </div>

            {/* Coupons Stack */}
            <div className="p-6 space-y-4 max-h-[380px] overflow-y-auto">
              {coupons.map((coupon, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-3 relative group hover:border-purple-500/50 transition-all"
                >
                  <div className="space-y-1">
                    <span className="inline-block bg-gradient-to-r from-rose-500 to-purple-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {coupon.badge}
                    </span>
                    <h4 className="text-sm font-bold text-white">{coupon.title}</h4>
                    <p className="text-[11px] text-slate-400">{coupon.validity}</p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="block text-xl font-extrabold text-rose-400">{coupon.discount}</span>
                    <Button
                      onClick={() => handleCopy(coupon.code, idx)}
                      size="sm"
                      className="mt-1 bg-white/10 hover:bg-purple-600 text-white text-xs font-semibold rounded-lg px-3 py-1 border border-white/10"
                    >
                      {copiedIndex === idx ? (
                        <span className="flex items-center text-emerald-400">
                          <Check className="w-3.5 h-3.5 mr-1" /> Copied
                        </span>
                      ) : (
                        `Claim`
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Action */}
            <div className="p-6 bg-white/[0.02] border-t border-white/5 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium px-1">
                <span>Offers Expire Soon:</span>
                <span className="font-mono font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded">
                  00:{timeLeft.m}:{timeLeft.s}
                </span>
              </div>

              <Button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-[#4FC3F7] to-[#7B2FBE] text-white font-bold py-6 rounded-xl shadow-lg border-0 hover:brightness-110"
              >
                <Sparkles className="w-4 h-4 mr-2" /> Collect All Coupons
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
