"use client"

import { Ticket } from "lucide-react"
import { motion } from "framer-motion"

export function FloatingCouponBadge({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-24 z-40 bg-gradient-to-r from-rose-500 to-purple-600 text-white px-4 py-2.5 rounded-2xl shadow-xl shadow-rose-500/30 border border-rose-400/40 flex items-center gap-2 group cursor-pointer"
    >
      <motion.div
        animate={{ rotate: [-8, 8, -8] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Ticket className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
      </motion.div>
      <span className="font-extrabold text-xs tracking-wider uppercase">COUPON 10% OFF</span>
    </motion.button>
  )
}
