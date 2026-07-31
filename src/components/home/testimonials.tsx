"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Freelance Designer",
    text: "Got my Adobe CC license instantly. The activation process was super smooth and the WhatsApp support team guided me perfectly on activation. Highly recommended!",
    rating: 5,
    avatar: "R",
  },
  {
    name: "Priya Patel",
    role: "Agency Founder",
    text: "Been buying ChatGPT Plus and Canva accounts from NovaHub for my entire team. Never faced a single issue in 6 months. Best wholesale prices in India.",
    rating: 5,
    avatar: "P",
  },
  {
    name: "Vikram Mehta",
    role: "Full Stack Developer",
    text: "Got GitHub Copilot and Cursor Pro for a fraction of official pricing. Super fast delivery directly over WhatsApp. Genuine keys every single time.",
    rating: 5,
    avatar: "V",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#F0ECFF] dark:bg-[#0F0F23] border-b border-violet-100/60 dark:border-white/5 relative overflow-hidden">
      {/* Lavender radial glow — right offset */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[500px] bg-gradient-to-l from-violet-400/15 to-purple-300/8 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-200/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 text-amber-500 dark:text-amber-400 mb-4 bg-amber-100 dark:bg-amber-400/10 px-3 py-1 rounded-full border border-amber-200 dark:border-amber-400/20 shadow-sm">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <span className="text-xs font-semibold text-amber-600 dark:text-amber-300 ml-1">5.0 Star Rating</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Loved by Indian Creators</h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg">
            Join over 12,000+ happy professionals saving on their monthly tech stack.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 100 } }
              }}
              className="bg-white dark:bg-white/5 backdrop-blur-md p-8 rounded-3xl border-2 border-slate-200 dark:border-white/5 relative hover:border-primary dark:hover:border-[#7B2FBE] hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)] dark:hover:shadow-[0_20px_40px_-15px_rgba(123,47,190,0.2)] group"
            >
              <div className="absolute top-6 right-8 text-5xl text-slate-200 dark:text-white/10 font-serif leading-none select-none">“</div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-[#7B2FBE] rounded-full flex items-center justify-center text-white font-extrabold text-lg shadow-md">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex mt-6 text-amber-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
