import { CheckCircle2, ShieldCheck, Zap, Headphones } from "lucide-react"

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "100% Genuine Licenses",
    description: "Every license is verified directly with official vendors. Full warranty guaranteed.",
  },
  {
    icon: <Zap className="w-8 h-8 text-cyan-500 dark:text-cyan-400" />,
    title: "Instant Delivery",
    description: "Your login credentials and setup instructions are sent instantly after payment.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />,
    title: "24/7 WhatsApp Support",
    description: "Having setup trouble? Our direct support team resolves any issues within minutes.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-amber-500 dark:text-amber-400" />,
    title: "Best Price Guarantee",
    description: "Unbeatable wholesale rates saving you up to 75% compared to official pricing.",
  },
]

export function WhyUsSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-[#0B0B1E] border-b border-slate-200 dark:border-white/5 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Why Buy From NovaHub?</h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg">
            Over 12,000+ creators, developers, and professionals trust us. Here is why.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-slate-200 dark:border-white/10 text-center group hover:border-primary/50 dark:hover:border-purple-500/50 hover:shadow-xl dark:hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/40 transition-all shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
