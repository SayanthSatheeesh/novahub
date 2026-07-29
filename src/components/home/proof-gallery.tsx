"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function ProofGallery() {
  return (
    <section className="py-16 bg-background dark:bg-[#0F0F23] border-b border-border dark:border-white/5">
      <div className="container mx-auto px-4 text-center">
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
              className={`break-inside-avoid bg-white dark:bg-slate-800/50 rounded-2xl border border-border dark:border-white/10 flex flex-col items-center justify-center p-3 relative overflow-hidden group hover:border-primary/50 dark:hover:border-purple-500/50 transition-colors shadow-sm ${i % 2 === 0 ? 'h-64' : 'h-80'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-4">
                 <span className="text-white text-xs font-semibold flex items-center translate-y-2 group-hover:translate-y-0 transition-transform"><MessageCircle className="w-3 h-3 mr-1 text-[#25D366]"/> Verified Delivery</span>
              </div>
              <div className="w-full h-full border-2 border-dashed border-violet-200 dark:border-white/10 rounded-xl flex items-center justify-center text-muted-foreground text-sm font-medium text-center group-hover:scale-105 transition-transform duration-500 bg-secondary dark:bg-white/5">
                Proof<br/>#{i}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
