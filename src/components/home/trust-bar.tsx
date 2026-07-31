"use client"

import { motion } from "framer-motion"
import { CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react"

const trustItems = [
  {
    icon: CheckCircle2,
    iconColor: "text-emerald-500",
    title: "100% Verified Accounts",
    subtitle: "Every credential tested before delivery",
  },
  {
    icon: MessageCircle,
    iconColor: "text-[#25D366]",
    title: "Instant WhatsApp Delivery",
    subtitle: "Receive access in under 5 minutes",
  },
  {
    icon: ShieldCheck,
    iconColor: "text-blue-500",
    title: "7-Day Replacement Guarantee",
    subtitle: "Account issue? We fix it. No questions asked.",
  },
]

export function TrustBar() {
  // Triple the items so we can loop seamlessly
  const items = [...trustItems, ...trustItems, ...trustItems]

  return (
    <section className="py-6 border-y border-violet-200/50 dark:border-white/5 bg-gradient-to-b from-[#F4F1FF] to-[#E9E3FA] dark:from-[#090915] dark:to-[#0F0F23] overflow-hidden relative">
      <div className="w-full flex">
        <motion.div
          animate={{ x: [0, "-33.333333%"] }}
          transition={{ ease: "linear", duration: 45, repeat: Infinity }}
          className="flex whitespace-nowrap w-max"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 mx-3 rounded-2xl bg-white dark:bg-[#111118] border border-white/60 dark:border-white/10 shadow-[0_4px_20px_-4px_rgba(139,92,246,0.15)] dark:shadow-none min-w-[320px] transition-all hover:scale-[1.02] hover:shadow-[0_8px_30px_-4px_rgba(139,92,246,0.25)] dark:hover:border-white/20"
            >
              <div className="shrink-0">
                <item.icon className={`w-8 h-8 ${item.iconColor}`} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col whitespace-normal">
                <p className="font-bold text-sm text-slate-800 dark:text-slate-200">{item.title}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
