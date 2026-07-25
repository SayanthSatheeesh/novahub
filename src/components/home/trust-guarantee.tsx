"use client"

import { ShieldCheck, Headphones, ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function TrustGuaranteeSection() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-[#0B0B1E] border-b border-slate-200 dark:border-white/5 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Money-Back Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-amber-50 dark:bg-amber-500/5 backdrop-blur-xl border border-amber-200 dark:border-amber-500/20 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 flex items-center justify-center text-amber-500 dark:text-amber-400 shadow-sm group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-9 h-9" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 bg-amber-200 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider mb-1">
                    100% Risk Free
                  </div>
                  <h3 className="text-2xl font-extrabold text-foreground">Money-Back Guarantee</h3>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-8">
                Receive your genuine product credentials instantly or get a full 100% refund. Feel completely secure with full buyer trading protection on every order!
              </p>
            </div>

            <div>
              <a href="#faq">
                <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl px-6 py-5 text-sm border-0 shadow-lg shadow-amber-500/20">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Card 2: 24/7 Live Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-emerald-50 dark:bg-emerald-500/5 backdrop-blur-xl border border-emerald-200 dark:border-emerald-500/20 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-500 dark:text-emerald-400 shadow-sm group-hover:scale-110 transition-transform">
                  <Headphones className="w-9 h-9" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 bg-emerald-200 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider mb-1">
                    Always Online
                  </div>
                  <h3 className="text-2xl font-extrabold text-foreground">24/7 Live Support</h3>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-8">
                NovaHub customer support works around the clock. Contact us anytime on WhatsApp for instant setup guidance or troubleshooting!
              </p>
            </div>

            <div>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold rounded-xl px-6 py-5 text-sm border-0 shadow-lg shadow-emerald-500/20">
                  <MessageCircle className="w-4 h-4 mr-2" /> Chat Now on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
