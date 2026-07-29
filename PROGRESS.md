# NOVAHUB — PROGRESS TRACKER
### Live development checklist · Update status as work progresses

> **Rule:** Before starting any task, read `docs/BRAIN.md` ? `docs/PRD.md` ? `docs/WEBFLOW.md` ? `docs/UIUX_SPEC.md`
> **Status:** `[ ]` Not Started · `[/]` In Progress · `[x]` Done · `[-]` Skipped/Deferred

---

## PHASE 0 — PLANNING & DISCOVERY
> Goal: Lock all decisions before a single line of code is written

- [x] Read client transcript and extract requirements
- [x] Competitive analysis (8 competitor sites)
- [x] Define pricing strategy (?40,000 fixed)
- [x] Choose tech stack (Next.js 16 App Router + Tailwind v4 + shadcn + Framer Motion)
- [x] Finalize key decisions (payment, domain, hosting, admin, maintenance)
- [x] Receive logo and banner assets from Shiv
- [x] Write `BRAIN.md` — brand identity, color system, typography
- [x] Write `PRD.md` — product requirements, all features, admin spec
- [x] Write `WEBFLOW.md` — user journey maps (8 flows)
- [x] Write `UIUX_SPEC.md` — component specs, spacing, animations
- [x] Write `PROGRESS.md` — this file
- [x] 6-site design audit (Amazon IN, Flipkart, Xbox, GullySports, Snitch, Urban Monkey) ? `design_audit_report.md`

**Phase 0 Complete:** `12/12 tasks done`

---

## PHASE 1 — DEMO BUILD
> Goal: A live, visually impressive URL to show Shiv

### 1.1 Project Scaffold
- [x] Create Next.js 16 App Router project (TypeScript, Tailwind v4)
- [x] Install: framer-motion, embla-carousel-react, embla-carousel-wheel-gestures, lucide-react, next-themes, shadcn/ui
- [x] Set up Outfit font (Google Fonts) in `layout.tsx`
- [x] Configure design tokens (CSS variables) in `globals.css`
- [x] Create folder structure: `src/app/`, `src/components/home/`, `src/components/layout/`, `src/components/ui/`, `src/lib/`
- [x] Set up dark/light mode with next-themes

### 1.2 Global Shell
- [x] `Nav` — sticky, responsive hamburger, dark mode toggle, WhatsApp CTA
- [x] `AnnouncementBar` — **Urban Monkey style:** black bg, Indigo border-bottom, CSS marquee
- [x] `Footer` — logo, links, WhatsApp, social placeholders, legal
- [x] `WhatsAppFAB` — fixed bottom-right, pulse ring animation
- [x] `LivePurchaseTicker` — fixed bottom-left, fake purchase data cycling 4s

### 1.3 Homepage — Hero Section
- [x] Two-column layout (text left, visual right) ? stacked on mobile
- [x] Badge: `? #1 Trusted Software Marketplace in India`
- [x] H1 with gradient text on second line (`Trusted Solutions.`)
- [x] Body copy + stats row (Orders / Tools / Rating)
- [x] Primary CTA: "Browse All Products"
- [x] Secondary CTA: "Chat on WhatsApp" with icon
- [x] Floating animated product logo cards (CSS keyframes — 8+ logos)
- [x] Bottom brand marquee strip (logo cloud)

### 1.4 Homepage — Flash Sale Section
- [x] Section header + live countdown timer
- [x] Embla carousel — touch + **mouse wheel scroll** (embla-wheel-gestures)
- [x] Flash sale product cards (horizontal scroll, 3-4 cards)
- [x] Flash badge with CSS pulse animation
- [x] Urgency text: "Only X left at this price!"
- [x] "View All Flash Deals" CTA
- [x] **Framer Motion scroll-triggered fade-up** (Xbox pattern, 600ms, 80ms stagger)
- [x] **Flipkart green rating pill** (#388E3C) on each card
- [x] **Cinematic card image hover** scale(1.04) 500ms cubic-bezier
- [x] **Card lift hover** -translate-y-1.5 shadow-2xl

### 1.5 Homepage — Category Rows (Embla Carousel)
- [x] AI Assistants row (ChatGPT, Gemini, Lovable)
- [x] Design Tools row (Adobe CC, Canva Pro)
- [x] Microsoft Suite row (Office 365)
- [x] Embla + wheel gestures on all rows
- [x] Product card: overlapping logo, name, rating pill, price, discount badge, Buy Now
- [x] Snitch-style uppercase tracked category label headers
- [x] Framer Motion scroll-reveal + stagger on each row
- [x] Google Favicon API for all logos (NOT clearbit)

### 1.6 Homepage — Trust & Social Proof
- [x] `WhyUsSection` — 4 trust cards (Genuine / Instant / Secure / Support)
- [x] `ProofGallery` — placeholder screenshot cards
- [x] `Testimonials` — 3 placeholder reviews with stars
- [x] `FAQSection` — accordion with 8 Q&As (Framer Motion height animation)

### 1.7 Flash Sale Pop-up Modal
- [x] 3s delay trigger after page load
- [x] localStorage session control
- [x] Backdrop blur overlay
- [x] Framer Motion scale + opacity animation

### 1.8 First-Time Visitor Modal
- [x] Coupon welcome modal on first visit
- [x] Multi-coupon modal system

### 1.9 Product Detail Page
- [x] `/products/chatgpt-plus` — static demo page
- [x] Breadcrumb, product header, price block, description, "How It Works"
- [x] Buy Now button (UI only — no Razorpay yet)

### 1.10 Admin Login Page
- [x] `/admin/login` route with email + password form
- [x] NovaHub branding centered

### 1.11 Polish & UI Uplift (Design Audit Applied)
- [x] Announcement bar ? Urban Monkey marquee style (black, Indigo border)
- [x] Product card image ? Xbox cinematic hover scale(1.04) 500ms
- [x] Product card ? Flipkart rating pill #388E3C
- [x] Product card ? lift hover -translate-y-1.5 + shadow-2xl
- [x] Section reveals ? Framer Motion fade-up 600ms + 80ms stagger
- [x] Category subheadings ? Snitch uppercase tracking-[0.15em]
- [x] globals.css ? background #F8FAFC (Flipkart-style off-white)
- [x] ALL logo images ? Google Favicon API (clearbit removed everywhere)
- [x] Dark mode ? verified working on all components

### 1.12 Mobile & Responsive
- [x] Responsive pass: tested at 375px, 768px, 1280px
- [x] Touch-swipe carousel working on mobile
- [-] Favicon from logo — deferred
- [-] OG meta tags — deferred to Phase 2
- [-] Deploy to Vercel — handled by user

**Phase 1 Complete:** ? All tasks done

---

## PHASE 1.5 — UI UPLIFT (Design Audit ? Pending Components)
> Design audit applied to flash-sale and category sections. These components still need the treatment:

- [ ] `nav.tsx` — Add scroll-triggered glassmorphism (transparent ? backdrop-blur on scroll)
- [ ] `nav.tsx` — Add underline-slide hover on nav links
- [ ] Primary CTA buttons — Add Urban Monkey color-invert hover (bg?transparent, border visible)
- [ ] `testimonials.tsx` — Add card border, scroll reveal stagger, avatar gradient
- [ ] `trust-guarantee.tsx` — Add gradient top-stripe per card, scroll reveal stagger
- [ ] `why-us-section.tsx` — Add icon color system (green/blue/purple/orange), scroll reveal
- [ ] `proof-gallery.tsx` — Add masonry-style grid polish, placeholder cards
- [ ] `faq-section.tsx` — Add scroll reveal, chevron rotation animation
- [ ] `first-time-modal.tsx` — Add urgency styling (Flipkart urgency pattern)
- [ ] `multi-coupon-modal.tsx` — Add visual polish
- [ ] `footer.tsx` — Add gradient accent on footer top border
- [ ] `hero-section.tsx` — Review and polish (badge style, stat numbers)

---

## PHASE 2 — FULL BUILD
> Goal: Functional site with DB, payments, admin, all pages

### 2.1 Database Setup (Supabase)
- [ ] Create Supabase project
- [ ] `products` table
- [ ] `orders` table
- [ ] `coupons` table
- [ ] `settings` table (flash sale toggle, announcement text)
- [ ] Row Level Security (RLS) policies
- [ ] Seed with demo products

### 2.2 Razorpay Integration
- [ ] Create Razorpay account (Shiv's PAN/bank)
- [ ] `/api/create-order` route
- [ ] `/api/verify-payment` route
- [ ] `/api/webhook` ? Supabase order update
- [ ] Wire "Buy Now" ? Razorpay flow
- [ ] `/api/verify-coupon` route
- [ ] Success/failure UX

### 2.3 Checkout Form
- [ ] Inline form (Name + Email + WhatsApp + Coupon)
- [ ] Client-side validation
- [ ] Real-time coupon verification (500ms debounce)
- [ ] Price animation on coupon apply

### 2.4 Dynamic Product Pages
- [ ] Supabase fetch ? `generateStaticParams` for SSG
- [ ] Dynamic `/products/[slug]`
- [ ] `next/image` for all product images
- [ ] Product `schema.org` JSON-LD

### 2.5 All Products Page (`/products`)
- [ ] Grid: 3 cols desktop, 2 tablet, 1 mobile
- [ ] Category filter tabs
- [ ] Sort dropdown

### 2.6 Flash Deals Page (`/flash-deals`)
- [ ] List all flash-sale-active products
- [ ] Per-card countdown
- [ ] Expired deals grayed out

### 2.7 About Page (`/about`)
- [ ] Brand story
- [ ] WhatsApp contact

### 2.8 Admin Panel — Full Build
- [ ] Supabase Auth middleware (protect `/admin/*`)
- [ ] `/admin/login` — wire Supabase Auth
- [ ] `/admin/dashboard` — stats + recent orders table
- [ ] `/admin/products` — table + Add/Edit/Delete modal
- [ ] `/admin/products` — image upload (Supabase Storage)
- [ ] `/admin/orders` — status dropdown + WhatsApp quick-link
- [ ] `/admin/settings` — flash sale toggle, timer, coupon CRUD, announcement text

### 2.9 SEO
- [ ] Dynamic `<title>` and `<meta description>` per page
- [ ] Canonical URLs
- [ ] OG + Twitter Card tags
- [ ] `Organization` JSON-LD (homepage)
- [ ] `Product` JSON-LD (product pages)
- [ ] `FAQPage` JSON-LD
- [ ] `BreadcrumbList` JSON-LD
- [ ] Geographic meta tags
- [ ] `sitemap.xml` + `robots.txt`

### 2.10 Performance & Quality
- [ ] All images via `next/image` (WebP, responsive)
- [ ] `fetchpriority="high"` on hero
- [ ] Fonts preconnected + `display:swap`
- [ ] `loading="lazy"` below-fold images
- [ ] `will-change: transform` on animated elements
- [ ] Lighthouse: Performance > 85, SEO > 90
- [ ] LCP < 2.5s on 4G throttle
- [ ] Cross-browser: Chrome, Safari, Firefox
- [ ] Mobile: 375px, 390px, 412px

**Phase 2 Complete:** `0/59 tasks done`

---

## PHASE 3 — QA, LAUNCH & HANDOVER

### 3.1 QA
- [ ] Full user flow: Homepage ? Product ? Checkout ? Payment ? Confirmation
- [ ] Admin flow: Login ? Add product ? Edit ? View order ? Update status
- [ ] Flash sale popup: shows once, never re-shows
- [ ] Live ticker cycles correctly
- [ ] Coupon flows (valid + invalid)
- [ ] Mobile full flow (375px Android Chrome)
- [ ] Dark/light mode: all sections correct
- [ ] All external links working (WhatsApp, social)

### 3.2 Domain & Hosting
- [ ] Register domain under Sayan's email
- [ ] Connect to Vercel
- [ ] SSL auto-provisioned
- [ ] Test on live domain

### 3.3 Content Handoff
- [ ] Shiv's real WhatsApp number ? update all CTAs
- [ ] Real product prices ? admin panel
- [ ] Real payment proof screenshots ? proof gallery
- [ ] Real testimonials
- [ ] Finalize Privacy Policy + Terms

### 3.4 Client Handover
- [ ] Loom walkthrough video (admin panel)
- [ ] Admin Quick Reference PDF for Shiv
- [ ] Final handover call
- [ ] Transfer domain after full payment

**Phase 3 Complete:** `0/17 tasks done`

---

## PROGRESS SUMMARY

| Phase | Status | Done | Total |
|-------|--------|------|-------|
| Phase 0 — Planning | ? Complete | 12 | 12 |
| Phase 1 — Demo Build | ? Complete | 45+ | 45 |
| Phase 1.5 — UI Uplift | ?? In Progress | 8 | 20 |
| Phase 2 — Full Build | ?? Not Started | 0 | 59 |
| Phase 3 — Launch | ?? Not Started | 0 | 17 |
| Phase 4 — Maintenance | ? Post-launch | — | — |
| **TOTAL** | | | **153** |

---

## NOTES & DECISIONS LOG

| Date | Decision | Reason |
|------|---------|--------|
| Jul 24 | Razorpay chosen | Better npm package, UPI support, RBI-licensed |
| Jul 24 | Next.js App Router | SSR for SEO, API routes, image optimization |
| Jul 24 | Supabase over Firebase | SQL relational, free tier sufficient |
| Jul 24 | Vercel hosting | Native Next.js, free tier, auto SSL |
| Jul 24 | 6-month free maintenance | Critical issues only |
| Jul 25 | Outfit font chosen | More modern than Poppins, excellent at all weights. BRAIN.md originally said Poppins — corrected. |
| Jul 25 | Light mode as default | Hero is white bg; dark mode is user toggle |
| Jul 25 | Admin: light mode only | Shiv-friendly, more legible |
| Jul 25 | clearbit logo API removed | Rate-limited/blocked — replaced with Google Favicon API |
| Jul 25 | Next.js version is 16.2.11 | BRAIN.md originally said "14" — corrected |
| Jul 25 | Tailwind v4 CSS-first | No tailwind.config.js — tokens in globals.css only |
| Jul 25 | Design audit: 6 sites | Amazon IN, Flipkart, Xbox, GullySports, Snitch, Urban Monkey |
| Jul 25 | Urban Monkey marquee bar | Applied to announcement-bar.tsx — black + Indigo border |
| Jul 25 | Xbox card hover | Applied to flash-sale + category-scroll — scale(1.04) 500ms |
| Jul 25 | Flipkart rating pill | Applied to all product cards — #388E3C |
| Jul 25 | Snitch uppercase tracking | Applied to category subheadings |
| Jul 25 | Background #F8FAFC | Applied in globals.css light mode |
