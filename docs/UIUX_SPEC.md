# NOVAHUB — UI/UX SPECIFICATION
### Visual & Interaction Design Spec · Read BRAIN.md + PRD.md + WEBFLOW.md before this

> **Source of Truth for tokens:** `src/app/globals.css`
> **Font in use:** Outfit (NOT Poppins — original spec was wrong)
> **Primary color:** `#454AD3` Indigo (NOT violet `#8B5CF6`)

---

## 0. DESIGN PRINCIPLES

1. **Vibrant but credible** — Bold gradients communicate energy; clean layout communicates trust
2. **Mobile-first always** — Every component at 375px first
3. **Performance-aware** — No animation that causes layout reflow. GPU layers only (`will-change: transform`)
4. **WCAG AA compliant** — Dark mode: min `#A8A8A8` on `#090909`. Light mode: min `#777777` on `#F8FAFC`
5. **Consistent rhythm** — Section padding: `py-12 md:py-16`. Zero outer margins on `<section>`
6. **Flipkart-familiar** — Indian users trust Flipkart UX patterns: rating pills, card lifts, urgency chips

---

## 1. LAYOUT GRID SYSTEM

### 1.1 Container

```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding-inline: 1rem;        /* 16px mobile */
}
@media (min-width: 640px)  { .container { padding-inline: 1.5rem; } }
@media (min-width: 1024px) { .container { padding-inline: 2rem; } }
```

### 1.2 Grid Columns

| Context | Columns | Gap |
|---------|---------|-----|
| Product cards (mobile) | 1 | 16px |
| Product cards (tablet) | 2 | 24px |
| Product cards (desktop) | 3–4 | 24px |
| Trust section cards | 1 ? 2 ? 4 | 24px |
| Testimonials | 1 ? 2 ? 3 | 24px |
| Admin table | 1 | — |

### 1.3 Section Spacing

```
Section vertical padding:    py-12 md:py-16  (48px / 64px)
Hero vertical padding:       py-16 md:py-24  (64px / 96px)
Section header margin:       mb-8 md:mb-12
Content grid gap:            gap-6 md:gap-8
Card internal padding:       p-6
```

---

## 2. COMPONENT SPECIFICATIONS

### 2.1 Announcement Bar (UPDATED — Urban Monkey Pattern)

**Structure:** Full-width top bar above nav with CSS marquee

| Property | Value |
|----------|-------|
| Height | 44px (slightly taller than nav-minimal — feels structural) |
| Background | `#000000` — pure black |
| Border-bottom | `2px solid #454AD3` — Indigo (brand color) |
| Text color | `#FFFFFF` |
| Font | Outfit, `font-weight: 900`, `text-transform: uppercase`, `letter-spacing: 0.15em` |
| Font size | `12–13px` |
| Content | Marquee: `? FLASH SALE · FREE SHIPPING ABOVE ?499 ? GENUINE LICENSES ? INSTANT DELIVERY` |
| Animation | CSS `animation: marquee 20s linear infinite` |
| Separator | `?` or `·` between items |

---

### 2.2 Navigation Bar

**Structure:**
```
[Logo] ----------- [Home] [Products] [Flash Deals] [About] --- [WhatsApp ?] [??/? Toggle]
```

| Property | Value |
|----------|-------|
| Height | 64px desktop, 56px mobile |
| Position | Fixed top-0, full-width, z-50 |
| Background (at top) | `transparent` |
| Background (on scroll) | `rgba(255,255,255,0.85) backdrop-blur-md` (light) / `rgba(9,9,9,0.85) backdrop-blur-md` (dark) |
| Border-bottom | `1px solid var(--border)` — appears only on scroll |
| Transition | `background 200ms ease` — scroll-triggered |
| WhatsApp CTA | `bg-[#25D366] text-white px-4 py-2 rounded-full font-semibold text-sm` |
| Theme toggle | Icon-only, 36px circle |

**Mobile (<768px):**
- Hamburger ? full-screen slide overlay
- Links stack vertically centered

---

### 2.3 Hero Section

**Layout:** Two-column (text left, visual right) on desktop ? single column stacked on mobile

| Element | Spec |
|---------|------|
| H1 size | `text-5xl md:text-6xl font-extrabold leading-tight` — Outfit 800 |
| H1 gradient line | `bg-gradient-to-r from-[#4FC3F7] to-[#7B2FBE] bg-clip-text text-transparent` |
| Body copy | `text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg` |
| Stats row | 3 items. Number: `font-bold text-2xl`. Label: `text-sm text-slate-500` |
| Primary CTA | `bg-gradient-to-r from-[#4FC3F7] to-[#7B2FBE] text-white font-semibold px-8 py-4 rounded-xl` |
| Secondary CTA | `border-2 border-slate-800 text-slate-800 px-8 py-4 rounded-xl` + WhatsApp icon |
| Badge | `border border-purple-200 bg-purple-50 text-purple-700 text-sm px-3 py-1 rounded-full` |
| Floating logos | 8–10 logos orbiting at different speeds and axes via CSS keyframes |

**Floating Logo Animation (CSS keyframes):**
```css
@keyframes float-1 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33%       { transform: translate(-8px, -12px) rotate(-3deg); }
  66%       { transform: translate(8px, -6px) rotate(3deg); }
}
/* Stagger: each logo gets animation-delay: 0s, 0.5s, 1s, 1.5s, 2s */
```

---

### 2.4 Product Card — Standard (UPDATED)

```
+------------------------------+
¦  [HERO IMAGE — 16:9 or 4:3] ¦  ? overflow:hidden, image scales on hover
+------------------------------¦
¦  [?] [Product Logo 40×40]   ¦  ? Logo overlaps image bottom (absolute -top-5)
¦                              ¦
¦  ChatGPT Plus                ¦  ? font-semibold
¦  [4.2 ?] Green Flipkart pill ¦  ? #388E3C, 11px bold white
¦                              ¦
¦  ?999     ~~?2,499~~         ¦
¦  [60% OFF]                   ¦  ? #EB5757 badge
¦                              ¦
¦  [ Claim Deal ? ]            ¦
+------------------------------+
```

| Property | Dark Mode | Light Mode |
|----------|-----------|------------|
| Background | `#141414` (--card) | `#FFFFFF` |
| Border | `1px solid #333333` | `1px solid #EDEDED` |
| Border-radius | `var(--radius-xl)` = `14px` | same |
| Shadow | `none` default ? `shadow-2xl` hover | same |
| Hover | `translateY(-6px)` | same |
| Hover transition | `all 300ms cubic-bezier(0.4,0,0.2,1)` | same |

**Image container:**
```css
overflow: hidden;
/* Image on hover: */
transition: transform 500ms cubic-bezier(0.25,0.46,0.45,0.94);
transform: scale(1.04); /* Xbox pattern */
```

**Flipkart Rating Pill:**
```css
background-color: #388E3C;
color: #FFFFFF;
font-size: 11px;
font-weight: 700;
border-radius: 3px;
padding: 2px 5px;
display: inline-flex;
align-items: center;
gap: 2px;
/* Content: "4.2 ?" */
```

**Discount Badge:**
```css
background-color: #EB5757; /* --destructive */
color: #FFFFFF;
font-size: 11px;
font-weight: 700;
border-radius: 4px;
padding: 2px 6px;
```

---

### 2.5 Flash Sale Product Card (Extends Standard)

| Addition | Spec |
|---------|------|
| Top banner | `bg-[#EB5757]` full-width bar: `? FLASH DEAL` — `text-xs font-bold uppercase tracking-widest text-white` |
| Urgency text | `text-xs text-[#EB5757] font-medium`: `Only 3 left at this price!` |
| Timer | `font-mono text-xs text-slate-400 dark:text-slate-500` countdown in card |

---

### 2.6 Horizontal Scroll Row (Embla Carousel — UPDATED)

| Property | Value |
|----------|-------|
| Library | `embla-carousel-react` + `embla-carousel-wheel-gestures` |
| Scroll | Touch swipe (mobile) + mouse wheel (desktop) + arrow buttons |
| Card width | `min-w-[260px] md:min-w-[300px]` |
| Gap | `gap-4 md:gap-5` |
| Row header | `text-xl font-bold tracking-tight` |
| Category badge | `text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground` — Snitch pattern |
| "See All" link | `text-sm text-primary font-medium hover:underline` |
| Scroll-reveal | Framer Motion `opacity:0 + translateY(40px)` ? `opacity:1 + translateY(0)`, `600ms`, stagger `80ms` |

---

### 2.7 Flash Sale Pop-up Modal

| Property | Value |
|----------|-------|
| Trigger delay | 3000ms after page load |
| Session control | `localStorage.getItem('nova_popup_shown')` |
| Backdrop | `fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]` |
| Modal | `max-w-md bg-white dark:bg-[#141414] rounded-2xl p-8` |
| Open animation | Framer Motion: `scale: 0.8?1.0`, `opacity: 0?1`, `duration: 0.3`, spring |
| Close animation | `scale: 1.0?0.9`, `opacity: 1?0`, `duration: 0.2` |
| Header badge | `bg-[#EB5757] text-white text-sm font-bold px-4 py-1 rounded-full` |

---

### 2.8 Live Purchase Notification (Ticker)

**Position:** Fixed `bottom-6 left-6` — z-90

| Property | Value |
|----------|-------|
| Background | `bg-white dark:bg-[#141414]` |
| Border-left | `4px solid #454AD3` (Indigo — brand) |
| Shadow | `shadow-lg` |
| Enter | `x: -100% ? 0`, `400ms spring(stiffness:400,damping:40)` |
| Exit | `x: 0 ? -100%`, `300ms ease` |
| Cycle | 4000ms |
| Pause on hover | Yes — clears interval on mouseEnter |
| Max-width | `max-w-sm` |

---

### 2.9 Trust/Why Us Cards (Pending redesign)

**Target layout:** 4 cards in a row (1?2?4 responsive)

| Property | Current | Target |
|----------|---------|--------|
| Background | `bg-slate-50 dark:bg-[#141414]` | Same |
| Top accent | None | `4px solid` gradient stripe at top of each card |
| Icon | Lucide outline 48px | Same, but colored per card: green/blue/purple/orange |
| Animation | None | Framer Motion scroll-reveal stagger `80ms` |

---

### 2.10 FAQ Accordion

| Property | Value |
|----------|-------|
| Container | `divide-y divide-border` |
| Question | `text-base font-semibold py-4 cursor-pointer flex justify-between items-center` |
| Chevron | Rotates `0°?180°` on open, `200ms ease` |
| Answer | `text-sm text-muted-foreground pb-4` |
| Open animation | Framer Motion `AnimatePresence` height `0?auto` |

---

### 2.11 Testimonial Card

```
+-------------------------------------+
¦ ?????                               ¦
¦                                     ¦
¦ "Got my Adobe CC within 2 minutes   ¦
¦  of payment. Absolutely genuine!"   ¦
¦                                     ¦
¦ [Avatar] Arjun K.                   ¦
¦          Graphic Designer, Pune     ¦
+-------------------------------------+
```

| Property | Value |
|----------|-------|
| Stars | `#F59E0B` gold, 5 stars |
| Quote | `text-slate-700 dark:text-slate-300 text-base italic` |
| Avatar | 40px circle, gradient placeholder |
| Name | `font-semibold text-sm` |
| Role | `text-muted-foreground text-xs` |
| Card BG | `bg-card` |
| Border | `1px solid var(--border)` |

---

### 2.12 WhatsApp FAB

| Property | Value |
|----------|-------|
| Position | Fixed `bottom-6 right-6`, z-80 |
| Size | 56px × 56px circle |
| Background | `#25D366` |
| Icon | WhatsApp SVG 28px white |
| Hover | `scale(1.1)` + `box-shadow: 0 0 20px rgba(37,211,102,0.4)` |
| Pulse ring | CSS `::after` green ring, `2s` infinite |

---

### 2.13 Primary CTA Button (Target — Urban Monkey Pattern)

```css
/* Default */
background-color: #454AD3;  /* --primary */
color: #FFFFFF;
border: 2px solid #454AD3;
border-radius: var(--radius-xl);  /* 14px */
font-weight: 700;
font-size: 14px;
padding: 14px 28px;
text-transform: uppercase;
letter-spacing: 0.06em;
transition: all 200ms ease;

/* Hover — Urban Monkey invert */
background-color: transparent;
color: #454AD3;
border-color: #454AD3;
```

---

## 3. PAGE STRUCTURE (DOM Order — Homepage)

```html
<AnnouncementBar />    ? Black bar, Indigo border-bottom, marquee
<Nav />               ? Fixed 64px, transparent?glassmorphism on scroll
<main>
  <HeroSection />     ? py-16 md:py-24, gradient text headline
  <LogoCloud />       ? py-8, brand logos marquee strip
  <FlashSaleSection /> ? py-12 md:py-16, bg-secondary/40
  <CategoryScrollSection /> ? (AI Assistants row)
  <CategoryScrollSection /> ? (Design Tools row)
  <CategoryScrollSection /> ? (Microsoft Suite row)
  <WhyUsSection />    ? py-12 md:py-16, trust cards
  <ProofGallery />    ? py-12 md:py-16, screenshot grid
  <Testimonials />    ? py-12 md:py-16
  <FAQSection />      ? py-12 md:py-16
</main>
<Footer />
<LivePurchaseTicker />  ? Fixed bottom-left
<WhatsAppFAB />         ? Fixed bottom-right
<FlashSaleModal />      ? Fixed overlay, 3s delay
```

### Section Alternation Pattern

```
Hero:         bg-background (F8FAFC / #090909)
Logo Cloud:   bg-background
Flash Sale:   bg-secondary/40
Products:     bg-background
Why Us:       bg-secondary/40
Proof:        bg-background
Testimonials: bg-secondary/40
FAQ:          bg-background
```

---

## 4. RESPONSIVE BREAKPOINTS

| Breakpoint | Width | Notes |
|-----------|-------|-------|
| `xs` | 375px | Minimum target |
| `sm` | 640px | 2 columns |
| `md` | 768px | Tablet landscape |
| `lg` | 1024px | Desktop — 3-4 columns |
| `xl` | 1280px | Wide desktop |
| `2xl` | 1536px | Ultra-wide |

---

## 5. ANIMATION TIMING REFERENCE (UPDATED)

| Animation | Duration | Easing | Library |
|-----------|---------|--------|---------|
| Page enter | 300ms | `easeOut` | Framer Motion |
| Scroll reveal | 600ms | `cubic-bezier(0.25,0.46,0.45,0.94)` | Framer Motion (Xbox pattern) |
| Scroll reveal stagger | 80ms delay per item | — | Framer Motion |
| Card hover lift | `300ms` | `cubic-bezier(0.4,0,0.2,1)` | CSS |
| Card image zoom | `500ms` | `cubic-bezier(0.25,0.46,0.45,0.94)` | CSS (Xbox pattern) |
| Modal open | `300ms` | `spring(stiffness:300,damping:30)` | Framer Motion |
| Modal close | `200ms` | `easeIn` | Framer Motion |
| Toast slide | `400ms` | `spring(stiffness:400,damping:40)` | Framer Motion |
| Announcement marquee | `20s linear infinite` | — | CSS |
| Nav glassmorphism | `200ms ease` | — | CSS (scroll-triggered) |
| Button hover invert | `200ms ease` | — | CSS |
| Theme toggle | `300ms ease` | — | CSS |
| WhatsApp pulse | `2s ease-out infinite` | — | CSS |
| Flash sale pulse | `1500ms ease-in-out infinite` | — | CSS |

---

## 6. ADMIN PANEL UI SPEC

> **Admin is ALWAYS light mode only. Never dark.**

### Layout
- Sidebar (desktop): 240px wide
- Main content: remaining width
- Mobile: top navbar tabs

### Admin Colors (Light Only)
```
Sidebar bg:     #1E1E4A (dark navy)
Sidebar text:   #F1F5F9
Main bg:        #F8F9FF
Card bg:        #FFFFFF
Border:         #E2E8F0
Primary action: #454AD3 (Indigo — matches brand primary)
Danger:         #EB5757 (delete — matches --destructive)
Success:        #10B981
```

### Key Admin Rules
- Every delete has confirmation dialog
- Status badges: `Pending=yellow`, `Delivered=green`, `Cancelled=red`
- Tables sortable by date/status
- Images: drag & drop upload with preview

---

## 7. DARK MODE IMPLEMENTATION

### Implemented via `next-themes` + CSS variables

```css
/* globals.css — :root = light, .dark = dark */
/* next-themes adds class="dark" to <html> */
```

### Global Transition
```css
/* Already in globals.css via @layer base */
* { @apply border-border outline-ring/50; }
body { @apply bg-background text-foreground; }
```

> **Do not add** `transition: background-color 0.3s ease` globally — it causes performance issues on scroll. Only add transitions to specific components that need them.
