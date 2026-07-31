"use client"

import { useState } from "react"
import { HeroSection } from "@/components/home/hero-section"
import { TrustBar } from "@/components/home/trust-bar"
import { FlashSaleSection } from "@/components/home/flash-sale-section"
import { CategoryScrollSection } from "@/components/home/category-scroll"
import { FeaturesGridSection } from "@/components/home/features-grid"
import { FloatingCouponBadge } from "@/components/home/floating-coupon-badge"
import dynamic from "next/dynamic"

const ProofGallery = dynamic(() =>
  import("@/components/home/proof-gallery").then((m) => m.ProofGallery)
)
const TestimonialsSection = dynamic(() =>
  import("@/components/home/testimonials").then((m) => m.TestimonialsSection)
)
const FAQSection = dynamic(() =>
  import("@/components/home/faq-section").then((m) => m.FAQSection)
)
const MultiCouponModal = dynamic(() =>
  import("@/components/home/multi-coupon-modal").then((m) => m.MultiCouponModal)
)
const FirstTimeDiscountModal = dynamic(() =>
  import("@/components/home/first-time-modal").then((m) => m.FirstTimeDiscountModal)
)

export default function Home() {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero with email capture */}
      <HeroSection />

      {/* 2. Trust Bar — credibility gate placed directly below hero */}
      <TrustBar />

      {/* 3. Flash Sale — benefits from trust established above */}
      <FlashSaleSection />

      {/* 4. Category Scroll */}
      <CategoryScrollSection />

      {/* 5. Best Sellers Grid */}
      <FeaturesGridSection />

      {/* 6. Social Proof Gallery */}
      <ProofGallery />

      {/* 7. Testimonials */}
      <TestimonialsSection />

      {/* 8. FAQ */}
      <FAQSection />

      {/* Floating overlays */}
      <FloatingCouponBadge onClick={() => setIsCouponModalOpen(true)} />
      <MultiCouponModal
        isOpen={isCouponModalOpen}
        onClose={() => setIsCouponModalOpen(false)}
      />
      <FirstTimeDiscountModal />
    </div>
  )
}
