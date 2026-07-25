"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bell } from "lucide-react"

const notifications = [
  { name: "Rahul from Mumbai", product: "ChatGPT Plus" },
  { name: "Priya from Delhi", product: "Canva Pro" },
  { name: "Amit from Bangalore", product: "Adobe CC" },
  { name: "Sneha from Pune", product: "Microsoft 365" },
  { name: "Vikram from Hyderabad", product: "Gemini Advanced" },
]

export function LivePurchaseTicker() {
  const [currentNotification, setCurrentNotification] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % notifications.length)
        setIsVisible(true)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden sm:block">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
            className="bg-white dark:bg-[#1E1E4A] border border-purple-200 dark:border-purple-800 border-l-4 border-l-[#8B5CF6] shadow-lg shadow-purple-900/20 rounded-r-lg p-4 max-w-sm flex items-center space-x-4 cursor-pointer"
            onMouseEnter={() => setIsVisible(true)}
          >
            <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-full shrink-0">
              <Bell className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {notifications[currentNotification].name}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                just bought <span className="font-semibold text-purple-600 dark:text-purple-400">{notifications[currentNotification].product}</span>
              </p>
              <p className="text-[10px] text-slate-500 mt-1">
                2 min ago
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
