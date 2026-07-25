# NOVAHUB — PROJECT BRAIN
### Master Reference Document · All agents read this FIRST before any code

> **Rule:** Every developer, AI agent, and decision in this project must reference this document. If something is not covered here, refer to the PRD. If not in the PRD, refer to the UI/UX spec. Never assume.

---

## 1. BRAND IDENTITY

### 1.1 Core Identity

| Attribute | Value |
|-----------|-------|
| **Brand Name** | NovaHub |
| **Legal Casing** | NovaHub (capital N, capital H) |
| **Tagline** | Digital Software Subscriptions |
| **Sub-tagline** | Smart Software. Trusted Solutions. |
| **Brand Mission** | Your one-stop destination for genuine software subscriptions at the best prices |
| **Brand Personality** | Energetic, trustworthy, modern, approachable, India-first |
| **Brand Voice** | Clear, confident, direct. No jargon. Never corporate-speak |

### 1.2 Brand Story

The name **NovaHub** communicates:
- **Nova** = Latin for "new star" + innovation. Blue side of gradient = cutting-edge technology
- **Hub** = Central connection point, community network. Purple side = ecosystem of tools
- **Sparkles (✦)** in the logo = Trust, authenticity, quality — every subscription is verified and genuine

### 1.3 Logo Spec

| Asset | Spec |
|-------|------|
| **Icon** | Stylized "N" with 3D fold/ribbon effect |
| **Gradient** | Electric Blue `#4FC3F7` → Deep Purple `#7B2FBE` (left to right) |
| **Sparkles** | 3 sparkle stars at top-right of icon — deep purple `#5C35A0` |
| **Wordmark** | "nova" in dark navy `#1A1A4E`, "hub" in purple `#7B2FBE` |
| **Sub-text** | "DIGITAL SOFTWARE SUBSCRIPTIONS" in small caps with blue accent bars |
| **Background** | White or dark only. Never place on mid-toned backgrounds |
| **Min digital size** | 120px wide |

---

## 2. COLOR SYSTEM

### 2.1 Dark Mode (DEFAULT)

```css
--nova-bg-deep:          #0A0A1A;  /* Deepest background layer */
--nova-bg-primary:       #0F0F23;  /* Page background */
--nova-bg-secondary:     #16163A;  /* Card backgrounds */
--nova-bg-elevated:      #1E1E4A;  /* Hovered/active cards */

--nova-gradient-start:   #4FC3F7;  /* Electric Blue */
--nova-gradient-mid:     #8B5CF6;  /* Violet */
--nova-gradient-end:     #7B2FBE;  /* Deep Purple */

--nova-accent-primary:   #8B5CF6;  /* Purple — primary CTA */
--nova-accent-hover:     #7C3AED;  /* Darker purple on hover */
--nova-accent-flash:     #EF4444;  /* Red — flash sale urgency */
--nova-accent-gold:      #F59E0B;  /* Gold — best value badge */
--nova-accent-success:   #10B981;  /* Green — success/delivered */

--nova-text-primary:     #F1F5F9;  /* Near-white body text */
--nova-text-secondary:   #94A3B8;  /* Muted grey secondary */
--nova-text-accent:      #C4B5FD;  /* Soft purple subheadings */

--nova-glass-bg:         rgba(255,255,255,0.04);
--nova-glass-border:     rgba(255,255,255,0.10);
```

### 2.2 Light Mode (Toggle-activated)

```css
--nova-light-bg:         #FFFFFF;
--nova-light-surface:    #F8F9FF;  /* Slightly blue-tinted white */
--nova-light-card:       #FFFFFF;
--nova-light-border:     #E2E8F0;
--nova-light-text:       #0F172A;  /* Deep charcoal — WCAG AA required */
--nova-light-muted:      #475569;  /* Slate-600 — minimum for body */
--nova-light-caption:    #64748B;  /* Slate-500 — minimum for captions */
```

### 2.3 Brand Gradient (Core Visual Asset)

```css
/* Standard gradient — CTAs, hero headlines, badges */
background: linear-gradient(135deg, #4FC3F7 0%, #8B5CF6 50%, #7B2FBE 100%);

/* Text gradient — gradient-filled headings */
background: linear-gradient(135deg, #4FC3F7, #7B2FBE);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

/* Glow effect — behind hero/feature elements */
box-shadow: 0 0 80px rgba(139, 92, 246, 0.3);
```

---

## 3. TYPOGRAPHY

### 3.1 Font System

| Role | Font | Weight |
|------|------|--------|
| **All text** | Poppins | 400, 500, 600, 700, 800 |

> **Rule:** Poppins only. No mixing with other typefaces. Google Fonts CDN: `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap`

### 3.2 Type Scale

```
text-xs:  12px  → Badges, captions, legal fine print
text-sm:  14px  → Secondary labels, metadata
text-base:16px  → Body copy, card descriptions
text-lg:  18px  → Card titles, callouts
text-xl:  20px  → Sub-section headers
text-2xl: 24px  → Section headings
text-3xl: 30px  → Major section titles
text-4xl: 36px  → Hero sub-headline
text-5xl: 48px  → Hero headline (mobile)
text-6xl: 64px  → Hero headline (desktop)
```

### 3.3 Weight Conventions

```
Headlines:    font-weight: 800
Section titles: font-weight: 700
Card titles:  font-weight: 600
Body:         font-weight: 400
UI labels:    font-weight: 500
```

---

## 4. PRODUCT CATALOGUE (Demo Launch)

### Category 1: AI Assistants
| Product | Demo Price | Original | Discount |
|---------|-----------|---------|---------|
| ChatGPT Plus (1 Month) | ₹999 | ₹2,499 | 60% OFF |
| Gemini Advanced (1 Month) | ₹899 | ₹1,999 | 55% OFF |
| Lovable Pro (1 Month) | ₹1,299 | ₹2,350 | 45% OFF |

### Category 2: Design Tools
| Product | Demo Price | Original | Discount |
|---------|-----------|---------|---------|
| Adobe Creative Cloud | ₹1,499 | ₹4,999 | 70% OFF |
| Canva Pro (1 Month) | ₹499 | ₹1,399 | 65% OFF |

### Category 3: Microsoft Suite
| Product | Demo Price | Original | Discount |
|---------|-----------|---------|---------|
| Microsoft Office 365 | ₹799 | ₹2,899 | 72% OFF |

> All prices are PLACEHOLDERS for demo. Shiv updates them via the admin panel.

---

## 5. TARGET AUDIENCE PERSONAS

### Persona A: "The Student Hustler" (Primary — 60% of users)
- **Age:** 18-24 | **Device:** 70% Android mobile
- **Need:** Premium tools at student budget
- **Pain point:** "Adobe CC is ₹5,000/month — way too expensive"
- **Trust triggers:** Peer social proof, visible savings amount, WhatsApp availability

### Persona B: "The Freelancer Pro" (Secondary — 40% of users)
- **Age:** 25-35 | **Device:** 50% mobile, 50% desktop
- **Need:** Legitimate tools to bill clients with
- **Pain point:** "I need Office + Adobe but not at full retail price"
- **Trust triggers:** "Genuine license" badge, delivery guarantee, Razorpay security

---

## 6. COMPETITIVE POSITION

| Feature | Competitors | NovaHub Target |
|---------|------------|---------------|
| Design quality | 3-6/10 | 9/10 |
| Animation | None | Scroll triggers + micro-interactions |
| Trust signals | Basic stars | Live purchase ticker + proof gallery |
| Ordering | Single method | Dual: Razorpay + WhatsApp |
| SEO | 40-70 score | 90+ score |
| Mobile UX | Basic responsive | Mobile-first, touch-native |

---

## 7. TONE OF VOICE RULES

### DO
- Speak to the customer directly: "Get Gemini Advanced for ₹899 — that's 55% off"
- Use power verbs: "Get", "Unlock", "Power Up", "Start", "Claim"
- Show specific numbers: "10,000+ happy customers", "50+ tools"
- Be warm: "We're on WhatsApp — message us anytime"

### DON'T
- Use vague claims: "Quality products at fair prices"
- Use corporate-speak: "Leverage our solutions ecosystem"
- Bury the price — show it BIG, crossed-out original beside it
- Use more than 1 exclamation mark per block of copy

---

## 8. TRUST FRAMEWORK

Because this is a subscription resale business, trust is THE conversion factor:

1. **Legitimacy signal** — "100% Genuine Digital Licenses"
2. **Social proof** — Payment screenshot proof gallery + customer names
3. **Speed signal** — "Instant Delivery After Payment"
4. **Support signal** — WhatsApp number visible in nav + footer
5. **Security signal** — Razorpay badge + SSL lock on checkout

---

## 9. SITE STRUCTURE

```
novahub.in/
├── /                     → Homepage (Hero + Categories + Flash Sale + Trust + FAQ)
├── /products             → All Products (filterable grid)
├── /products/[slug]      → Individual Product Detail + Buy Now
├── /flash-deals          → Flash Sale listing page
├── /about                → About NovaHub + contact
├── /admin                → Admin login (protected)
│   ├── /admin/dashboard  → Overview stats
│   ├── /admin/products   → Add / Edit / Delete products
│   ├── /admin/orders     → View + manage orders
│   └── /admin/settings   → Coupon codes, Flash sale toggle
```

---

## 10. TECHNICAL STANDARDS

| Layer | Technology | Reason |
|-------|-----------|--------|
| Framework | Next.js 14 (App Router) | SSR for SEO, API routes, image optimization |
| Styling | Tailwind CSS v4 | Speed, dark mode utilities, responsive prefix |
| Animations | Framer Motion | Spring physics, scroll triggers, modal animations |
| Font | Poppins (Google Fonts) | Brand-aligned, widely loved in India |
| Carousel | Embla Carousel | Touch-native, lightweight |
| Database | Supabase (PostgreSQL) | Free tier, real-time, auth built-in |
| Payments | Razorpay | India-first, UPI + cards, npm package |
| Hosting | Vercel | Native Next.js, CDN, free tier |

### Performance Targets
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1
- Mobile Lighthouse Score: > 85
- SEO Lighthouse Score: > 90
- Animation target: 60fps on mid-range Android

---

## 11. DEVELOPMENT WORKFLOW RULE

```
Step 1: Read BRAIN.md          ← You are here
Step 2: Read PRD.md            ← Functional requirements
Step 3: Read UIUX_SPEC.md      ← Visual + interaction spec
Step 4: Read WEBFLOW.md        ← Page-by-page user journey map
Step 5: Write code             ← Now build
Step 6: Cross-check all docs   ← Before shipping any feature
```
