# NOVAHUB — PRODUCT REQUIREMENTS DOCUMENT (PRD)
### Version 1.1 · Read BRAIN.md before this document

> **Updated:** Phase 1 Demo Build is complete. Font is **Outfit** (not Poppins). Framework is **Next.js 16.2.11**. Styling is **Tailwind v4 CSS-first** (no tailwind.config.js). All logo images use Google Favicon API (clearbit removed).

---

## 0. DOCUMENT HIERARCHY

```
BRAIN.md      → Brand identity, colors, fonts, philosophy
PRD.md        → What the product does (you are here)
UIUX_SPEC.md  → How it looks and feels
WEBFLOW.md    → User journey maps + interaction flows
```

---

## 1. PRODUCT OVERVIEW

### 1.1 What is NovaHub?

NovaHub is a B2C e-commerce website that sells discounted digital software subscriptions to Indian customers. The business model is:
- **Buy** bulk/shared software licenses from distributors
- **Resell** individual subscription slots at a significant discount vs. retail
- **Deliver** credentials/license keys via automated email or WhatsApp after payment

### 1.2 Success Metrics (Post-Launch)

| Metric | Target |
|--------|--------|
| Homepage → Product Page conversion | > 25% |
| Product Page → Checkout conversion | > 15% |
| Checkout → Purchase completion | > 70% |
| Mobile bounce rate | < 40% |
| Average page load time | < 2.5s |
| Monthly organic traffic (6 months) | 500+ sessions |

---

## 2. PHASE 1: DEMO BUILD (Days 1–3)

### Goal: A working, visually impressive site to show Shiv and get full approval + payment

### 2.1 Pages Required for Demo

| Page | Priority | Notes |
|------|---------|-------|
| Homepage | 🔴 Critical | All key sections |
| Products listing page | 🔴 Critical | Netflix-scroll by category |
| Product detail page | 🔴 Critical | One sample product |
| Checkout modal (Razorpay placeholder) | 🟡 Important | Just show the modal flow |
| Admin login page | 🟡 Important | Simple, to prove it exists |

### 2.2 Homepage Sections (Priority-Ordered)

#### Section 1: Announcement Bar (Top)
- **Content:** Scrolling marquee or static bar with a flash sale message
- **Example:** `⚡ FLASH SALE: ChatGPT Plus at ₹999 — 60% OFF · Ends in 23:45:12`
- **Behavior:** Countdown timer updates in real-time
- **Style:** Dark navy bar with gradient-colored text or icon accents

#### Section 2: Navigation
- **Left:** NovaHub logo (PNG from client asset)
- **Center:** Links — Home | Products | Flash Deals | About
- **Right:** WhatsApp icon button + Theme toggle (dark/light) + optional cart icon
- **Behavior:** Sticky on scroll. Glassmorphism effect on scroll (backdrop-blur)
- **Mobile:** Hamburger menu → full-screen slide-down menu

#### Section 3: Hero Section
- **Layout:** Two-column on desktop (text left, visual right), single column stacked on mobile
- **Left/Top:**
  - Badge: `⭐ #1 Trusted Software Marketplace in India`
  - H1: `Smart Software.` + `Trusted Solutions.` (gradient text on second line)
  - Body copy: `Get genuine AI tools, design software & Microsoft products at up to 75% off retail price.`
  - Stats row: `10,000+ Orders` | `50+ Tools` | `4.9★ Rating`
  - CTA Button 1: "Browse All Products" → `/products`
  - CTA Button 2: "Chat on WhatsApp" → WhatsApp link
- **Right/Bottom:**
  - Animated floating product logo cards (5-6 logos orbiting/floating)
  - Products: ChatGPT, Gemini, Adobe, Office 365, Canva, Lovable
  - Animation: CSS keyframes — cards float in and out with scale + opacity

#### Section 4: Live Purchase Notification (Persistent Floating Element)
- **Position:** Bottom-left corner, floating above page content
- **Content:** `🔔 Priya from Delhi just bought ChatGPT Plus · 2 min ago`
- **Behavior:** Cycles through 5-8 fake purchase entries. 4-second interval. Slides in from left, fades out. Pauses on hover.
- **Data (demo):** Hardcoded array of fake purchase objects: `{name, city, product, time}`

#### Section 5: Flash Sale Section
- **Header:** `⚡ Flash Deals` + Countdown timer: `Ends in HH:MM:SS`
- **Layout:** Horizontal scroll of 3-4 product cards in a special "flash sale" styling
- **Card additions vs. normal:** Red `FLASH SALE` badge, animated pulse on the price, urgency text `Only X left!`
- **CTA:** "View All Flash Deals" → `/flash-deals`

#### Section 6: Product Categories (Netflix-Style Horizontal Scroll)
- **Structure:**
  ```
  ┌── AI Assistants ──────── See All →
  │  [ChatGPT] [Gemini] [Lovable]
  
  ┌── Design Tools ───────── See All →
  │  [Adobe CC] [Canva Pro]
  
  ┌── Microsoft Suite ────── See All →
  │  [Office 365]
  ```
- **Each row:** Category title left + "See All" link right + horizontally scrollable card row
- **Cards:** Product logo + name + price (with crossed-out original) + discount badge + "Buy Now" button
- **Scroll:** Touch-drag on mobile. Arrow buttons on desktop (Embla Carousel)

#### Section 7: Why Choose NovaHub (Trust Section)
- **Layout:** 3-4 icon cards in a row
- **Cards:**
  1. ✅ 100% Genuine Licenses — Verified and tested before delivery
  2. ⚡ Instant Delivery — Credentials sent right after payment confirmed
  3. 🔒 Secure Payment — Powered by Razorpay (RBI licensed)
  4. 💬 24/7 WhatsApp Support — Real human, not a bot
- **Style:** Dark cards with gradient icon borders or gradient icon colors

#### Section 8: Payment Proof Gallery (Trust Signals)
- **Title:** `Real Customers. Real Results.`
- **Layout:** Masonry grid of 6-8 screenshots (placeholder cards for demo, real ones post-demo)
- **Each item:** Screenshot of WhatsApp/Telegram delivery confirmation or Razorpay payment success
- **Caption under each:** Customer first name + what they bought

#### Section 9: Testimonials
- **Title:** `What Our Customers Say`
- **Layout:** 3 testimonial cards in a row (2 on tablet, 1 on mobile)
- **Content (demo placeholders):**
  ```
  "Got my Adobe CC within 2 minutes of payment. Absolutely genuine!"
  — Arjun K., Graphic Designer, Pune

  "Finally an affordable way to get ChatGPT Plus. Highly recommend!"
  — Sneha R., Student, Bangalore

  "Been using for 6 months now. Never had an issue."
  — Rahul M., Freelancer, Mumbai
  ```
- **Design:** Stars (5/5) + avatar placeholder + name + role

#### Section 10: FAQ Section
- **Title:** `Frequently Asked Questions`
- **Format:** Accordion — click to expand/collapse
- **Questions (minimum 6):**
  1. Are these subscriptions genuine and legal?
  2. How will I receive my subscription after payment?
  3. What payment methods do you accept?
  4. Is my payment secure?
  5. What if the subscription stops working?
  6. Can I get a refund?
  7. How long does delivery take?
  8. Do you offer bulk discounts?

#### Section 11: Footer
- **Logo** + tagline
- **Links:** Products | Flash Deals | About | Contact | Privacy Policy | Terms of Service
- **Contact:** WhatsApp link (click to open WhatsApp chat)
- **Social:** Instagram / Telegram icons (placeholder for now)
- **Legal notice:** `© 2025 NovaHub. All rights reserved. Prices are in INR.`
- **Trust badges:** Razorpay secured | SSL encrypted

#### Section 12: Flash Sale Pop-up (Modal)
- **Trigger:** 3 seconds after page load (first visit only — use localStorage)
- **Content:**
  - `⚡ LIMITED TIME OFFER`
  - Product name + image + price + countdown timer
  - CTA: "Grab This Deal" → product page
  - Close: X button + "No thanks" text link
- **Animation:** Scale from 0.8 → 1.0 with opacity 0 → 1 (Framer Motion)
- **Backdrop:** `backdrop-filter: blur(8px)` + dark overlay

---

## 3. PHASE 2: FULL BUILD (Days 4–14)

### 3.1 Product Detail Page (`/products/[slug]`)

**Sections:**
- Breadcrumb: Home > Products > ChatGPT Plus
- Product header: Logo + Name + Rating stars + `Verified ✓`
- Price block: `₹999` / `₹2,499 (60% off)` + Razorpay CTA
- Product description: What it is, what's included, delivery method
- "How it works" steps: Pay → Receive credentials → Activate → Start using
- Related products (horizontal scroll)
- FAQ (product-specific)

**Checkout Flow (Razorpay):**
1. User clicks "Buy Now"
2. Quick form appears (inline, not a new page):
   - Name (required)
   - Email (required — for credential delivery)
   - WhatsApp number (required — backup delivery)
   - Coupon code field (optional)
3. "Proceed to Pay" → Razorpay payment modal opens
4. Payment → Razorpay webhook fires → order recorded in Supabase
5. Auto-email sent (or WhatsApp message via Twilio/manual) with credentials
6. Confirmation page: Order ID + "Check your email/WhatsApp"

### 3.2 Admin Panel (`/admin/*`)

> **Design Principle: Shiv must be able to use this with ZERO developer assistance**

#### Admin Login (`/admin/login`)
- Simple email + password form
- Supabase Auth — only Shiv's email is allowed
- On wrong credentials: "Incorrect email or password" (never reveal which is wrong)

#### Admin Dashboard (`/admin/dashboard`)
- Stats cards: Total Orders Today | Revenue Today | Total Orders All Time | Revenue All Time
- Recent orders table: Order ID | Customer | Product | Amount | Status | Date
- Quick actions: Add Product | Toggle Flash Sale | Add Coupon

#### Products Manager (`/admin/products`)
- Product list in a table with Edit/Delete per row
- "Add New Product" button → modal form:
  - Product name (text)
  - Category (dropdown: AI Assistants / Design Tools / Microsoft Suite)
  - Price in ₹ (number)
  - Original price in ₹ (for strike-through display)
  - Product logo image (file upload)
  - Short description (textarea, max 150 chars)
  - Is Flash Sale item? (toggle)
  - Is Active? (toggle — hide/show from site)
  - Save
- All changes reflect immediately on the live site

#### Orders Manager (`/admin/orders`)
- Table: Order ID | Customer Name | Email | WhatsApp | Product | Amount | Status | Created At
- Status options: Pending → Delivered → Cancelled
- One-click status update (dropdown per row)
- "Send WhatsApp" quick link (opens wa.me with pre-filled message)

#### Settings (`/admin/settings`)
- Flash Sale toggle: ON/OFF (hides/shows flash sale section site-wide)
- Flash Sale timer: Set end date/time
- Coupon codes: Add/Delete coupon codes with discount % or flat amount
- Site announcement bar text: Editable text field

### 3.3 Authentication & Security

- Supabase Auth for admin
- All `/admin/*` routes protected by middleware — redirect to `/admin/login` if not authenticated
- Razorpay webhook signature verification (prevent fake orders)
- HTTPS only (Vercel enforces this)
- No customer passwords stored — guest checkout only

---

## 4. SEO REQUIREMENTS

### 4.1 Technical SEO (Every Page)
- Unique `<title>` tag (pattern: `[Product Name] — Buy at ₹[Price] | NovaHub`)
- Unique `<meta name="description">` (155 chars max)
- Canonical URL tag
- Open Graph tags (title, description, image, URL, site_name)
- Twitter Card tags
- `rel="noopener noreferrer"` on all external links

### 4.2 Structured Data (Schema.org)
- `Organization` schema on homepage
- `Product` schema on each product detail page (with `offers`, `price`, `availability`)
- `FAQPage` schema on homepage and product pages
- `BreadcrumbList` on product and category pages
- `WebSite` schema with SearchAction on homepage

### 4.3 Geographic SEO (Following ottmega.in's strategy)
```html
<meta name="geo.region" content="IN" />
<meta name="geo.country" content="India" />
<meta name="geo.placename" content="India" />
<meta name="language" content="English" />
```

### 4.4 Performance SEO
- `next/image` for all images (auto WebP conversion)
- `fetchpriority="high"` on hero image
- `font-display: swap` on Poppins
- `loading="lazy"` on all below-fold images
- No render-blocking scripts

---

## 5. FEATURE REQUIREMENTS CHECKLIST

### Must Have (Demo — Days 1-3) ✅ COMPLETE
- [x] Sticky navbar (glassmorphism on scroll — partially done)
- [x] Hero with animated floating product logos
- [x] Announcement bar — **Urban Monkey marquee style** (black + Indigo border)
- [x] Embla carousel horizontal product scroll (3 categories) + mouse wheel gestures
- [x] Flash sale section with live countdown
- [x] Live purchase notification (fake data, 4s cycle)
- [x] Flash sale pop-up modal (3s delay, localStorage)
- [x] Trust signals section (4 cards)
- [x] Payment proof gallery (placeholder cards)
- [x] Testimonials (3 placeholders)
- [x] FAQ accordion (Framer Motion height animation)
- [x] Footer
- [x] Dark/light mode toggle (next-themes)
- [x] WhatsApp FAB (fixed bottom-right, pulse ring)
- [x] Mobile responsive (375px, 768px, 1280px tested)
- [x] Admin login page (UI only)
- [x] **Design audit applied:** Flipkart rating pills, Xbox cinematic hover, Snitch uppercase tracking

### Must Have (Full Build — Days 4-14)
- [ ] Supabase database + schema
- [ ] Razorpay checkout integration
- [ ] Order form (Name + Email + WhatsApp + Coupon)
- [ ] Webhook handler (Razorpay → Supabase)
- [ ] Admin dashboard with real data
- [ ] Admin product CRUD
- [ ] Admin order management
- [ ] Coupon code system
- [ ] Product detail pages (dynamic from DB)
- [ ] All Products page with filter/sort
- [ ] Flash Deals page
- [ ] About page
- [ ] Schema markup (Product, Organization, FAQ)
- [ ] Sitemap.xml + robots.txt
- [ ] Performance audit (LCP < 2.5s)

### Nice to Have (Post-Launch)
- [ ] Email automation (SendGrid/Resend)
- [ ] Telegram bot for order notifications
- [ ] Instagram widget (show Instagram posts)
- [ ] Analytics dashboard (order trends)
- [ ] Affiliate link tracking

---

## 6. CONTENT REQUIREMENTS

### 6.1 Who Provides What

| Content | Provider | Timeline |
|---------|---------|---------|
| Logo + Banner | ✅ Shiv (already provided) | Done |
| Product prices | Shiv (via admin panel) | Before launch |
| Real testimonials | Shiv (customer names + reviews) | Before launch |
| Payment proof screenshots | Shiv | Before launch |
| WhatsApp number | Shiv | Before launch |
| About Us copy | Sayan writes draft, Shiv approves | Week 1 |
| FAQ answers | Sayan writes draft, Shiv approves | Week 1 |
| Privacy Policy + Terms | Sayan generates (legal templates) | Week 2 |

---

## 7. DELIVERY PLAN

| Phase | Deliverable | Timeline |
|-------|------------|---------|
| Demo | Live Vercel URL with homepage + 1 product | Day 3 |
| Full Build | Complete site with admin + Razorpay | Day 14 |
| QA | Cross-browser + mobile testing | Day 15 |
| Launch | Point domain to Vercel | Day 16 |
| Handover | Admin walkthrough video for Shiv | Day 17 |
