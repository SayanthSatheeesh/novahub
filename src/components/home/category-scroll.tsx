"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"
import { useCallback } from "react"

const categories = [
  {
    title: "AI & Productivity Assistants",
    products: [
      { name: "ChatGPT Plus", price: "₹999", original: "₹2,499", discount: "60% OFF", logo: "openai.com", image: "https://images.unsplash.com/photo-1665686376173-ada7a0031a85?q=80&w=600&auto=format&fit=crop" },
      { name: "Lovable Pro AI", price: "₹1,199", original: "₹3,199", discount: "62% OFF", logo: "lovable.dev", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop" },
      { name: "Gemini Advanced", price: "₹899", original: "₹1,999", discount: "55% OFF", logo: "google.com", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop" },
      { name: "Midjourney Pro", price: "₹1,499", original: "₹3,500", discount: "57% OFF", logo: "midjourney.com", image: "https://images.unsplash.com/photo-1686191128892-3b370133a4bf?q=80&w=600&auto=format&fit=crop" },
      { name: "Claude 3.5 Sonnet", price: "₹1,099", original: "₹2,000", discount: "45% OFF", logo: "anthropic.com", image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=600&auto=format&fit=crop" },
    ],
  },
  {
    title: "Developer & Engineering Tools",
    products: [
      { name: "GitHub Copilot", price: "₹799", original: "₹1,800", discount: "55% OFF", logo: "github.com", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop" },
      { name: "Cursor Pro AI", price: "₹1,099", original: "₹2,400", discount: "54% OFF", logo: "cursor.sh", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format&fit=crop" },
      { name: "JetBrains All Products", price: "₹1,899", original: "₹6,000", discount: "68% OFF", logo: "jetbrains.com", image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=600&auto=format&fit=crop" },
      { name: "Vercel Pro Team", price: "₹1,299", original: "₹3,200", discount: "60% OFF", logo: "vercel.com", image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=600&auto=format&fit=crop" },
    ],
  },
  {
    title: "Design & Creative Suites",
    products: [
      { name: "Adobe Creative Cloud", price: "₹1,499", original: "₹4,999", discount: "70% OFF", logo: "adobe.com", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop" },
      { name: "Canva Pro (1 Year)", price: "₹499", original: "₹1,399", discount: "65% OFF", logo: "canva.com", image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=600&auto=format&fit=crop" },
      { name: "Figma Professional", price: "₹899", original: "₹1,800", discount: "50% OFF", logo: "figma.com", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop" },
      { name: "Envato Elements", price: "₹699", original: "₹1,500", discount: "53% OFF", logo: "envato.com", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop" },
    ],
  },
]

function ProductCard({ product }: { product: any }) {
  return (
    <div className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_32%] lg:flex-[0_0_24%] min-w-[280px] pl-4">
      <div className="bg-white dark:bg-[#15152a] rounded-2xl border border-slate-200 dark:border-white/10 h-full flex flex-col group hover:border-primary/50 hover:shadow-xl dark:hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-1.5 shadow-sm overflow-hidden">
        {/* Top Image Section */}
        <div className="relative h-40 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay to ensure smooth blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content Section */}
        <div className="p-5 flex-1 flex flex-col relative pt-8">
          {/* Overlapping Logo */}
          <div className="absolute -top-8 left-5 w-14 h-14 rounded-xl bg-white dark:bg-slate-900 border-4 border-white dark:border-[#15152a] flex items-center justify-center shadow-md overflow-hidden p-1.5 z-10">
             <img src={`https://logo.clearbit.com/${product.logo}`} alt={`${product.name} logo`} className="w-full h-full object-contain" />
          </div>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center text-amber-500 text-sm mb-4">
            <Star className="w-4 h-4 fill-current mr-1" />
            <span className="font-bold text-slate-600 dark:text-slate-300 text-xs">4.9/5.0</span>
          </div>

          <div className="flex items-baseline gap-2 mb-5 mt-auto">
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{product.price}</span>
            <span className="text-sm line-through text-slate-500 dark:text-slate-400 font-semibold">{product.original}</span>
          </div>

          <Button className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white border-0 font-semibold py-5 rounded-xl shadow-md transition-transform active:scale-95">
            Buy Now <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
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
    <div className="mb-14 last:mb-0">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold text-foreground tracking-tight">{category.title}</h2>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full w-9 h-9 border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full w-9 h-9 border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10"
            >
              <ChevronRight className="w-4 h-4" />
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
    </div>
  )
}

export function CategoryScrollSection() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-[#0F0F23] border-b border-slate-200 dark:border-white/5">
      <div className="container mx-auto px-4 overflow-hidden">
        {categories.map((category, idx) => (
          <CategoryRow key={idx} category={category} />
        ))}
      </div>
    </section>
  )
}
