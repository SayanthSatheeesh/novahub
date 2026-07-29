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
- **Sparkles (?)** in the logo = Trust, authenticity, quality — every subscription is verified and genuine

### 1.3 Logo Spec

| Asset | Spec |
|-------|------|
| **Icon** | Stylized "N" with 3D fold/ribbon effect |
| **Gradient** | Electric Blue `#4FC3F7` ? Deep Purple `#7B2FBE` (left to right) |
| **Sparkles** | 3 sparkle stars at top-right of icon — deep purple `#5C35A0` |
| **Wordmark** | "nova" in dark navy `#1A1A4E`, "hub" in purple `#7B2FBE` |
| **Sub-text** | "DIGITAL SOFTWARE SUBSCRIPTIONS" in small caps with blue accent bars |
| **Background** | White or dark only. Never place on mid-toned backgrounds |
| **Min digital size** | 120px wide |

---

## 2. COLOR SYSTEM

> ?? **IMPORTANT — Source of Truth:** The actual design tokens live in `src/app/globals.css` as CSS custom properties. The values below reflect the **real implemented tokens**. Always check `globals.css` first.

### 2.1 Light Mode (DEFAULT — `:root`)

```css
--background:           #F8FAFC;  /* Page background — off-white for card contrast */
--foreground:           #222222;  /* Primary body text */
--card:                 #FFFFFF;  /* Card/surface backgrounds */
--card-foreground:      #222222;
--primary:              #454AD3;  /* Indigo — brand primary (CTA, accent, ring) */
--primary-foreground:   #FFFFFF;
--secondary:            #F4F5F4;
--secondary-foreground: #222222;
--muted:                #F4F5F4;
--muted-foreground:     #777777;  /* Secondary/muted text */
--accent:               #F4F5F4;
--accent-foreground:    #222222;
--destructive:          #EB5757;  /* Red — flash sale, urgency, errors */
--destructive-foreground: #FFFFFF;
--border:               #EDEDED;
--input:                #EDEDED;
--ring:                 #454AD3;
--radius:               0.625rem; /* 10px — base border-radius */
```

### 2.2 Dark Mode (`.dark`)

```css
--background:           #090909;  /* Near-black page background */
--foreground:           #F9F9F9;
--card:                 #141414;  /* Dark card surfaces */
--card-foreground:      #F9F9F9;
--primary:              #454AD3;  /* Same Indigo across modes */
--primary-foreground:   #FFFFFF;
--secondary:            #222222;
--secondary-foreground: #F9F9F9;
--muted:                #222222;
--muted-foreground:     #A8A8A8;
--accent:               #222222;
--accent-foreground:    #F9F9F9;
--destructive:          #EB5757;
--destructive-foreground: #FFFFFF;
--border:               #333333;
--input:                #333333;
--ring:                 #454AD3;
```

### 2.3 Semantic Color Reference

| Purpose | Value | Notes |
|---------|-------|-------|
| Brand primary | `#454AD3` | Indigo — all CTAs, ring highlights |
| Flash sale / urgency | `#EB5757` | `--destructive` — timers, badges |
| Rating pill | `#388E3C` | Flipkart-pattern green — hardcoded in card components |
| Star gold | `#F59E0B` | Amber — testimonials, star ratings |
| Success green | `#10B981` | Admin "delivered" status |
| WhatsApp green | `#25D366` | WhatsApp FAB |
| Announcement bar | `#000000` | Black bar — Urban Monkey inspired |
| Announcement border | `#454AD3` | Indigo bottom border on announcement bar |

### 2.4 Brand Gradient

```css
background: linear-gradient(135deg, #4FC3F7 0%, #8B5CF6 50%, #7B2FBE 100%);
/* Text gradient */
background: linear-gradient(135deg, #4FC3F7, #7B2FBE);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## 3. TYPOGRAPHY

> ?? **IMPORTANT — Actual Font in Codebase is OUTFIT, not Poppins.** `globals.css` maps all font roles to `var(--font-outfit)`. Do not reference Poppins anywhere.

### 3.1 Font System (Actual)

| Role | Font | Weights |
|------|------|---------|
| **All text** | **Outfit** | 400, 500, 600, 700, 800 |

Google Fonts: `https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap`

### 3.2 Type Scale

```
text-xs:  12px  ? Rating pills, badges, legal text
text-sm:  14px  ? Labels, metadata
text-base:16px  ? Body copy
text-lg:  18px  ? Card titles
text-xl:  20px  ? Sub-section headers
text-2xl: 24px  ? Section headings
text-3xl: 30px  ? Major section titles
text-4xl: 36px  ? Hero sub-headline
text-5xl: 48px  ? Hero headline (mobile)
text-6xl: 64px  ? Hero headline (desktop)
```

### 3.3 Weight Conventions

```
Headlines:         font-weight: 800
Section titles:    font-weight: 700
Card titles:       font-weight: 600
Body:              font-weight: 400
UI labels:         font-weight: 500
Uppercase labels:  font-weight: 700 + letter-spacing: 0.1–0.2em (Snitch-pattern)
```

---

## 4. PRODUCT CATALOGUE (Demo)

### Category 1: AI Assistants
| Product | Demo Price | Original | Discount |
|---------|-----------|---------|---------|
| ChatGPT Plus (1 Month) | ?999 | ?2,499 | 60% OFF |
| Gemini Advanced (1 Month) | ?899 | ?1,999 | 55% OFF |
| Lovable Pro (1 Month) | ?1,299 | ?2,350 | 45% OFF |

### Category 2: Design Tools
| Product | Demo Price | Original | Discount |
|---------|-----------|---------|---------|
| Adobe Creative Cloud | ?1,499 | ?4,999 | 70% OFF |
| Canva Pro (1 Month) | ?499 | ?1,399 | 65% OFF |

### Category 3: Microsoft Suite
| Product | Demo Price | Original | Discount |
|---------|-----------|---------|---------|
| Microsoft Office 365 | ?799 | ?2,899 | 72% OFF |

> All prices are PLACEHOLDERS. Shiv updates via admin panel.

---

## 5. TARGET AUDIENCE PERSONAS

### Persona A: "The Student Hustler" (Primary — 60%)
- **Age:** 18-24 | **Device:** 70% Android mobile
- **Trust triggers:** Peer social proof, visible savings, WhatsApp availability, Flipkart-familiar rating pills

### Persona B: "The Freelancer Pro" (Secondary — 40%)
- **Age:** 25-35 | **Device:** 50/50 mobile/desktop
- **Trust triggers:** "Genuine license" badge, delivery guarantee, Razorpay

---

## 6. TRUST FRAMEWORK

1. **Legitimacy** — "100% Genuine Digital Licenses"
2. **Social proof** — Payment proof gallery + customer names
3. **Speed** — "Instant Delivery After Payment"
4. **Support** — WhatsApp visible in nav + footer
5. **Security** — Razorpay badge + SSL
6. **Rating** — Flipkart-pattern `#388E3C` green rating pill on every product card

---

## 7. SITE STRUCTURE (Actual)

```
src/app/
+-- page.tsx                          ? Homepage ? Built
+-- globals.css                       ? Design tokens ?
+-- layout.tsx                        ? Root layout ?
+-- admin/
¦   +-- login/page.tsx               ? Admin login UI ? (no auth wired)
+-- products/
    +-- chatgpt-plus/page.tsx        ? Static demo product page ?
```

---

## 8. TECHNICAL STANDARDS (Actual)

| Layer | Technology | Version/Notes |
|-------|-----------|---------------|
| Framework | Next.js App Router | **16.2.11** |
| Styling | Tailwind CSS | **v4** — CSS-first, no `tailwind.config.js` |
| Animations | Framer Motion | `^12.42.2` |
| Font | **Outfit** | via `next/font/google` |
| Carousel | Embla | `^8.6.0` + wheel gestures |
| Components | shadcn/ui | `^4.14.1` |
| Icons | lucide-react | `^1.26.0` |
| Theming | next-themes | `^0.4.6` — dark mode live |
| Database | Supabase | Phase 2 — not wired |
| Payments | Razorpay | Phase 2 — not wired |

### Logo API
- **Use:** `https://www.google.com/s2/favicons?sz=128&domain=[domain]`
- **Do NOT use:** `https://logo.clearbit.com/` — blocked/rate-limited

---

## 9. DESIGN AUDIT INFLUENCES

### Applied ?
| Pattern | Source | Component |
|---------|--------|-----------|
| Black marquee bar + Indigo border-bottom | Urban Monkey | `announcement-bar.tsx` |
| Cinematic card image hover `scale(1.04)` `500ms cubic-bezier` | Xbox | `category-scroll.tsx`, `flash-sale-section.tsx` |
| Green rating pill `#388E3C` | Flipkart | All product cards |
| Card lift `hover:-translate-y-1.5 hover:shadow-2xl` | Flipkart | All product cards |
| Scroll fade-up `opacity:0 translateY(40px)` ? `600ms` | Xbox | `flash-sale-section.tsx`, `category-scroll.tsx` |
| Uppercase tracked labels `tracking-[0.15em]` | Snitch | Section subheadings |
| `#F8FAFC` page background | Amazon/Flipkart | `globals.css :root` |
| Google Favicon API | — | All `<img>` logo tags |

### Pending ?
| Pattern | Source | Target Component |
|---------|--------|-----------------|
| Scroll-transparent nav ? glassmorphism on scroll | Xbox | `nav.tsx` |
| Button color-invert hover | Urban Monkey | Primary CTAs |
| Testimonial card polish | Flipkart/Snitch | `testimonials.tsx` |
| Trust guarantee card redesign | Flipkart | `trust-guarantee.tsx` |
| Why Us section polish | — | `why-us-section.tsx` |
| Proof gallery masonry polish | — | `proof-gallery.tsx` |
| FAQ section polish | — | `faq-section.tsx` |
| First-time modal redesign | Flipkart urgency | `first-time-modal.tsx` |

---

## 10. DEVELOPMENT WORKFLOW

```
Step 1: Read BRAIN.md          ? You are here
Step 2: Read PRD.md            ? Functional requirements
Step 3: Read UIUX_SPEC.md      ? Visual + interaction spec
Step 4: Read WEBFLOW.md        ? User journey maps
Step 5: Write code
Step 6: Cross-check all docs   ? Before shipping
```

> **Rule for AI agents:** Never change routing logic, Supabase calls, or Razorpay integration without explicit approval. Visual/CSS/Tailwind changes only unless stated otherwise. Do NOT use Poppins. Use Outfit. Do NOT use clearbit logo API. Use Google Favicon.
