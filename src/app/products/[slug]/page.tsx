import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronRight, Star, ShieldCheck, Zap, MessageCircle } from "lucide-react"
import Link from "next/link"
import { getProductBySlug, products } from "@/lib/products"
import { notFound } from "next/navigation"
import { GuaranteeBadge } from "@/components/ui/guarantee-badge"

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const product = getProductBySlug(resolvedParams.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0F23]">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-8">
          <Link href="/" className="hover:text-purple-600">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/products" className="hover:text-purple-600">{product.category}</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-slate-900 dark:text-white font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Left Column - Product Details */}
          <div className="md:col-span-7 space-y-8">
            <div className="flex items-start gap-6">
              <div className={`w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-bold shrink-0 overflow-hidden shadow-sm ${product.iconBgClass}`}>
                {product.logoDomain ? (
                  <img 
                    src={`https://www.google.com/s2/favicons?sz=128&domain=${product.logoDomain}`} 
                    alt={`${product.name} logo`} 
                    className="w-14 h-14 object-contain"
                  />
                ) : (
                  product.iconText
                )}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{product.name}</h1>
                  <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold px-2 py-1 rounded-full flex items-center">
                    <CheckCircle2 className="w-3 h-3 mr-1" /> Verified
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <span className="flex items-center text-yellow-500 font-medium">
                    <Star className="w-4 h-4 fill-current mr-1" /> {product.rating} ({product.reviewsCount.toLocaleString()} reviews)
                  </span>
                  <span>•</span>
                  <span>{product.shortDescription}</span>
                </div>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
              <p className="text-lg">
                {product.description}
              </p>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-[#16163A]/50 rounded-2xl p-6 border border-slate-100 dark:border-white/5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">How it works</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center font-bold mb-3">1</div>
                  <h4 className="font-semibold mb-1">Purchase</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Complete secure checkout via Razorpay.</p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center font-bold mb-3">2</div>
                  <h4 className="font-semibold mb-1">Receive Info</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Check email & WhatsApp for instant credentials.</p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center font-bold mb-3">3</div>
                  <h4 className="font-semibold mb-1">Activate</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Log in and enjoy your premium subscription.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sticky Checkout Card */}
          <div className="md:col-span-5 relative">
            <div className="sticky top-24 bg-white dark:bg-[#1E1E4A] rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl p-8">
              
              <div className="flex items-center gap-2 text-red-500 mb-4">
                <Zap className="w-5 h-5 fill-current animate-pulse" />
                <span className="font-bold text-sm uppercase tracking-wide">Flash Sale Active</span>
              </div>
              
              <div className="mb-6">
                {/* Subscription anchor — shows official annual cost */}
                {product.officialAnnualPrice && product.officialBrand && (
                  <p className="text-xs text-muted-foreground mb-2">
                    Official price: ₹{product.officialAnnualPrice.toLocaleString("en-IN")}/yr via {product.officialBrand}
                  </p>
                )}
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white">₹{product.price.toLocaleString("en-IN")}</span>
                  <span className="text-lg line-through text-slate-400">₹{product.originalPrice.toLocaleString("en-IN")}</span>
                </div>
                <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  You save ₹{(product.originalPrice - product.price).toLocaleString("en-IN")} ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off)
                </div>
              </div>

              <Button className="w-full h-14 bg-gradient-to-r from-[#4FC3F7] to-[#7B2FBE] text-white text-lg font-bold rounded-xl border-0 hover:opacity-90 transition-opacity mb-4">
                Buy Now
              </Button>
              
              <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-6">
                Secure payment powered by Razorpay
              </p>
              
              {/* WhatsApp delivery promise */}
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 mb-4">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Instant WhatsApp Delivery</span>
                  {" "}— Credentials sent to your WhatsApp in under 5 minutes after payment.
                </p>
              </div>

              {/* Guarantee badge (page variant) */}
              <GuaranteeBadge variant="page" days={product.guaranteeDays} />

              <div className="space-y-3 pt-5 border-t border-slate-100 dark:border-slate-800 mt-5">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <ShieldCheck className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-medium">100% Genuine License</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Zap className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium">Instant Delivery to Email &amp; WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-background/95 backdrop-blur-md border-t border-border shadow-xl">
        <div className="flex items-center gap-3 container mx-auto">
          <div className="shrink-0">
            <p className="text-xs text-muted-foreground line-through leading-tight">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </p>
            <p className="text-lg font-black text-foreground leading-tight">
              ₹{product.price.toLocaleString("en-IN")}
            </p>
          </div>
          <Button className="flex-1 h-12 rounded-xl font-semibold bg-primary text-primary-foreground shadow-lg">
            Get Access Now →
          </Button>
        </div>
      </div>
    </div>
  )
}
