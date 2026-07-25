# NOVAHUB — UI/UX SPECIFICATION
### Visual & Interaction Design Spec · Read BRAIN.md + PRD.md + WEBFLOW.md before this

---

## 0. DESIGN PRINCIPLES

1. **Vibrant but credible** — Bold gradients communicate energy; clean layout communicates trust
2. **Mobile-first always** — Every component designed at 375px width first
3. **Performance-aware** — No animation that causes layout reflow. GPU layers only
4. **WCAG AA compliant** — Dark mode: min `#94A3B8` on dark bg. Light mode: min `#475569` on white bg
5. **Consistent rhythm** — Section padding: `py-12 md:py-16`. Zero outer margins on `<section>`

---

## 1. LAYOUT GRID SYSTEM

### 1.1 Container

```css
/* Standard content container */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding-inline: 1rem;        /* 16px mobile */
}

@media (min-width: 640px) {
  .container { padding-inline: 1.5rem; }  /* 24px tablet */
}

@media (min-width: 1024px) {
  .container { padding-inline: 2rem; }    /* 32px desktop */
}
```

### 1.2 Grid Columns

| Context | Columns | Gap |
|---------|---------|-----|
| Product cards (mobile) | 1 | 16px |
| Product cards (tablet) | 2 | 24px |
| Product cards (desktop) | 3–4 | 24px |
| Trust section cards | 1 (mobile) → 2 (tablet) → 4 (desktop) | 24px |
| Testimonials | 1 → 2 → 3 | 24px |
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

### 2.1 Navigation Bar

**Structure:**
```
[Logo] ───────────── [Home] [Products] [Flash Deals] [About] ─── [WhatsApp ☎] [🌙/☀ Toggle]
```

**Specs:**
| Property | Value |
|----------|-------|
| Height | 64px (desktop), 56px (mobile) |
| Position | Fixed top-0, full-width, z-index: 50 |
| Background (at top) | Transparent |
| Background (on scroll) | `rgba(15, 15, 35, 0.8)` + `backdrop-filter: blur(12px)` |
| Border-bottom | `1px solid rgba(255,255,255,0.08)` (only when scrolled) |
| Logo | 120px wide (desktop), 100px (mobile) |
| Nav link style | `text-sm font-medium text-nova-text-secondary` |
| Nav link hover | Color transitions to `#F1F5F9`, underline appears from left |
| WhatsApp CTA | Green pill button: `bg-[#25D366] text-white px-4 py-2 rounded-full` |
| Theme toggle | Icon-only, 36px × 36px, circular hover state |

**Mobile (< 768px):**
- Logo left, hamburger icon right
- Hamburger: 3 bars → X rotation (CSS transform)
- Menu: Full-screen overlay, `backdrop-blur`, links stack vertically centered

---

### 2.2 Announcement Bar

**Structure:** Full-width top bar above nav

| Property | Value |
|----------|-------|
| Height | 36px |
| Background | `linear-gradient(90deg, #4FC3F7, #7B2FBE)` |
| Text | `text-white text-sm font-medium` |
| Content | `⚡ FLASH SALE: [Product] at ₹[price] · Ends in [HH:MM:SS]` |
| Countdown | JS `setInterval(1000)` updating HH:MM:SS |
| Mobile | Text wraps or truncates with marquee scroll |

---

### 2.3 Hero Section

**Layout (Desktop — 2 column):**
```
┌─────────────────────────────────────────────────┐
│  [Badge] #1 Trusted Software Marketplace         │
│                                                  │
│  Smart Software.                                 │  [Floating product logos]
│  Trusted Solutions.     ← gradient text          │  [animated orbit/float]
│                                                  │
│  Get genuine AI tools at up to 75% off retail.  │
│                                                  │
│  [12,000+ Orders] [50+ Tools] [4.9★ Rating]     │
│                                                  │
│  [Browse All Products]  [Chat on WhatsApp]       │
└─────────────────────────────────────────────────┘
```

**Specs:**

| Element | Spec |
|---------|------|
| Section bg | `#FFFFFF` (light mode default) |
| Badge | Pill shape, `border border-purple-200 bg-purple-50 text-purple-700`, star icon left |
| H1 size | `text-5xl md:text-6xl font-extrabold leading-tight` |
| H1 gradient line | `bg-gradient-to-r from-[#4FC3F7] to-[#7B2FBE] bg-clip-text text-transparent` |
| Body copy | `text-lg md:text-xl text-slate-600 max-w-lg` |
| Stats row | 3 items, divider line between. `font-bold text-2xl` for number, `text-sm text-slate-500` for label |
| Primary CTA | Gradient bg button: `bg-gradient-to-r from-[#4FC3F7] to-[#7B2FBE] text-white font-semibold px-8 py-4 rounded-xl` |
| Secondary CTA | Outline button: `border-2 border-slate-800 text-slate-800 px-8 py-4 rounded-xl` with WhatsApp icon |
| Right visual | 400px × 400px container for animated logos |

**Floating Product Logos Animation:**
```css
@keyframes float-1 {
  0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
  33%       { transform: translate(-8px, -12px) rotate(-3deg); }
  66%       { transform: translate(8px, -6px) rotate(3deg); }
}
/* Apply with different animation-delay per logo card:
   Card 1: animation-delay: 0s
   Card 2: animation-delay: 0.5s
   Card 3: animation-delay: 1s
   Card 4: animation-delay: 1.5s
   Card 5: animation-delay: 2s */
```

---

### 2.4 Product Card (Standard)

```
┌──────────────────────────────┐
│                              │
│    [PRODUCT LOGO 60×60]      │
│                              │
│  ChatGPT Plus                │
│  ★★★★★ (4.9)                 │
│                              │
│  ₹999        ₹2,499          │
│  [60% OFF badge — red]       │
│                              │
│  ┌──────────────────────┐   │
│  │     Buy Now          │   │
│  └──────────────────────┘   │
└──────────────────────────────┘
```

| Property | Dark Mode | Light Mode |
|----------|-----------|------------|
| Background | `#16163A` | `#FFFFFF` |
| Border | `1px solid rgba(255,255,255,0.08)` | `1px solid #E2E8F0` |
| Border-radius | `16px` | `16px` |
| Padding | `24px` | `24px` |
| Logo size | 60px × 60px, centered | same |
| Product name | `text-lg font-semibold text-white` | `text-lg font-semibold text-slate-900` |
| Price | `text-2xl font-bold text-white` | `text-2xl font-bold text-slate-900` |
| Original price | `text-sm line-through text-slate-500` | same |
| Discount badge | `bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full` | same |
| CTA button | Full-width gradient | same |
| Hover | `translateY(-4px)` + `box-shadow: 0 16px 32px rgba(139,92,246,0.2)` | similar |

---

### 2.5 Flash Sale Product Card

Extends Standard Card with:

| Addition | Spec |
|---------|------|
| Top banner | `bg-red-500` full-width bar at card top: `⚡ FLASH DEAL` |
| Price badge | Animated pulse: `animate-pulse` on discount badge |
| Urgency text | `text-xs text-red-400 font-medium`: `Only 3 left at this price!` |
| Timer | Small `HH:MM:SS` countdown inside the card, `font-mono text-xs text-slate-400` |

---

### 2.6 Horizontal Scroll Row (Netflix-Style)

```
┌─────────────────────────────────────────────────────┐
│ AI Assistants                           See All →   │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐      │
│ │Card 1│ │Card 2│ │Card 3│ │Card 4│ │Card 5│ →    │
│ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘      │
└─────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Row header | `text-xl font-bold text-slate-900` (light) / `text-white` (dark) |
| "See All" link | `text-sm text-purple-600 font-medium hover:underline` |
| Scroll behavior | `overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch` |
| Card scroll snap | `scroll-snap-align: start` |
| Scrollbar | Hidden on mobile: `::-webkit-scrollbar { display: none }` |
| Desktop | Left/right arrow buttons (Embla Carousel) |
| Card width | `min-w-[200px]` on mobile, `min-w-[240px]` on desktop |
| Gap between cards | `gap-4 md:gap-6` |

---

### 2.7 Flash Sale Pop-up Modal

**Anatomy:**
```
┌─────────────────────────────────────┐
│                                 [X] │
│  ⚡ LIMITED TIME FLASH DEAL         │
│                                     │
│  [Product Logo]                     │
│  ChatGPT Plus                       │
│  ₹999  ~~₹2,499~~  60% OFF         │
│                                     │
│  Deal ends in: 02:14:33            │
│                                     │
│  [   Grab This Deal → ]            │
│  [No thanks, I'll pay full price]  │
└─────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Trigger delay | 3000ms after page load |
| Session control | `localStorage.getItem('nova_popup_shown')` — skip if set |
| Backdrop | `fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]` |
| Modal | `max-w-md w-full mx-4 bg-white dark:bg-[#16163A] rounded-2xl p-8` |
| Open animation | Framer Motion: `scale: 0.8 → 1.0`, `opacity: 0 → 1`, `duration: 0.3` |
| Close animation | `scale: 1.0 → 0.9`, `opacity: 1 → 0`, `duration: 0.2` |
| Header badge | `bg-red-500 text-white text-sm font-bold px-4 py-1 rounded-full` |
| Close button | Top-right, `text-slate-400 hover:text-slate-600` |
| Dismiss text | `text-xs text-slate-400 hover:text-slate-600 underline cursor-pointer` |

---

### 2.8 Live Purchase Notification (Toast)

**Position:** Fixed `bottom-6 left-6` — z-index: 90

**Anatomy:**
```
┌──────────────────────────────────────┐
│ 🔔  Rahul from Mumbai                │
│      just bought ChatGPT Plus        │
│      2 min ago                       │
└──────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Background | `bg-white dark:bg-[#1E1E4A]` |
| Border | `border border-purple-200 dark:border-purple-800` |
| Border-left | `4px solid #8B5CF6` (purple accent left border) |
| Shadow | `shadow-lg shadow-purple-900/20` |
| Enter animation | `x: -100% → 0` (slides in from left), `duration: 0.4s` |
| Exit animation | `x: 0 → -100%` (slides out to left), `duration: 0.3s` |
| Cycle interval | 4000ms per notification |
| Max width | `max-w-sm` (320px) |
| Pause on hover | `onMouseEnter` clears interval, `onMouseLeave` restarts |

---

### 2.9 Trust Section Cards

**Layout:** 4 cards in a row (1 → 2 → 4 responsive)

```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ [icon]       │ │ [icon]       │ │ [icon]       │ │ [icon]       │
│              │ │              │ │              │ │              │
│ 100% Genuine │ │ Instant      │ │ Secure       │ │ 24/7 Support │
│ Licenses     │ │ Delivery     │ │ Payment      │ │ on WhatsApp  │
│              │ │              │ │              │ │              │
│ Verified and │ │ Credentials  │ │ Powered by   │ │ Real human,  │
│ tested before│ │ sent right   │ │ Razorpay     │ │ not a bot    │
│ delivery     │ │ after payment│ │ (RBI licensed│              │
└──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘
```

| Property | Value |
|----------|-------|
| Background | `bg-slate-50` (light) / `bg-[#16163A]` (dark) |
| Border | Top: `4px solid` gradient color per card |
| Icon colors | Card 1: green | Card 2: blue | Card 3: purple | Card 4: orange |
| Icon size | 48px × 48px |
| Title | `text-lg font-bold text-slate-900 dark:text-white` |
| Body | `text-sm text-slate-600 dark:text-slate-400` |

---

### 2.10 FAQ Accordion

| Property | Value |
|----------|-------|
| Container | `divide-y divide-slate-200 dark:divide-slate-700` |
| Question | `text-base font-semibold text-slate-900 dark:text-white py-4 cursor-pointer flex justify-between` |
| Chevron icon | Rotates `0° → 180°` when open (CSS transition) |
| Answer | `text-slate-600 dark:text-slate-400 text-sm pb-4` |
| Open animation | Height `0 → auto` via Framer Motion's `AnimatePresence` |

---

### 2.11 Testimonial Card

```
┌─────────────────────────────────────┐
│ ★★★★★                               │
│                                     │
│ "Got my Adobe CC within 2 minutes   │
│  of payment. Absolutely genuine!"   │
│                                     │
│ [Avatar] Arjun K.                   │
│          Graphic Designer, Pune     │
└─────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Stars | Gold `#F59E0B`, 5 stars |
| Quote | `text-slate-700 dark:text-slate-300 text-base italic` |
| Avatar | 40px circle, gradient placeholder if no photo |
| Name | `font-semibold text-slate-900 dark:text-white text-sm` |
| Role | `text-slate-500 dark:text-slate-400 text-xs` |

---

### 2.12 WhatsApp Floating Button

| Property | Value |
|----------|-------|
| Position | Fixed `bottom-6 right-6`, z-index: 80 |
| Size | 56px × 56px circle |
| Background | `#25D366` (WhatsApp green) |
| Icon | WhatsApp logo SVG, 28px, white |
| Hover | `scale(1.1)` with green glow: `box-shadow: 0 0 20px rgba(37,211,102,0.4)` |
| Pulse ring | `::after` pseudo-element — green ring that expands and fades, 2s loop |
| Tooltip | "Chat with us" tooltip appears on hover (desktop only) |
| Mobile | No tooltip, direct tap |

---

### 2.13 Dark/Light Mode Toggle

| Property | Value |
|----------|-------|
| Icon | Sun icon (light mode shown) / Moon icon (dark mode shown) |
| Size | 36px × 36px |
| Animation | Icons cross-fade on switch |
| Transition | All color CSS variables transition at `0.3s ease` |
| Persistence | `localStorage.getItem('nova_theme')` |
| Default | Light mode (because hero is white background) |

---

## 3. PAGE-SPECIFIC LAYOUTS

### 3.1 Homepage Structure (DOM Order)

```html
<AnnouncementBar />           ← Fixed, 36px, gradient bg
<Nav />                       ← Fixed, 64px, glassmorphism on scroll
<main>
  <HeroSection />             ← py-16 md:py-24, bg-white
  <LogoCloud />               ← py-8, bg-white (brand logos: ChatGPT, Adobe etc.)
  <FlashSaleSection />        ← py-12 md:py-16, bg-slate-50
  <CategoryScrollSection />   ← py-12 md:py-16, bg-white (AI Assistants row)
  <CategoryScrollSection />   ← (Design Tools row — no extra section padding)
  <CategoryScrollSection />   ← (Microsoft Suite row)
  <WhyUsSection />            ← py-12 md:py-16, bg-slate-50
  <ProofGallery />            ← py-12 md:py-16, bg-white
  <TestimonialsSection />     ← py-12 md:py-16, bg-slate-50
  <FAQSection />              ← py-12 md:py-16, bg-white
</main>
<Footer />
<LivePurchaseTicker />        ← Fixed bottom-left
<WhatsAppFAB />              ← Fixed bottom-right
<FlashSaleModal />            ← Fixed overlay, 3s delay
```

### 3.2 Section Alternation

```
Hero:           bg-white
Logo Cloud:     bg-white      (border-b between same-bg sections)
Flash Sale:     bg-slate-50/60
Products:       bg-white
Why Us:         bg-slate-50/60
Proof Gallery:  bg-white
Testimonials:   bg-slate-50/60
FAQ:            bg-white
```

---

## 4. RESPONSIVE BREAKPOINTS

| Breakpoint | Width | Notes |
|-----------|-------|-------|
| `xs` | 375px | Minimum target (old Android) |
| `sm` | 640px | Tablet portrait — 2 columns |
| `md` | 768px | Tablet landscape |
| `lg` | 1024px | Desktop — 3-4 columns |
| `xl` | 1280px | Wide desktop |
| `2xl` | 1536px | Ultra-wide (max-width container applies) |

### Mobile-Specific Rules
- All product cards: single column (`grid-cols-1`)
- Hero: Single column, text above visual
- Floating product logos: smaller (40px logos vs 60px desktop)
- Announcement bar: marquee scroll (text wider than viewport)
- Nav: hamburger replaces center links

---

## 5. ANIMATION TIMING REFERENCE

| Animation | Duration | Easing | Library |
|-----------|---------|--------|---------|
| Page enter | 300ms | `easeOut` | Framer Motion |
| Section reveal (scroll) | 500ms | `easeOut` | Framer Motion |
| Card hover lift | 250ms | `cubic-bezier(0.4,0,0.2,1)` | CSS |
| Modal open | 300ms | `spring(stiffness:300, damping:30)` | Framer Motion |
| Modal close | 200ms | `easeIn` | Framer Motion |
| Toast slide-in | 400ms | `spring(stiffness:400, damping:40)` | Framer Motion |
| Theme toggle | 300ms | `ease` | CSS |
| Navbar glassmorphism | 200ms | `ease` | CSS |
| Floating logos | 3000ms | `ease-in-out` (infinite) | CSS keyframes |
| Flash sale pulse | 1500ms | `ease-in-out` (infinite) | CSS |
| WhatsApp pulse ring | 2000ms | `ease-out` (infinite) | CSS |

---

## 6. ADMIN PANEL UI SPEC

### Design Philosophy
> **The admin panel must feel like a simple, approachable tool — not a complex dashboard. Shiv has zero technical background. Every action must be obvious.**

### Layout
- Sidebar (desktop): 240px wide, with logo + nav items
- Main content: takes remaining width
- Mobile: sidebar collapses to top navbar tabs
- Color scheme: ALWAYS light mode. Never dark mode for admin.

### Admin Sidebar Links
```
[NovaHub Logo]
─────────────
📊 Dashboard
📦 Products
📋 Orders
⚙️  Settings
─────────────
🔴 Sign Out
```

### Admin Colors (Light Only)
```
Sidebar bg:    #1E1E4A (dark navy — brand consistent)
Sidebar text:  #F1F5F9 (near-white)
Main bg:       #F8F9FF
Card bg:       #FFFFFF
Border:        #E2E8F0
Primary action:#7B2FBE (purple CTA buttons)
Danger:        #EF4444 (delete buttons)
Success:       #10B981 (status: delivered)
```

### Key Admin Rules
- Every action has a confirmation dialog ("Are you sure?") before deleting
- All forms have clear labels with helper text
- Status badges are color-coded: `Pending=yellow`, `Delivered=green`, `Cancelled=red`
- Tables have sorting (by date, by status) via simple click-on-header
- Images: Drag & drop upload with preview before save

---

## 7. DARK MODE IMPLEMENTATION

### CSS Variable Strategy
```css
/* Applied to :root by default (light mode) */
:root {
  --bg-primary: #FFFFFF;
  --bg-surface: #F8F9FF;
  --text-primary: #0F172A;
  --text-muted: #475569;
}

/* Applied when <html class="dark"> */
.dark {
  --bg-primary: #0F0F23;
  --bg-surface: #16163A;
  --text-primary: #F1F5F9;
  --text-muted: #94A3B8;
}
```

### Transition Rule
```css
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
```

### Toggle Logic (React)
```javascript
const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('nova_theme', newTheme);
};
```
