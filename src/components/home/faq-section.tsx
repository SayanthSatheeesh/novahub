"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I receive my product after purchase?",
    answer: "Immediately after your payment is successful, you will receive an email and WhatsApp message with your license key, account details, and a step-by-step installation guide. Delivery is instant and automated 24/7."
  },
  {
    question: "Are these licenses genuine?",
    answer: "Yes, 100%. We source our software directly from authorized corporate distributors in bulk, which allows us to offer them at a significant discount. They are fully legitimate and can be linked to your own email in most cases."
  },
  {
    question: "What if I face an issue during installation?",
    answer: "We offer 24/7 priority support via WhatsApp. If you face any issues, our technical team will guide you through the process or resolve it for you via remote support (AnyDesk/TeamViewer) if needed."
  },
  {
    question: "Is it a lifetime license or subscription?",
    answer: "This depends on the specific product. Windows and Office are typically lifetime licenses for 1 PC. Tools like ChatGPT Plus or Canva Pro are billed per month or year. Please check the specific product description before purchasing."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, if the product key is found to be defective or doesn't work as advertised, we offer a full replacement or refund within 7 days of purchase, provided our technical team verifies the issue."
  }
]

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-background dark:bg-[#16163A]/30 border-b border-border dark:border-white/5">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 dark:text-slate-400">Everything you need to know about purchasing from NovaHub.</p>
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                }}
                className={`bg-white dark:bg-[#151528] backdrop-blur-md rounded-2xl border transition-all duration-300 ${isOpen ? 'border-purple-500/50 shadow-lg shadow-purple-500/5 dark:border-purple-500/50' : 'border-border dark:border-white/10 hover:border-violet-300 dark:hover:border-white/20'}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none group"
                >
                  <span className={`font-semibold text-lg pr-8 transition-colors ${isOpen ? 'text-purple-600 dark:text-purple-400' : 'text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400'}`}>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-purple-100 dark:bg-purple-500/20' : 'bg-slate-100 dark:bg-white/5 group-hover:bg-slate-200 dark:group-hover:bg-white/10'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-purple-600 dark:text-purple-400" : "text-slate-500"}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-600 dark:text-slate-300/80 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
