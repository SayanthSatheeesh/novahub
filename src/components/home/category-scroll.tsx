"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight, Star, Tag, Sparkles } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"
import { motion, AnimatePresence } from "framer-motion"

const filterOptions = [
  "All Tools",
  "AI & Productivity",
  "Developer Tools",
  "Design Suites",
]

const categories = [
  {
    id: "AI & Productivity",
    title: "AI & Productivity Assistants",
    products: [
      { name: "ChatGPT Plus", slug: "chatgpt-plus", price: "₹999", original: "₹2,499", discount: "60% OFF", logo: "openai.com", image: "https://images.unsplash.com/photo-1665686376173-ada7a0031a85?q=80&w=600&auto=format&fit=crop" },
      { name: "Lovable Pro AI", slug: "chatgpt-plus", price: "₹1,199", original: "₹3,199", discount: "62% OFF", logo: "lovable.dev", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop" },
      { name: "Gemini Advanced", slug: "chatgpt-plus", price: "₹899", original: "₹1,999", discount: "55% OFF", logo: "google.com", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop" },
      { name: "Midjourney Pro", slug: "midjourney", price: "₹1,499", original: "₹3,500", discount: "57% OFF", logo: "midjourney.com", image: "https://images.unsplash.com/photo-1686191128892-3b370133a4bf?q=80&w=600&auto=format&fit=crop" },
      { name: "Claude 3.5 Sonnet", slug: "chatgpt-plus", price: "₹1,099", original: "₹2,000", discount: "45% OFF", logo: "anthropic.com", image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=600&auto=format&fit=crop" },
    ],
  },
  {
    id: "Developer Tools",
    title: "Developer & Engineering Tools",
    products: [
      { name: "GitHub Copilot", slug: "github-copilot", price: "₹799", original: "₹1,800", discount: "55% OFF", logo: "github.com", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop" },
      { name: "Cursor Pro AI", slug: "chatgpt-plus", price: "₹1,099", original: "₹2,400", discount: "54% OFF", logo: "cursor.sh", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format&fit=crop" },
      { name: "JetBrains All Products", slug: "chatgpt-plus", price: "₹1,899", original: "₹6,000", discount: "68% OFF", logo: "jetbrains.com", image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=600&auto=format&fit=crop" },
      { name: "Vercel Pro Team", slug: "chatgpt-plus", price: "₹1,299", original: "₹3,200", discount: "60% OFF", logo: "vercel.com", image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=600&auto=format&fit=crop" },
    ],
  },
  {
    id: "Design Suites",
    title: "Design & Creative Suites",
    products: [
      { name: "Adobe Creative Cloud", slug: "adobe-creative-cloud", price: "₹1,499", original: "₹4,999", discount: "70% OFF", logo: "adobe.com", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop" },
      { name: "Canva Pro (1 Year)", slug: "canva-pro", price: "₹499", original: "₹1,399", discount: "65% OFF", logo: "canva.com", image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=600&auto=format&fit=crop" },
      { name: "Figma Professional", slug: "chatgpt-plus", price: "₹899", original: "₹1,800", discount: "50% OFF", logo: "figma.com", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop" },
      { name: "Envato Elements", slug: "chatgpt-plus", price: "₹699", original: "₹1,500", discount: "53% OFF", logo: "envato.com", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop" },
    ],
  },
]

function ProductCard({ product }: { product: any }) {
  return (
    <div className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_32%] lg:flex-[0_0_24%] min-w-[280px] pl-4">
      <div className="bg-white dark:bg-[#141414] rounded-2xl border border-violet-100 dark:border-white/10 h-full flex flex-col group transition-all duration-300 ease-out hover:-translate-y-2 shadow-lg shadow-violet-100/50 hover:shadow-2xl hover:shadow-violet-300/50 dark:hover:shadow-indigo-500/10 overflow-hidden relative">
        
        {/* Discount Badge */}
        <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-primary to-purple-600 text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow-md">
          {product.discount}
        </div>

        {/* Top Image Section */}
        <div className="relative h-40 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-[500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content Section */}
        <div className="p-5 flex-1 flex flex-col relative pt-8">
          {/* Overlapping Logo */}
          <div className="absolute -top-8 left-5 w-14 h-14 rounded-xl bg-white dark:bg-slate-900 border-4 border-white dark:border-[#141414] flex items-center justify-center shadow-md overflow-hidden p-1.5 z-10 transition-transform duration-300 group-hover:scale-110">
             <img src={`https://www.google.com/s2/favicons?sz=128&domain=${product.logo}`} alt={`${product.name} logo`} className="w-full h-full object-contain" />
          </div>

          <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors tracking-tight line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-[#388E3C] text-white px-2 py-0.5 rounded-md flex items-center gap-1 text-[11px] font-extrabold shadow-sm">
              <Star className="w-3 h-3 fill-current" />
              <span>4.9</span>
            </div>
            <span className="text-slate-500 dark:text-slate-400 text-xs font-semibold">(2k+ reviews)</span>
          </div>

          <div className="flex items-end gap-2.5 mb-6 mt-auto">
            <span className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">{product.price}</span>
            <span className="text-sm line-through text-slate-400 font-medium mb-0.5">{product.original}</span>
          </div>

          <a href={`/products/${product.slug}`} className="w-full">
            <Button className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white border-0 font-semibold py-5 rounded-xl shadow-md transition-all duration-300 active:scale-95 group-hover:shadow-lg group-hover:shadow-indigo-500/25">
              View Details <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

function CategoryRow({ category }: { category: any }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", dragFree: true },
    [WheelGesturesPlugin()]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <motion.div 
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mb-14 last:mb-0"
    >
      <div className="flex items-end justify-between mb-8">
        <div className="flex items-center gap-3.5 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#4F46E5] to-[#9333EA] flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C12 0 12.5 8 16 11.5C19.5 15 24 15 24 15C24 15 17.5 15.5 14 19C10.5 22.5 12 24 12 24C12 24 11.5 17.5 8 14C4.5 10.5 0 11.5 0 11.5C0 11.5 6.5 11 10 7.5C13.5 4 12 0 12 0Z" />
            </svg>
          </div>
          <h2 className="tracking-tighter font-black text-3xl md:text-[34px] lg:text-4xl text-[#111118] dark:text-white leading-none mt-1">
            {category.title}
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full w-11 h-11 border-violet-300 dark:border-white/15 bg-white dark:bg-white/5 text-slate-700 dark:text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full w-11 h-11 border-violet-300 dark:border-white/15 bg-white dark:bg-white/5 text-slate-700 dark:text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden -ml-4" ref={emblaRef}>
        <div className="flex">
          {category.products.map((product: any, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function CategoryScrollSection() {
  const [activeFilter, setActiveFilter] = useState("All Tools")

  const filteredCategories = activeFilter === "All Tools" 
    ? categories 
    : categories.filter(c => c.id === activeFilter)

  return (
    <section className="py-16 md:py-20 bg-[#F8F6FF] dark:bg-[#090915] border-b border-violet-100 dark:border-white/5 relative overflow-hidden">
      {/* Dynamic Aurora Glows (Massive Pastel Watercolor) */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[80%] bg-purple-200/70 dark:bg-purple-900/20 rounded-full blur-[160px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute top-[10%] right-[-10%] w-[60%] h-[90%] bg-blue-200/60 dark:bg-blue-900/10 rounded-full blur-[180px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-[-20%] left-[10%] w-[80%] h-[70%] bg-indigo-200/60 dark:bg-indigo-900/20 rounded-full blur-[160px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-[10%] right-[20%] w-[50%] h-[60%] bg-pink-200/50 dark:bg-pink-900/10 rounded-full blur-[160px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen" />

      <div className="container mx-auto px-4 overflow-hidden relative z-10">
        {/* Category Filter Pills Bar */}
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-12 flex-wrap">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-[13px] md:text-sm font-semibold transition-all duration-300 border backdrop-blur-md ${
                  isActive
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-lg shadow-slate-900/10 scale-[1.02]"
                    : "bg-white/60 dark:bg-white/5 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/10 shadow-sm"
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        {/* Categories Rows */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {filteredCategories.map((category, idx) => (
              <CategoryRow key={idx} category={category} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
