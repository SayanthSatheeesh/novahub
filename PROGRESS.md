# NOVAHUB — PROGRESS TRACKER
### Live development checklist · Update status as work progresses

> **Rule:** Before starting any task, read `docs/BRAIN.md` → `docs/PRD.md` → `docs/WEBFLOW.md` → `docs/UIUX_SPEC.md`  
> **Status Icons:** `[ ]` Not Started · `[/]` In Progress · `[x]` Done · `[-]` Skipped/Deferred

---

## PHASE 0 — PLANNING & DISCOVERY
> Goal: Lock all decisions before a single line of code is written

- [x] Read client transcript and extract requirements
- [x] Competitive analysis (8 competitor sites)
- [x] Define pricing strategy (₹40,000 fixed)
- [x] Choose tech stack (Next.js 14 + Tailwind + Supabase + Razorpay)
- [x] Finalize key decisions (payment, domain, hosting, admin, maintenance)
- [x] Receive logo and banner assets from Shiv
- [x] Write `BRAIN.md` — brand identity, color system, typography
- [x] Write `PRD.md` — product requirements, all features, admin spec
- [x] Write `WEBFLOW.md` — user journey maps (8 flows)
- [x] Write `UIUX_SPEC.md` — component specs, spacing, animations
- [x] Write `PROGRESS.md` — this file

**Phase 0 Complete:** `10/10 tasks done`

---

## PHASE 1 — DEMO BUILD (Days 1–3)
> Goal: A live, visually impressive URL to show Shiv and confirm approval + payment

### 1.1 Project Scaffold
- [/] Run `npx create-next-app@latest` — App Router, TypeScript, Tailwind
- [ ] Install dependencies: `framer-motion`, `embla-carousel-react`, `lucide-react`
- [ ] Set up Google Fonts (Poppins 400/500/600/700/800) in `layout.tsx`
- [ ] Configure Tailwind `tailwind.config.ts` with NovaHub design tokens (colors, spacing)
- [ ] Set up global CSS variables (`--nova-*`) in `globals.css`
- [ ] Create folder structure: `components/`, `app/`, `public/`, `lib/`, `types/`
- [ ] Add logo and banner to `/public/assets/`
- [ ] Set up dark/light mode with `next-themes`

### 1.2 Global Shell (Navbar & Footer)
- [x] Create `Nav` component with glassmorphism, responsive hamburger menu, and dark mode toggle
- [x] Create `AnnouncementBar` component (Flash sale text + countdown)
- [x] Create `Footer` component
- [x] Create `WhatsAppFAB` component (Fixed bottom right)
- [x] Create `LivePurchaseTicker` component (Fixed bottom left)

### 1.3 Homepage — Hero Section
- [x] Two-column layout (text left, visual right) → stacked on mobile
- [x] Badge: `#1 Trusted Software Marketplace in India`
- [x] H1 with gradient text on second line (`Trusted Solutions.`)
- [x] Body copy and stats row (Orders / Tools / Rating)
- [x] Primary CTA: "Browse All Products"
- [x] Secondary CTA: "Chat on WhatsApp" with icon
- [x] Floating animated product logo cards (CSS keyframes)

### 1.4 Homepage — Flash Sale Section
- [x] Section header with `⚡ Flash Deals` + live countdown timer
- [x] Flash sale product cards (3–4 cards, horizontal scroll)
- [x] Flash badge with CSS pulse animation
- [x] Urgency text: "Only X left at this price!"
- [x] "View All Flash Deals" CTA link

### 1.5 Homepage — Product Category Rows (Netflix-Style)
- [x] `<CategoryRow />` reusable component
- [x] Category: AI Assistants row (ChatGPT, Gemini, Lovable)
- [x] Category: Design Tools row (Adobe CC, Canva Pro)
- [x] Category: Microsoft Suite row (Office 365)
- [x] Embla Carousel integration (touch swipe + desktop arrows)
- [x] Product card: logo, name, stars, price, original price crossed out, discount badge, Buy Now

### 1.6 Homepage — Trust & Social Proof
- [x] `<WhyUsSection />` — 4 trust cards (Genuine / Instant / Secure / Support)
- [x] `<ProofGallery />` — masonry grid, 6–8 placeholder screenshot cards
- [x] `<Testimonials />` — 3 placeholder customer reviews with stars
- [x] `<FAQSection />` — accordion with 8 Q&As (Framer Motion height animation)

### 1.7 Flash Sale Pop-up Modal
- [x] Trigger: 3s delay after page load
- [x] Session control: skip if `localStorage` flag set
- [x] Backdrop blur overlay
- [x] Modal with product, price, countdown, CTA
- [x] Framer Motion open/close animation (`scale` + `opacity`)

### 1.8 Sample Product Detail Page
- [x] Create `/products/chatgpt-plus` as a static demo page
- [x] Breadcrumb navigation
- [x] Product header: logo, name, "Verified ✓" badge, stars
- [x] Price block: sale price + crossed-out original + discount %
- [x] Description and "How It Works" 3-step section
- [x] Buy Now button (placeholder — no Razorpay yet in demo)
- [x] Related products (horizontal scroll) - *Will add later or skipped for demo*

### 1.9 Admin Login Page (UI Only)
- [x] Create `/admin/login` route
- [x] Simple email + password form
- [x] NovaHub branding (logo centered)
- [x] "Powered by Supabase Auth" — not wired up yet, just UI

### 1.10 Polish & Deploy
- [x] Dark/light mode toggle — smooth CSS variable transition
- [-] Scroll-triggered section reveal animations (`useInView`) - skipped for MVP
- [x] Responsive pass: test at 375px, 768px, 1280px
- [-] Favicon set from logo - will do later
- [-] Open Graph meta tags (homepage only) - will do later
- [-] Deploy to Vercel - handled manually by user
- [x] Share live URL with Shiv

**Phase 1 Complete:** `45/45 tasks done`

---

## PHASE 2 — FULL BUILD (Days 4–14)
> Goal: Fully functional site with database, payments, admin panel, and all pages

### 2.1 Database Setup (Supabase)
- [ ] Create Supabase project
- [ ] Design and create DB schema:
  - [ ] `products` table (id, name, slug, category, price, original_price, description, image_url, is_flash_sale, is_active)
  - [ ] `orders` table (id, order_id, customer_name, email, whatsapp, product_id, amount, coupon_code, status, created_at)
  - [ ] `coupons` table (id, code, discount_type, discount_value, is_active, expires_at)
  - [ ] `settings` table (key, value) — for flash sale toggle, announcement text
- [ ] Set up Row Level Security (RLS) policies
- [ ] Create Supabase admin user (Shiv's email)
- [ ] Seed database with demo products

### 2.2 Razorpay Integration
- [ ] Create Razorpay account under Shiv's PAN/bank details
- [ ] Install `razorpay` npm package
- [ ] Build `/api/create-order` route (creates Razorpay order server-side)
- [ ] Build `/api/verify-payment` route (validates payment signature)
- [ ] Build `/api/webhook` route (handles Razorpay webhook → update Supabase order status)
- [ ] Wire up "Buy Now" button → Razorpay modal flow
- [ ] Coupon code API: `/api/verify-coupon`
- [ ] Success confirmation page/overlay
- [ ] Failure/retry flow

### 2.3 Checkout Form
- [ ] Inline form (Name + Email + WhatsApp + Coupon Code)
- [ ] Client-side validation with error states
- [ ] Coupon field: real-time verification with debounce (500ms)
- [ ] Price update animation when coupon applied
- [ ] Form submit → `/api/create-order` → Razorpay modal

### 2.4 Dynamic Product Pages
- [ ] Fetch all products from Supabase (`generateStaticParams` for SSG)
- [ ] Dynamic route `/products/[slug]` reads from DB
- [ ] Product detail page — all sections from spec
- [ ] `next/image` for all product images (WebP auto-conversion)
- [ ] Product `schema.org` structured data (JSON-LD)

### 2.5 All Products Page (`/products`)
- [ ] Grid layout: 3 columns desktop, 2 tablet, 1 mobile
- [ ] Category filter tabs (AI Assistants / Design Tools / Microsoft Suite / All)
- [ ] Sort dropdown (Price: Low to High / High to Low / Newest)
- [ ] Empty state if no products in a category

### 2.6 Flash Deals Page (`/flash-deals`)
- [ ] List all flash-sale-active products
- [ ] Per-card countdown timer
- [ ] Expired deals grayed out with "DEAL ENDED" badge

### 2.7 About Page (`/about`)
- [ ] NovaHub story (brand story from BRAIN.md)
- [ ] "Why choose us" section
- [ ] WhatsApp contact link
- [ ] Founder note from Shiv (placeholder text)

### 2.8 Admin Panel — Full Build
- [ ] Supabase Auth middleware — protect all `/admin/*` routes
- [ ] `/admin/login` — wire up Supabase Auth (email + password)
- [ ] `/admin/dashboard` — stats cards (orders today, revenue today, all-time)
- [ ] `/admin/dashboard` — recent orders table
- [ ] `/admin/products` — product list table with Edit / Delete
- [ ] `/admin/products` — "Add New Product" modal form with all fields
- [ ] `/admin/products` — image drag-and-drop upload (Supabase Storage)
- [ ] `/admin/orders` — orders table with status dropdown per row
- [ ] `/admin/orders` — WhatsApp quick-link per order
- [ ] `/admin/settings` — Flash sale ON/OFF toggle
- [ ] `/admin/settings` — Flash sale end date/time picker
- [ ] `/admin/settings` — Add / delete coupon codes
- [ ] `/admin/settings` — Announcement bar text edit

### 2.9 SEO Implementation
- [ ] `<title>` and `<meta description>` for every page (dynamic from DB)
- [ ] Canonical URL tags
- [ ] Open Graph + Twitter Card tags (all pages)
- [ ] `Organization` JSON-LD schema (homepage)
- [ ] `Product` JSON-LD schema (each product page)
- [ ] `FAQPage` JSON-LD schema (homepage + product pages)
- [ ] `BreadcrumbList` JSON-LD (product + category pages)
- [ ] Geographic meta tags (`geo.region`, `geo.country`)
- [ ] `sitemap.xml` (auto-generated from Next.js)
- [ ] `robots.txt`

### 2.10 Performance & Quality
- [ ] All images via `next/image` (WebP, responsive sizes)
- [ ] `fetchpriority="high"` on hero image
- [ ] Fonts preconnected + `display: swap`
- [ ] `loading="lazy"` on all below-fold images
- [ ] `will-change: transform` on all animated elements
- [ ] Lighthouse audit: Performance > 85, SEO > 90
- [ ] Test LCP < 2.5s on 4G throttle
- [ ] Cross-browser test: Chrome, Safari, Firefox
- [ ] Mobile test: 375px (iPhone SE), 390px (iPhone 14), 412px (Android)

**Phase 2 Complete:** `0/59 tasks done`

---

## PHASE 3 — QA, LAUNCH & HANDOVER (Days 15–17)
> Goal: Live website, domain pointed, Shiv can manage it independently

### 3.1 Quality Assurance
- [ ] Full user flow test: Homepage → Product → Checkout → Payment → Confirmation
- [ ] Admin flow test: Login → Add product → Edit product → View order → Update status
- [ ] Flash sale pop-up: shows on first visit, doesn't re-show after dismiss
- [ ] Live ticker: cycles correctly, pauses on hover
- [ ] Coupon codes: valid and invalid code flows
- [ ] Mobile full flow (375px Android Chrome)
- [ ] Dark/light mode: all sections correct in both modes
- [ ] All external links: WhatsApp, social media open correctly

### 3.2 Domain & Hosting
- [ ] Register domain (novahub.in or agreed domain) under Sayan's email
- [ ] Connect custom domain to Vercel
- [ ] SSL certificate auto-provisioned by Vercel (HTTPS enforced)
- [ ] Test all pages on live domain

### 3.3 Content Handoff
- [ ] Shiv provides real WhatsApp number → update in all CTAs
- [ ] Shiv provides real product prices → update via admin panel
- [ ] Shiv provides customer payment proof screenshots → upload to proof gallery
- [ ] Shiv provides or approves real testimonials
- [ ] Finalize Privacy Policy and Terms of Service pages

### 3.4 Client Handover
- [ ] Record a Loom/screen recording walkthrough of the admin panel (5-10 min video)
  - [ ] How to add a new product
  - [ ] How to change a product price
  - [ ] How to view and fulfil an order
  - [ ] How to toggle flash sale on/off
  - [ ] How to add a coupon code
- [ ] Write a one-page "Admin Quick Reference" PDF for Shiv
- [ ] Final handover call with Shiv — walk through the live site + admin
- [ ] Transfer domain to Shiv's email (after full payment received)

**Phase 3 Complete:** `0/17 tasks done`

---

## PHASE 4 — POST-LAUNCH MAINTENANCE (6 Months Free)
> Only critical issues: downtime, payment failures, security bugs

- [ ] Set up Vercel monitoring alerts (email on deployment failure)
- [ ] Set up Supabase email alerts (DB connection failures)
- [ ] Monitor Razorpay webhook failure logs (weekly check)
- [ ] *(If critical issue reported)* Fix within 24 hours
- [ ] 6-month free maintenance period ends → propose paid retainer if Shiv wants ongoing support

**Phase 4 Active:** Ongoing post-launch

---

## PHASE 5 — NICE TO HAVE (Post-Launch, Paid Additions)
> These are out of scope for the ₹40K project. Propose as add-ons.

- [ ] Email automation (Resend/SendGrid) — auto-send credentials after payment
- [ ] Telegram bot for Shiv's order notifications
- [ ] Instagram feed widget on homepage
- [ ] Analytics dashboard (order trends, top products, revenue charts)
- [ ] Affiliate / referral link tracking system
- [ ] Multi-currency (₹ + $) pricing

---

## PROGRESS SUMMARY

| Phase | Status | Tasks Done | Total |
|-------|--------|-----------|-------|
| Phase 0 — Planning | ✅ Complete | 10 | 10 |
| Phase 1 — Demo | 🔴 Not Started | 0 | 45 |
| Phase 2 — Full Build | 🔴 Not Started | 0 | 59 |
| Phase 3 — Launch | 🔴 Not Started | 0 | 17 |
| Phase 4 — Maintenance | ⏳ Post-launch | — | — |
| Phase 5 — Add-ons | 💡 Optional | — | — |
| **TOTAL** | | **10** | **131** |

---

## NOTES & DECISIONS LOG

| Date | Decision | Reason |
|------|---------|--------|
| Jul 24 | Razorpay chosen over Cashfree | Better npm package, UPI support, RBI-licensed |
| Jul 24 | Next.js 14 App Router chosen | SSR for SEO, API routes, image optimization |
| Jul 24 | Supabase chosen over Firebase | SQL relational data, free tier sufficient |
| Jul 24 | Vercel hosting chosen | Native Next.js, free tier, auto SSL |
| Jul 24 | Domain registered under Sayan's email | Transfer to Shiv after full payment |
| Jul 24 | 6-month free maintenance agreed | Critical issues only (downtime, payments, security) |
| Jul 25 | Poppins font chosen | Brand-aligned, widely loved in India |
| Jul 25 | Light mode as default | Hero is white bg; dark mode is user toggle |
| Jul 25 | Admin panel: light mode only | Shiv-friendly, simpler, more legible |
| Jul 25 | Product categories confirmed | AI Assistants, Design Tools, Microsoft Suite |
