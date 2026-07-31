"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/ui/product-card"
import { BudgetPicker } from "@/components/ui/budget-picker"
import { Package } from "lucide-react"

export default function ProductsPage() {
  const [maxPrice, setMaxPrice] = useState<number | null>(null)

  const filteredProducts = useMemo(() => {
    if (maxPrice === null) return products
    return products.filter((p) => p.price <= maxPrice)
  }, [maxPrice])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl">

        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3 tracking-tight">
            All Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Genuine AI tools, creative suites, and developer platforms at up to{" "}
            <span className="font-bold text-emerald-600 dark:text-emerald-400">75% off</span>{" "}
            official prices. Instant WhatsApp delivery.
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} available
          </p>
        </div>

        {/* Budget Picker Filter Strip */}
        <div className="flex justify-center mb-8">
          <BudgetPicker onFilter={setMaxPrice} />
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.35, ease: "easeOut" }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
              <Package className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">No products in this range</h3>
            <p className="text-sm text-muted-foreground">
              Try selecting a higher budget, or{" "}
              <button
                onClick={() => setMaxPrice(null)}
                className="text-primary underline underline-offset-2 hover:no-underline"
              >
                view all products
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
