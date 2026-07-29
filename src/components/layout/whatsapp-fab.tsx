"use client"

import { useState } from "react"
import { MessageCircle, X, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function WhatsAppFAB() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 w-72 md:w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 border-b border-slate-200 dark:border-white/5 flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white">Hi there! 👋</h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Avg. reply in under 3 minutes</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-3">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Need help picking a subscription or have questions about your order?
              </p>
              
              <div className="flex flex-col gap-2 mt-2">
                <a 
                  href="/#flash-sale"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 transition-colors font-semibold text-sm"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  Browse Flash Deals
                </a>
                <a 
                  href="https://wa.me/919999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white transition-colors font-bold text-sm shadow-md shadow-emerald-500/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  Start WhatsApp Chat
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group focus:outline-none"
        aria-label="Toggle chat menu"
      >
        {/* Pulse effect */}
        {!isOpen && (
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-60 duration-1000"></div>
        )}
        {/* Button */}
        <div className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-300 ${
          isOpen ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-900 rotate-90 scale-90' : 'bg-[#25D366] hover:bg-[#1EBE5D] text-white hover:scale-110'
        }`}>
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
        </div>
      </button>
    </div>
  )
}
