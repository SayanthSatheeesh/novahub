"use client"

import { useState } from "react"
import { HeroSection } from "@/components/home/hero-section"
import { FlashSaleSection } from "@/components/home/flash-sale-section"
import { CategoryScrollSection } from "@/components/home/category-scroll"
import { FeaturesGridSection } from "@/components/home/features-grid"
import dynamic from "next/dynamic"
import { FloatingCouponBadge } from "@/components/home/floating-coupon-badge"

const ProofGallery = dynamic(() => import("@/components/home/proof-gallery").then(mod => mod.ProofGallery))
const TestimonialsSection = dynamic(() => import("@/components/home/testimonials").then(mod => mod.TestimonialsSection))
const FAQSection = dynamic(() => import("@/components/home/faq-section").then(mod => mod.FAQSection))
const MultiCouponModal = dynamic(() => import("@/components/home/multi-coupon-modal").then(mod => mod.MultiCouponModal))
const FirstTimeDiscountModal = dynamic(() => import("@/components/home/first-time-modal").then(mod => mod.FirstTimeDiscountModal))

export default function Home() {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FlashSaleSection />
      <CategoryScrollSection />
      <FeaturesGridSection />
      <ProofGallery />
      <TestimonialsSection />
      <FAQSection />

      {/* Floating Action Badge & Modals */}
      <FloatingCouponBadge onClick={() => setIsCouponModalOpen(true)} />
      <MultiCouponModal isOpen={isCouponModalOpen} onClose={() => setIsCouponModalOpen(false)} />
      <FirstTimeDiscountModal />
    </div>
  )
}
