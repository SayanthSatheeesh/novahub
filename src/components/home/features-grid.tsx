"use client"

import { Rocket, Key, Lock, Headphones, Tag, ShieldCheck, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: <Rocket className="w-6 h-6 text-primary" />,
    title: "REAL-TIME DELIVERY",
    description: "Instant automated delivery after payment without waiting. Instant setup dispel your worries.",
  },
  {
    icon: <Key className="w-6 h-6 text-[#4FC3F7]" />,
    title: "QUICK RESET PASSKEY",
    description: "Click reset passkey on your dashboard anytime without manual waiting or delays.",
  },
  {
    icon: <Lock className="w-6 h-6 text-emerald-400" />,
    title: "SSL SECURED PAYMENT",
    description: "All payments execute in a 256-bit encrypted environment with complete transaction safety.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-pink-400" />,
    title: "24/7 LIVE SUPPORT",
    description: "NovaHub provides 24/7 dedicated online customer service to ensure a seamless experience.",
  },
  {
    icon: <Tag className="w-6 h-6 text-amber-400" />,
    title: "AFFORDABLE PREMIUM",
    description: "Get original premium software subscriptions at wholesale prices up to 75% off retail.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-rose-400" />,
    title: "REFUND GUARANTEE",
    description: "Full buyer protection with guaranteed refunds available within 24 hours of purchase.",
    hasPolicyLink: true,
  },
]

export function FeaturesGridSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-[#0F0F23] border-b border-slate-200 dark:border-white/5 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            Why Do More People Choose <span className="text-primary">NovaHub</span>?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
            Engineered for reliability, speed, and 100% customer satisfaction.
          </p>
        </div>

        {/* 6-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08, type: "spring", stiffness: 100 }}
              className="bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-white/10 p-6 flex gap-4 items-start group hover:border-primary/50 dark:hover:border-purple-500/50 hover:shadow-xl dark:hover:bg-white/[0.07] transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-foreground tracking-wider uppercase mb-1.5 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed mb-2">
                  {item.description}
                </p>
                {item.hasPolicyLink && (
                  <a href="#refund-policy" className="inline-flex items-center text-xs font-bold text-rose-400 hover:text-rose-300">
                    Refund Policy <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Social Proof Stat Bar */}
        <div className="text-center pt-6 border-t border-slate-200 dark:border-white/5">
          <p className="text-2xl md:text-3xl font-extrabold text-foreground">
            <span className="text-[#24CE6E]">98%</span> of Users Satisfied
          </p>
          <p className="text-xs text-slate-500 mt-1">Based on 12,000+ verified customer transactions across India</p>
        </div>
      </div>
    </section>
  )
}
