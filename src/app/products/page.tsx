import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronRight, Star } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/products"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0F23]">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Browse All Products
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get genuine AI tools, creative suites, and developer platforms at unbeatable prices. Instant delivery via email and WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`} className="group outline-none">
              <div className="bg-white dark:bg-[#1E1E4A] rounded-2xl p-6 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 h-full flex flex-col focus-visible:ring-2 focus-visible:ring-primary">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold ${product.iconBgClass}`}>
                    {product.iconText}
                  </div>
                  <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold px-2 py-1 rounded-full flex items-center">
                    <CheckCircle2 className="w-3 h-3 mr-1" /> Verified
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">
                  {product.description.slice(0, 100)}...
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="text-sm text-slate-400 line-through mb-0.5">₹{product.originalPrice.toLocaleString()}</div>
                    <div className="text-xl font-extrabold text-slate-900 dark:text-white">₹{product.price.toLocaleString()}</div>
                  </div>
                  <Button variant="outline" className="rounded-full font-semibold group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                    View Details
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
