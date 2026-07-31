"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Star, ShieldCheck, MessageCircle, ArrowRight } from "lucide-react"
import { UrgencyBadge } from "@/components/ui/urgency-badge"
import { cn } from "@/lib/utils"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
  className?: string
  variant?: "standard" | "compact" | "featured"
}

export function ProductCard({
  product,
  className,
  variant = "standard",
}: ProductCardProps) {
  const savingsAmount = product.originalPrice - product.price
  const discountPercent = Math.round((savingsAmount / product.originalPrice) * 100)

  return (
    <Link href={`/products/${product.slug}`} className={cn("block group", className)}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative bg-card border border-border rounded-2xl overflow-hidden h-full flex flex-col hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-200"
      >
        {/* Top-left: Urgency badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <UrgencyBadge type={product.badge} dealEndsAt={product.dealEndsAt} />
          </div>
        )}

        {/* Top-right: Category pill */}
        <div className="absolute top-3 right-3 z-10">
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-background/80 border border-border/80 backdrop-blur-sm text-muted-foreground">
            {product.category}
          </span>
        </div>

        {/* Logo area */}
        <div className="pt-10 pb-3 px-5 flex justify-center">
          <div
            className={cn(
              "w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black shadow-md transition-transform duration-200 group-hover:scale-105 overflow-hidden",
              product.iconBgClass
            )}
          >
            {product.logoDomain ? (
              <img 
                src={`https://www.google.com/s2/favicons?sz=128&domain=${product.logoDomain}`} 
                alt={`${product.name} logo`} 
                className="w-10 h-10 object-contain"
              />
            ) : (
              product.iconText
            )}
          </div>
        </div>

        {/* Content */}
        <div className="px-5 pb-5 flex flex-col flex-1">
          {/* Product name */}
          <h3 className="font-semibold text-base text-foreground line-clamp-1 mb-0.5">
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-xs text-muted-foreground line-clamp-1 mb-2">
            {product.shortDescription}
          </p>

          {/* Star rating + reviews */}
          <div className="flex items-center gap-1.5 mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold text-foreground">
              {product.rating}
            </span>
            <span className="text-xs text-muted-foreground">
              ({product.reviewsCount.toLocaleString("en-IN")} orders)
            </span>
          </div>

          {/* Price block — pushed to bottom */}
          <div className="mt-auto">
            {/* Subscription anchor text */}
            {product.officialAnnualPrice && product.officialBrand && (
              <p className="text-[10px] text-muted-foreground mb-1 leading-snug">
                Official price: ₹
                {product.officialAnnualPrice.toLocaleString("en-IN")}/yr via{" "}
                {product.officialBrand}
              </p>
            )}

            {/* Current price + strike-through + discount badge */}
            <div className="flex items-center gap-2 flex-wrap mb-0.5">
              <span className="text-2xl font-black text-foreground tracking-tight">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              <span className="text-sm line-through text-muted-foreground">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-[10px] font-black text-white bg-red-500 px-1.5 py-0.5 rounded-md leading-tight">
                -{discountPercent}% OFF
              </span>
            </div>

            {/* Savings green text */}
            <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
              You save ₹{savingsAmount.toLocaleString("en-IN")}
            </p>

            {/* WhatsApp delivery + Guarantee row */}
            <div className="flex items-center gap-3 text-[10px] text-muted-foreground mb-3 flex-wrap">
              <span className="flex items-center gap-1">
                <MessageCircle className="w-3 h-3 text-[#25D366]" />
                Instant WhatsApp
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-blue-500" />
                {product.guaranteeDays}-Day Guarantee
              </span>
            </div>

            {/* CTA — fades in on hover */}
            <div
              className={cn(
                "flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-semibold transition-all duration-200",
                "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
              )}
            >
              Get Access <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
