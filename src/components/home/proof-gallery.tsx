"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function ProofGallery() {
  return (
    <section className="py-16 bg-[#EDE8FF] dark:bg-[#0F0F23] border-b border-violet-100/80 dark:border-white/5 relative overflow-hidden">
      {/* Lavender radial glow — left offset */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-r from-purple-400/15 to-violet-300/8 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-300/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold text-foreground mb-4">Real Customers, Real Results</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
          Screenshots from our WhatsApp support chats proving our instant delivery and reliability.
        </p>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="columns-2 md:columns-4 gap-4 max-w-5xl mx-auto space-y-4"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className={`break-inside-avoid bg-slate-100 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-300 dark:border-white/10 flex flex-col items-center justify-center p-3 relative overflow-hidden group hover:border-primary/50 transition-colors ${i % 2 === 0 ? 'h-64' : 'h-80'}`}
            >
              {/* Shimmer overlay */}
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent pointer-events-none" />
              <div className="flex flex-col items-center gap-2 text-center">
                <MessageCircle className="w-8 h-8 text-slate-300 dark:text-white/20" />
                <p className="text-xs font-semibold text-slate-400 dark:text-white/30">Screenshot #{i}</p>
                <p className="text-[10px] text-slate-400 dark:text-white/20">Coming soon</p>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-4">
                 <span className="text-white text-xs font-semibold flex items-center translate-y-2 group-hover:translate-y-0 transition-transform"><MessageCircle className="w-3 h-3 mr-1 text-[#25D366]"/> Verified Delivery</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
