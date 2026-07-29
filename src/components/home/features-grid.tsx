"use client"

import {
  ShieldCheck, Zap, Headphones, CheckCircle2,
  Lock, Key, Tag, ArrowRight, MessageCircle,
  Users, Star, Clock, BadgeCheck
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { icon: <Users className="w-5 h-5" />, value: "12,000+", label: "Happy Customers" },
  { icon: <Star className="w-5 h-5 fill-current" />, value: "4.9 ★", label: "Average Rating" },
  { icon: <Clock className="w-5 h-5" />, value: "<2s", label: "Delivery Speed" },
  { icon: <BadgeCheck className="w-5 h-5" />, value: "98%", label: "Satisfaction Rate" },
]

const corePromises = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    iconColor: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-50 dark:bg-blue-500/15 border-blue-200 dark:border-blue-500/25",
    accentColor: "text-blue-600 dark:text-blue-400",
    gradientBar: "from-blue-500 to-indigo-500",
    tag: "Authenticity",
    title: "100% Genuine Licenses",
    body: "Every license is sourced directly through official corporate distributor channels and verified before delivery. You get exactly what you pay for — no grey-market risks.",
    proof: "✓ Official vendor partnerships · Full warranty included",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    iconColor: "text-amber-500 dark:text-amber-400",
    iconBg: "bg-amber-50 dark:bg-amber-500/15 border-amber-200 dark:border-amber-500/25",
    accentColor: "text-amber-500 dark:text-amber-400",
    gradientBar: "from-amber-400 to-orange-500",
    tag: "Speed",
    title: "Instant Delivery in Under 2s",
    body: "The moment your payment clears, our automated dispatch engine encrypts and delivers your credentials via Email & WhatsApp — no manual processing, no waiting.",
    proof: "✓ Avg. fulfillment time: 0.18s · Zero support queues",
  },
  {
    icon: <Tag className="w-8 h-8" />,
    iconColor: "text-purple-600 dark:text-purple-400",
    iconBg: "bg-purple-50 dark:bg-purple-500/15 border-purple-200 dark:border-purple-500/25",
    accentColor: "text-purple-600 dark:text-purple-400",
    gradientBar: "from-purple-500 to-pink-500",
    tag: "Value",
    title: "Save Up to 75% Off Retail",
    body: "We buy in bulk directly from corporate distributors and pass those savings straight to you — no middlemen, no hidden markups. The same product, a fraction of the price.",
    proof: "✓ vs. official retail prices · Transparent pricing always",
  },
]

const secondaryFeatures = [
  {
    icon: <Lock className="w-5 h-5 text-emerald-500" />,
    iconBg: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-400/20",
    title: "256-Bit SSL Encrypted",
    body: "Every checkout runs in an isolated, bank-grade encrypted gateway. Your financial data never touches our servers.",
  },
  {
    icon: <Key className="w-5 h-5 text-sky-500" />,
    iconBg: "bg-sky-50 dark:bg-sky-500/10 border-sky-200 dark:border-sky-400/20",
    title: "One-Click Passkey Reset",
    body: "Lost access? Reset credentials yourself via the self-service dashboard — no waiting on support.",
  },
  {
    icon: <Headphones className="w-5 h-5 text-pink-500" />,
    iconBg: "bg-pink-50 dark:bg-pink-500/10 border-pink-200 dark:border-pink-400/20",
    title: "24/7 WhatsApp Support",
    body: "Real humans available around the clock. Get setup help, troubleshooting, or any query resolved within minutes.",
  },
]

// ─── Animation variants ───────────────────────────────────────────────────────

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const staggerContainerSlow = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUpItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring" as const, stiffness: 110 },
  },
}

// ─── Component ────────────────────────────────────────────────────────────────

export function FeaturesGridSection() {
  return (
    <section className="py-20 md:py-28 bg-background dark:bg-[#0F0F23] border-b border-border dark:border-white/5 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-80 bg-primary/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* ══════════════════════════════════
            BLOCK 1 · Section Header
        ══════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/8 text-primary text-xs font-extrabold mb-5 backdrop-blur-md tracking-wider uppercase">
            <BadgeCheck className="w-3.5 h-3.5" />
            Trusted by 12,000+ professionals
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4 leading-tight">
            Why Thousands Choose{" "}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              NovaHub
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Premium software at wholesale prices — with instant delivery, genuine licenses, and a guarantee that protects every order.
          </p>
        </motion.div>

        {/* ══════════════════════════════════
            BLOCK 2 · Social Proof Stats Bar
        ══════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUpItem}
              className="flex flex-col items-center justify-center gap-1.5 bg-white dark:bg-white/5 border border-border dark:border-white/8 rounded-2xl py-5 px-4 text-center group hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <span className="text-primary/70">{s.icon}</span>
              <span className="text-2xl md:text-3xl font-black text-foreground tracking-tight">{s.value}</span>
              <span className="text-xs text-muted-foreground font-semibold">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ══════════════════════════════════
            BLOCK 3 · Core 3 Promise Cards
        ══════════════════════════════════ */}
        <div className="mb-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-muted-foreground text-center mb-6">
            Our Core Promises to You
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainerSlow}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {corePromises.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUpItem}
                className="relative bg-white dark:bg-[#15152a] rounded-3xl border border-border dark:border-white/10 overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/8 dark:hover:shadow-black/40 transition-all duration-300 shadow-md"
              >
                {/* Gradient accent bar on top */}
                <div className={`h-1 w-full bg-gradient-to-r ${p.gradientBar}`} />

                <div className="p-7">
                  {/* Icon + Tag row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${p.iconBg} ${p.iconColor} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      {p.icon}
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${p.iconBg} ${p.accentColor}`}>
                      {p.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-foreground mb-3 leading-tight">
                    {p.title}
                  </h3>

                  {/* Body */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {p.body}
                  </p>

                  {/* Proof chip */}
                  <div className={`text-[11px] font-semibold ${p.accentColor} bg-transparent border-t border-border dark:border-white/8 pt-4 leading-snug`}>
                    {p.proof}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ══════════════════════════════════
            BLOCK 4 · Secondary Features Row
        ══════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
        >
          {secondaryFeatures.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUpItem}
              className="flex items-start gap-4 bg-white dark:bg-white/5 border border-border dark:border-white/8 rounded-2xl p-5 group hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm ${f.iconBg}`}>
                {f.icon}
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm mb-1">{f.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{f.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ══════════════════════════════════
            BLOCK 5 · Trust Safety Net Cards
            (Objection killers — final CTA)
        ══════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Card A: Money-Back Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-amber-50 dark:bg-amber-500/5 border border-amber-200 dark:border-amber-500/20 rounded-3xl p-8 flex flex-col justify-between overflow-hidden group hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute -top-10 -right-10 w-52 h-52 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-500/25 flex items-center justify-center text-amber-500 shadow-sm group-hover:scale-110 transition-transform shrink-0">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1 bg-amber-200/80 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-300/60 dark:border-amber-500/30 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider mb-1">
                    100% Risk Free
                  </span>
                  <h3 className="text-xl font-extrabold text-foreground">Money-Back Guarantee</h3>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                If your license fails to activate as promised, you get an <strong>instant replacement or a full 100% refund within 24 hours</strong> — no questions asked, no forms to fill.
              </p>
              <ul className="space-y-1.5 mb-7">
                {["Automatic replacement on failure", "Full refund within 24h", "No support tickets required"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-300">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a href="#faq">
              <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl px-6 py-5 text-sm border-0 shadow-lg shadow-amber-500/25 w-full md:w-auto">
                View Refund Policy <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>

          {/* Card B: 24/7 Live Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="relative bg-emerald-50 dark:bg-emerald-500/5 border border-emerald-200 dark:border-emerald-500/20 rounded-3xl p-8 flex flex-col justify-between overflow-hidden group hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute -top-10 -right-10 w-52 h-52 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/25 flex items-center justify-center text-emerald-500 shadow-sm group-hover:scale-110 transition-transform shrink-0">
                  <Headphones className="w-8 h-8" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-200/80 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-500/30 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Always Online
                  </span>
                  <h3 className="text-xl font-extrabold text-foreground">24/7 Live Support</h3>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                Stuck on setup? Our real human support team is available <strong>24 hours a day, 7 days a week</strong> on WhatsApp. Most issues are resolved within minutes — not hours.
              </p>
              <ul className="space-y-1.5 mb-7">
                {["Real humans, not bots", "Average response: under 3 minutes", "Setup + troubleshooting help"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold rounded-xl px-6 py-5 text-sm border-0 shadow-lg shadow-emerald-500/25 w-full md:w-auto">
                <MessageCircle className="w-4 h-4 mr-2" /> Chat Now on WhatsApp
              </Button>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
