"use client"

import { useState } from "react"
import { HeroSection } from "@/components/home/hero-section"
import { LogoCloud } from "@/components/home/logo-cloud"
import { FlashSaleSection } from "@/components/home/flash-sale-section"
import { CategoryScrollSection } from "@/components/home/category-scroll"
import { TrustGuaranteeSection } from "@/components/home/trust-guarantee"
import { FeaturesGridSection } from "@/components/home/features-grid"
import { WhyUsSection } from "@/components/home/why-us-section"
import { ProofGallery } from "@/components/home/proof-gallery"
import { TestimonialsSection } from "@/components/home/testimonials"
import { FAQSection } from "@/components/home/faq-section"
import { FloatingCouponBadge } from "@/components/home/floating-coupon-badge"
import { MultiCouponModal } from "@/components/home/multi-coupon-modal"
import { FirstTimeDiscountModal } from "@/components/home/first-time-modal"

export default function Home() {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <LogoCloud />
      <FlashSaleSection />
      <CategoryScrollSection />
      <TrustGuaranteeSection />
      <FeaturesGridSection />
      <WhyUsSection />
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
