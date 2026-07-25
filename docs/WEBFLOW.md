# NOVAHUB — WEBFLOW (USER JOURNEY MAPS)
### Page-by-Page Flow · Read BRAIN.md + PRD.md before this

---

## 0. DOCUMENT PURPOSE

This document maps every user's journey through NovaHub — from first landing to purchase to delivery. It defines:
- Every screen/state the user sees
- Every interaction that triggers a state change
- Exact animation timings for transitions
- Decision trees (what happens if X goes wrong?)

**Rule:** Before building any page or component, trace the user's journey through this document to understand context.

---

## 1. FLOW A: First-Time Visitor → Purchase

### Entry Point: Google Search / Social Link → Homepage

```
[User lands on /?utm_source=google]
        ↓
[Announcement bar loads immediately]
  "⚡ FLASH SALE: ChatGPT Plus at ₹999 — 60% OFF · Ends in 23:12:45"
        ↓
[Hero section animates in — 0.3s stagger delay]
  - Badge fades in (0ms)
  - H1 slides up (100ms)
  - Body copy slides up (200ms)
  - CTA buttons scale in (300ms)
  - Stats row fades in (400ms)
  - Floating product cards animate in (500ms - staggered)
        ↓
[After 3 seconds on page]
  → Flash Sale Pop-up appears (Framer Motion scale 0.8→1.0, opacity 0→1)
  → Backdrop blur activates
        ↓
[User closes pop-up (X or "No thanks")]
  → Modal dismisses (scale 1.0→0.8, opacity 1→0)
  → localStorage.setItem('nova_popup_shown', true)
  → Never shows again this session
        ↓
[User scrolls down]
  → Live Purchase Notification appears at bottom-left
  → "🔔 Arjun from Mumbai just bought Adobe CC · 1 min ago"
  → Cycles every 4 seconds through fake purchases
        ↓
[User sees Flash Sale section]
  → Countdown timer animates per second
  → Cards have pulsing red "FLASH SALE" badge
        ↓
[User sees Netflix-scroll product rows]
  → Swipes horizontally (mobile) or uses arrow buttons (desktop)
  → Hovers over product card → card lifts (translateY -4px) + shadow deepens
        ↓
[User clicks "Buy Now" on a product card]
  → Navigates to /products/[slug]
```

---

## 2. FLOW B: Product Detail Page → Checkout

```
[User lands on /products/chatgpt-plus]
        ↓
[Page loads]
  - Breadcrumb: Home > Products > ChatGPT Plus
  - Product logo (large) + Name + "Verified ✓" badge
  - Price block: ₹999 (large, bold) / ₹2,499 crossed out / "60% OFF" badge (red)
  - Star rating: ★★★★★ (4.9)
  - Short description
  - "How It Works" 3-step flow
        ↓
[User clicks "Buy Now" button]
  → Checkout form slides in from right (or appears below on mobile)
  → Fields: Full Name | Email Address | WhatsApp Number | Coupon Code
        ↓
[Coupon code entered]
  → Instant API call to verify coupon
  → IF valid: "✅ NOVA20 applied — ₹200 off" + price updates
  → IF invalid: "❌ Invalid coupon code" (red text, field shakes animation)
        ↓
[User clicks "Proceed to Pay"]
  → Form validation runs (client-side)
  → IF valid: Razorpay modal opens
  → IF invalid: Error messages appear below each field (slide down animation)
        ↓
[Razorpay Modal Opens]
  → Pre-filled with: amount (in paise), name, email, contact
  → User selects payment method: UPI / Cards / Net Banking
        ↓
        ├── [Payment Success]
        │     ↓
        │   Razorpay modal closes
        │   → Success overlay appears (Framer Motion confetti or checkmark animation)
        │   → "🎉 Order Confirmed! #NOV-2025-001"
        │   → "Your credentials will be sent to [email] within 15 minutes"
        │   → WhatsApp link: "Track on WhatsApp"
        │   → Supabase order record created (status: "Pending")
        │   → Shiv receives WhatsApp/Telegram notification
        │
        └── [Payment Failed]
              ↓
            Razorpay modal closes
            → Error toast: "Payment was not completed. Please try again."
            → "Try Again" button resets to checkout form
```

---

## 3. FLOW C: Mobile-First UPI Purchase (Most Common Indian User)

```
[User opens site on Android Chrome at 375px width]
        ↓
[Hamburger menu — user taps it]
  → Full-screen slide-down nav (backdrop-blur + dark overlay)
  → Links: Home | Products | Flash Deals | About | WhatsApp
        ↓
[User taps WhatsApp icon in nav]
  → Opens wa.me/[Shiv's number]?text=Hi+NovaHub+I+want+to+order
        ↓
[OR — user taps "Buy Now" on a product card in the horizontal scroll row]
  → Product detail page loads
  → Single-column layout (stacked)
        ↓
[User taps "Buy Now"]
  → Checkout form appears (full-width stacked fields)
  → Keyboard pushes form up (iOS/Android scroll fix applied)
        ↓
[User enters details]
  → Taps "Proceed to Pay"
  → Razorpay modal opens
  → [Android] UPI apps listed: GPay, PhonePe, Paytm
  → User selects GPay → UPI intent fires → GPay opens
        ↓
[User completes payment in GPay]
  → Returns to NovaHub
  → Success screen appears
```

---

## 4. FLOW D: WhatsApp Inquiry (Trust-first users)

```
[User sees floating WhatsApp button (bottom-right, always visible)]
  → Taps button
  → Opens: wa.me/[NUMBER]?text=Hi%20NovaHub!%20I%20want%20to%20know%20more%20about%20[PRODUCT]
        ↓
[WhatsApp opens on their phone]
  → Pre-filled message: "Hi NovaHub! I want to know more about [product]"
  → Shiv responds manually
  → Order completes via WhatsApp + manual Razorpay link
```

---

## 5. FLOW E: Admin — Add / Update Product

```
[Shiv opens browser → navigates to novahub.in/admin]
        ↓
[Not logged in — redirected to /admin/login]
  → Simple login form: Email + Password
  → Logs in with Supabase Auth
        ↓
[Admin Dashboard loads]
  → Stats: Today's Orders | Today's Revenue | All-time Orders
  → Recent orders table
        ↓
[Shiv clicks "Products" in admin sidebar]
  → Product table loads: Name | Category | Price | Status | Actions
        ↓
[Shiv clicks "Edit" on ChatGPT Plus]
  → Inline modal opens with current values pre-filled
  → Shiv updates price: ₹999 → ₹899
  → Clicks "Save"
  → Supabase row updates
  → Toast: "✅ Product updated successfully"
  → Live site reflects new price immediately (ISR revalidation)
```

---

## 6. FLOW F: Flash Deal Discovery

```
[User sees announcement bar at top]
  "⚡ FLASH SALE: ChatGPT Plus at ₹999 · Ends in 02:14:33"
        ↓
[User clicks the announcement bar text]
  → Smooth scroll to Flash Sale section on homepage
  → Flash Sale section animates into view (Framer Motion useInView)
        ↓
[OR — User clicks "Flash Deals" in navigation]
  → Navigates to /flash-deals page
  → All current flash deals listed in a grid
  → Countdown timer per deal
        ↓
[Timer reaches 00:00:00]
  → Deal card grays out
  → Badge changes: "FLASH SALE" → "DEAL ENDED"
  → Buy button disables
```

---

## 7. FLOW G: Coupon Code Redemption

```
[User on product detail page]
        ↓
[User clicks "Buy Now" → Checkout form appears]
        ↓
[Coupon field is visible (but not mandatory)]
  → User enters: NOVA20
  → After 0.5s debounce → API call: GET /api/verify-coupon?code=NOVA20
        ↓
        ├── [Valid coupon]
        │   → Green checkmark appears next to field
        │   → "✅ 20% discount applied"
        │   → Price block updates: ₹999 → ₹799 (with animation)
        │
        └── [Invalid coupon]
              → Red X appears next to field
              → "❌ Invalid or expired coupon"
              → Field shakes (CSS animation: translateX ±4px, 3 times)
        ↓
[User clicks "Proceed to Pay"]
  → Discounted amount passed to Razorpay order creation API
```

---

## 8. FLOW H: Admin — Order Fulfillment

```
[Razorpay webhook fires after payment]
        ↓
[Server validates webhook signature]
        ↓
[Supabase order record created]:
  {
    order_id: "NOV-2025-001",
    customer_name: "Arjun Kumar",
    email: "arjun@gmail.com",
    whatsapp: "+91-9876543210",
    product: "ChatGPT Plus",
    amount: 999,
    status: "pending",
    created_at: "2025-01-15T14:23:00Z"
  }
        ↓
[Shiv receives WhatsApp notification] (manual or Twilio)
  "New order: Arjun Kumar bought ChatGPT Plus ₹999. WhatsApp: +91-9876543210"
        ↓
[Shiv opens admin → Orders]
  → Finds the order row
  → Sends credentials to customer (email or WhatsApp)
  → Changes status: Pending → Delivered
  → Dashboard updates in real-time
```

---

## 9. PAGE TRANSITION ANIMATIONS

### Page-to-Page Navigation

```javascript
// Framer Motion page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in:      { opacity: 1, y: 0,  transition: { duration: 0.3, ease: 'easeOut' } },
  out:     { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn'  } }
};
```

### Scroll-Triggered Section Reveals

```javascript
// useInView — trigger when 20% of section is visible
const sectionVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};
```

### Card Hover States

```css
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 10. MICRO-INTERACTION CATALOG

| Element | Trigger | Animation |
|---------|---------|-----------|
| CTA Button | Hover | `scale(1.03)` + gradient glow pulse |
| CTA Button | Click | `scale(0.97)` → `scale(1.0)` spring |
| Product Card | Hover | `translateY(-4px)` + shadow deepens |
| Nav Links | Hover | Underline slides in from left |
| Accordion FAQ | Click | Height `0 → auto` with opacity |
| Pop-up Modal | Open | `scale(0.8) → scale(1.0)` + opacity |
| Pop-up Modal | Close | `scale(1.0) → scale(0.9)` + opacity |
| Toast Notification | Appear | Slides in from left |
| Toast Notification | Disappear | Slides out to left |
| Coupon Invalid | Shake | `translateX(±4px)` × 3 |
| Price Update (coupon) | Apply | Numbers count up/down with animation |
| Theme Toggle | Click | Smooth transition on all colors (0.3s) |
| Hamburger Menu | Tap | Top bar rotates to X, menu slides down |
| Live Ticker | Cycle | Slides in from left, fades out to right |
| Flash Badge | Persistent | `opacity 1 → 0.7 → 1` pulse, 1.5s loop |

---

## 11. ERROR STATES

| Scenario | User Sees |
|---------|----------|
| Product out of stock | Buy button disabled, badge: "Currently Unavailable" |
| Payment failed | "Payment incomplete. Please try again." + retry button |
| Network error on checkout | "Connection issue. Please check your network." |
| Invalid coupon | "Invalid or expired coupon code" — red, with field shake |
| Admin wrong password | "Incorrect email or password" (no hint which is wrong) |
| Product image missing | Gradient placeholder with NovaHub "N" icon |
| Page 404 | Custom NovaHub 404 page: "This page went into orbit. Go back home." |

---

## 12. PERFORMANCE FLOW

```
[User navigates to any page]
        ↓
[Next.js serves HTML from server (SSR/SSG)]
  → First Contentful Paint: < 1.0s
        ↓
[Fonts load from Google Fonts CDN (preconnected)]
  → No layout shift (font-display: swap + size-adjust)
        ↓
[Hero image loads via next/image]
  → WebP format, size-optimized for viewport
  → fetchpriority="high" set
        ↓
[LCP target: < 2.5s]
        ↓
[Below-fold images: loading="lazy"]
  → Only loaded when user scrolls near them
        ↓
[Framer Motion animations]
  → All use will-change: transform
  → GPU-accelerated
  → No layout-triggering properties
```
