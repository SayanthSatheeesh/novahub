import { Star } from "lucide-react"

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
    <section className="py-20 bg-slate-50 dark:bg-[#0F0F23] border-b border-slate-200 dark:border-white/5 relative">
      <div className="container mx-auto px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-slate-200 dark:border-white/10 relative hover:border-primary/40 dark:hover:border-purple-500/40 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-lg dark:hover:shadow-none"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
