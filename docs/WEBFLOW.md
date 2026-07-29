# NOVAHUB — WEBFLOW (USER JOURNEY MAPS)
### Page-by-Page Flow · Read BRAIN.md + PRD.md before this

---

## 0. DOCUMENT PURPOSE

This document maps every user journey through NovaHub — from first landing to purchase to delivery. Defines every screen/state, interaction triggers, animation timings, and decision trees.

**Rule:** Before building any page or component, trace the user journey here first.

---

## 1. FLOW A: First-Time Visitor ? Purchase

### Entry Point: Google / Social ? Homepage

```
[User lands on /?utm_source=google]
        ?
[Announcement bar loads immediately — black, Indigo border, marquee scrolling]
  "? FLASH SALE · FREE SHIPPING ABOVE ?499 ? GENUINE LICENSES ? INSTANT DELIVERY"
        ?
[Hero section animates in — 300ms stagger]
  - Badge fades in           (0ms delay)
  - H1 slides up             (100ms delay)
  - Body copy slides up      (200ms delay)
  - CTA buttons scale in     (300ms delay)
  - Stats row fades in       (400ms delay)
  - Floating product logos   (500ms+, staggered per card)
        ?
[After 3 seconds on page]
  ? Flash Sale Pop-up appears (Framer Motion scale 0.8?1.0, opacity 0?1, 300ms)
  ? Backdrop blur activates
        ?
[User closes pop-up (X or "No thanks")]
  ? Modal dismisses (scale 1.0?0.9, opacity 1?0, 200ms)
  ? localStorage.setItem('nova_popup_shown', 'true')
  ? Never shows again this session
        ?
[User scrolls down]
  ? Nav becomes glassmorphic (bg rgba(255,255,255,0.85) + backdrop-blur-md, 200ms)
  ? Live Purchase Notification appears bottom-left: slides in from left
  ? "?? Arjun from Mumbai just bought Adobe CC · 1 min ago"
  ? Cycles every 4s
        ?
[Scroll reaches Flash Sale section]
  ? Section fades up into view (Framer Motion opacity:0+translateY(40px) ? in, 600ms)
  ? Countdown timer animates per second
  ? Product cards stagger in (80ms delay per card)
  ? Cards show pulsing ? FLASH DEAL badge
        ?
[User hovers over product card]
  ? Card lifts: translateY(-6px), shadow deepens (300ms cubic-bezier(0.4,0,0.2,1))
  ? Card image zooms: scale(1.04) inside overflow:hidden (500ms cubic-bezier(0.25,0.46,0.45,0.94))
  ? Flipkart green rating pill (#388E3C) glows slightly
        ?
[User scrolls to Category rows]
  ? Each row fades up on scroll entry
  ? Cards stagger in (80ms delay per card per row)
  ? Embla carousel: drag horizontally OR use scroll wheel (embla-wheel-gestures)
        ?
[User clicks "Buy Now" on a product card]
  ? Navigates to /products/[slug]
```

---

## 2. FLOW B: Product Detail Page ? Checkout

```
[User lands on /products/chatgpt-plus]
        ?
[Page loads]
  - Breadcrumb: Home > Products > ChatGPT Plus
  - Product logo (large) + Name + "Verified ?" badge
  - Price block: ?999 (large bold) / ?2,499 crossed out / "60% OFF" (#EB5757 badge)
  - Star rating: ????? (4.9) + Flipkart green rating pill
  - Short description
  - "How It Works" 3-step flow
        ?
[User clicks "Buy Now"]
  ? Checkout form slides in (or appears below on mobile)
  ? Fields: Full Name | Email | WhatsApp | Coupon Code
        ?
[Coupon code entered]
  ? 500ms debounce ? API: GET /api/verify-coupon?code=NOVA20
        ?
  +-- [Valid]: "? NOVA20 applied — ?200 off" + price animation
  +-- [Invalid]: "? Invalid or expired" — field shakes translateX(±4px) × 3
        ?
[User clicks "Proceed to Pay"]
  ? Form validation (client-side)
  ? IF valid: Razorpay modal opens [Phase 2]
  ? IF invalid: Errors slide down below each field
        ?
[Razorpay Modal — Phase 2]
  +-- [Payment Success]
  ¦   ? Success overlay (checkmark animation)
  ¦   ? "?? Order Confirmed! #NOV-2025-001"
  ¦   ? "Credentials to [email] within 15 minutes"
  ¦   ? Supabase order created (status: Pending)
  ¦   ? Shiv notified via WhatsApp/Telegram
  +-- [Payment Failed]
      ? Toast: "Payment not completed. Please try again."
      ? "Try Again" ? reset to checkout form
```

---

## 3. FLOW C: Mobile UPI Purchase (Most Common)

```
[User on Android Chrome — 375px]
        ?
[Hamburger tap ? full-screen slide-down nav]
  - Full-screen overlay, backdrop-blur
  - Links stack vertically centered
  - Hamburger ? X rotation (CSS transform)
        ?
[OR — user taps "Buy Now" on product card in category scroll]
  ? Touch-drag horizontal scroll (Embla touch)
  ? Product detail page: single-column stacked layout
        ?
[User taps "Proceed to Pay"]
  ? Razorpay opens [Phase 2]
  ? Android: GPay / PhonePe / Paytm listed
  ? UPI intent fires ? external payment app
  ? Returns to NovaHub ? Success screen
```

---

## 4. FLOW D: WhatsApp Inquiry (Trust-first users)

```
[User sees floating WhatsApp FAB (bottom-right, always visible, pulsing ring)]
  ? Taps button ? scale(1.1) + green glow
  ? Opens: wa.me/[NUMBER]?text=Hi%20NovaHub!%20I%20want%20to%20know%20more
        ?
[WhatsApp opens]
  ? Pre-filled message
  ? Shiv responds manually
  ? Order via WhatsApp + Razorpay link (manual flow)
```

---

## 5. FLOW E: Admin — Add / Update Product

```
[Shiv opens browser ? novahub.in/admin]
        ?
[Not logged in ? /admin/login]
  ? Email + Password form
  ? Supabase Auth [Phase 2]
        ?
[Admin Dashboard — always light mode]
  ? Stats: Orders Today | Revenue Today | All-time
  ? Recent orders table
        ?
[Shiv ? Products ? Edit "ChatGPT Plus"]
  ? Modal opens with current values
  ? Shiv updates price: ?999 ? ?899 ? Save
  ? Supabase updates ? Toast: "? Updated successfully"
  ? Live site reflects new price (ISR revalidation)
```

---

## 6. FLOW F: Flash Deal Discovery

```
[User sees announcement bar]
  "? FLASH SALE: ChatGPT Plus at ?999 · Ends in 02:14:33"
        ?
[User clicks announcement bar]
  ? Smooth-scroll to Flash Sale section
  ? Section animates into view (Framer Motion useInView)
        ?
[OR — User clicks "Flash Deals" in nav]
  ? /flash-deals page [Phase 2]
  ? All flash deals, per-card countdown
        ?
[Timer reaches 00:00:00]
  ? Card grays out
  ? Badge: "FLASH SALE" ? "DEAL ENDED"
  ? Buy button disabled
```

---

## 7. FLOW G: Coupon Code Redemption

```
[Checkout form visible]
  ? User enters: NOVA20
  ? 500ms debounce ? API call
        ?
  +-- [Valid]
  ¦   ? Green ? checkmark
  ¦   ? "20% discount applied"
  ¦   ? Price animates: ?999 ? ?799
  +-- [Invalid]
        ? Red ? + "Invalid or expired coupon"
        ? Field shake: translateX(±4px) × 3 times
        ?
[User clicks Proceed to Pay]
  ? Discounted amount ? Razorpay [Phase 2]
```

---

## 8. FLOW H: Admin Order Fulfillment

```
[Razorpay webhook fires]
  ? Server validates signature
  ? Supabase order created: {order_id, customer, email, whatsapp, product, amount, status: "pending"}
        ?
[Shiv ? WhatsApp notification]
  "New order: Arjun Kumar bought ChatGPT Plus ?999. WhatsApp: +91-XXXXXXXXXX"
        ?
[Shiv ? Admin ? Orders]
  ? Finds row ? Sends credentials (email/WhatsApp)
  ? Status: Pending ? Delivered
  ? Dashboard updates
```

---

## 9. PAGE TRANSITION ANIMATIONS

```javascript
// Framer Motion page variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in:      { opacity: 1, y: 0,  transition: { duration: 0.3, ease: 'easeOut' } },
  out:     { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } }
};

// Scroll-triggered section reveals (Xbox pattern — implemented)
const sectionVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25,0.46,0.45,0.94] } }
};

// Card stagger (implemented in flash-sale and category scroll)
const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } })
};
```

---

## 10. MICRO-INTERACTION CATALOG (UPDATED)

| Element | Trigger | Animation | Values |
|---------|---------|-----------|--------|
| CTA Button | Hover | Color invert (Urban Monkey) | `bg transparent, border visible, 200ms ease` |
| CTA Button | Click | Scale press | `scale(0.97)?scale(1.0)`, `100ms` |
| Product Card | Hover | Lift + shadow | `translateY(-6px)`, `300ms cubic-bezier(0.4,0,0.2,1)` |
| Product Card Image | Hover | Cinematic zoom | `scale(1.04)`, `500ms cubic-bezier(0.25,0.46,0.45,0.94)` |
| Nav Links | Hover | Color shift | `text-primary`, `200ms ease` |
| Accordion FAQ | Click | Height reveal | `0?auto`, Framer Motion AnimatePresence |
| FAQ Chevron | Click | Rotation | `0°?180°`, `200ms ease` |
| Pop-up Modal | Open | Scale + fade | `scale(0.8?1.0)`, `opacity(0?1)`, `300ms spring` |
| Pop-up Modal | Close | Scale + fade | `scale(1.0?0.9)`, `200ms easeIn` |
| Toast | Appear | Slide in left | `x:-100%?0`, `400ms spring` |
| Toast | Disappear | Slide out left | `x:0?-100%`, `300ms ease` |
| Coupon Invalid | Submit | Field shake | `translateX(±4px)×3` |
| Price (coupon) | Apply | Count animation | Number counts down |
| Theme Toggle | Click | Icon crossfade | `300ms ease` |
| Hamburger | Tap | ? X rotation | `transform rotate`, `200ms ease` |
| WhatsApp FAB | Hover | Scale + glow | `scale(1.1)`, green glow shadow |
| Flash Badge | Persistent | Pulse | `opacity 1?0.7?1`, `1500ms ease-in-out` infinite |
| Section reveal | Scroll enter | Fade up | `opacity:0+Y(40)?in`, `600ms`, stagger `80ms` |
| Announcement bar | Always | Marquee scroll | `20s linear infinite` |
| Nav | Scroll past hero | Glassmorphic | `bg rgba + backdrop-blur`, `200ms ease` |

---

## 11. ERROR STATES

| Scenario | User Sees |
|---------|----------|
| Product out of stock | Button disabled, "Currently Unavailable" badge |
| Payment failed | "Payment incomplete. Please try again." + retry |
| Network error | "Connection issue. Check your network." |
| Invalid coupon | "Invalid or expired" — red + field shake |
| Admin wrong password | "Incorrect email or password" (no hint which) |
| Product image missing | Gradient `#454AD3` placeholder with "N" |
| Page 404 | "This page went into orbit. Go home." |

---

## 12. PERFORMANCE FLOW

```
[User navigates]
  ? Next.js SSR/SSG HTML served (FCP < 1.0s)
  ? Outfit font loaded (preconnect + display:swap)
  ? Hero LCP target: < 2.5s
  ? Framer Motion: will-change: transform (GPU-accelerated)
  ? Below-fold: loading="lazy" on all images
  ? Logo images: Google Favicon API (no clearbit — blocked)
```
