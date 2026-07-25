# NovaHub — Key Decisions Deep Dive

Before writing a single line of code, lock these down. Each one affects architecture, pricing, and the client relationship.

---

## 1. Payment Gateway: Which One?

This is **the most critical decision** — it affects your backend architecture, checkout UX, and whether Shiv can even receive payments legally.

### Comparison

| Factor | Razorpay | Cashfree | PhonePe Business |
|--------|----------|----------|-----------------|
| **Setup Fee** | Free | Free | Free |
| **TDS/Commission** | 2% per transaction | 1.75-1.90% per txn | 0% UPI, 1.99% cards |
| **KYC Difficulty** | Medium — needs PAN, bank, business proof | Easy — accepts individual accounts | Easy for UPI, strict for cards |
| **UPI Support** | ✅ Yes | ✅ Yes | ✅ Yes (native) |
| **Cards/Netbanking** | ✅ Full support | ✅ Full support | ⚠️ Limited |
| **International Payments** | ✅ (needs activation) | ✅ (needs activation) | ❌ No |
| **Checkout UI** | Beautiful, customizable | Clean, functional | Basic |
| **Test Mode** | ✅ Full sandbox | ✅ Full sandbox | ⚠️ Limited |
| **Next.js SDK** | ✅ Official npm package | ✅ Official npm package | ⚠️ No official SDK, REST only |
| **Dashboard** | Excellent — analytics, settlements, refunds | Good | Basic |
| **Settlement Time** | T+2 days | T+1 to T+3 days | T+1 to T+2 days |
| **Dispute Handling** | Built-in chargeback management | Basic | Minimal |

### ⚡ My Recommendation: **Razorpay**

**Why Razorpay wins for this project:**

1. **Best developer experience** — official Node.js SDK, excellent docs, real sandbox for testing
2. **Checkout modal is premium-looking** — matters for a trust-sensitive site like this
3. **Handles everything** — UPI, cards, wallets, netbanking in one integration
4. **If Shiv later gets international customers** (he's UK-based), Razorpay supports it
5. **Dashboard is powerful** — Shiv can see orders, settlements, refunds without you building it

**The KYC Problem:**
> [!WARNING]
> Razorpay requires **business verification**. Shiv will need:
> - PAN card
> - Bank account (savings is fine for sole proprietor)
> - Business proof (GST is optional for under ₹20L turnover — a simple declaration works)
> - Address proof
>
> **Ask Shiv NOW if he has these.** If he doesn't have PAN/bank in India (he's UK-based), this becomes complicated. You may need to use **Cashfree** instead, which accepts individual accounts more easily.

**Fallback: Cashfree** — if Razorpay KYC fails, Cashfree has lower barriers and slightly cheaper rates.

### What to Ask Shiv
```
"Shiv, for payment integration I need to know:
1. Do you have an Indian PAN card and bank account? (Razorpay needs this)
2. Is this registered as a business or running individually?
3. Do you need international payments (cards from UK customers)?
4. What's your preferred UPI ID for receiving settlements?"
```

---

## 2. Domain & Hosting: Who Owns What?

> [!IMPORTANT]
> **Golden Rule: The client ALWAYS owns the domain and hosting accounts.** Never register these under your name — it creates dependency and potential legal issues.

### Domain

| Decision | Recommendation | Why |
|----------|---------------|-----|
| **Who buys it?** | Shiv buys it himself | He owns the asset; you don't want to be the middleman |
| **Where to buy?** | Namecheap or GoDaddy | Namecheap is cheaper; GoDaddy is easier for non-tech users |
| **Cost** | ~₹800-1,200/year for .com | Very affordable |
| **Who configures DNS?** | You (point to Vercel) | Simple — just add Vercel's nameservers or CNAME |

### Hosting

| Component | Where | Cost | Who Owns the Account |
|-----------|-------|------|---------------------|
| **Frontend** | Vercel (Free tier) | ₹0 | Create under Shiv's email |
| **Database + Auth** | Supabase (Free tier) | ₹0 | Create under Shiv's email |
| **Image Storage** | Supabase Storage or Cloudinary (free tier) | ₹0 | Same Supabase account |
| **Email (optional)** | Resend or Brevo free tier | ₹0 | Shiv's account |

**Total hosting cost for Shiv: ₹0/month** (on free tiers — enough for a small-medium business)

### What to Tell Shiv
```
"Shiv, you need to:
1. Buy a domain (I'll suggest names) — costs around ₹800-1200/year
2. Create a Gmail account for the business (e.g., novahub.business@gmail.com)
3. I'll set up hosting under that email — it's free

You'll own everything. If you ever want to switch developers, 
you keep the domain, hosting, and all data."
```

> [!TIP]
> **Pro move:** Setting up hosting under the client's account builds trust AND protects you. If Shiv disappears without paying, you haven't lost anything. If you set it up under your account, he'll say "you're holding my website hostage."

---

## 3. Admin Panel: How Smart Should It Be?

Shiv is a **2nd year college student, not a developer.** The admin panel needs to be **dead simple** — think Instagram-level ease of use, not WordPress.

### What Shiv Needs to Manage Himself

| Feature | UI Approach | Complexity |
|---------|------------|------------|
| **Add/Edit Products** | Simple form: name, description, price, image upload, category dropdown | Medium |
| **Manage Flash Sales** | Select product → set discount % → set start/end date → toggle active | Medium |
| **Upload Payment Proofs** | Drag-and-drop image upload with caption | Low |
| **Add Testimonials** | Form: customer name, text, rating (1-5 stars), optional image | Low |
| **View Orders** | Table: customer name, product, amount, payment status, date | Low |
| **Toggle Pop-up** | On/off switch + text editor for pop-up message | Low |

### Design Principles for the Admin Panel

1. **No code, no config files** — everything through UI forms
2. **Image upload with preview** — he should see what he's uploading
3. **Status toggles** — green = active, red = inactive, one click to switch
4. **Mobile-friendly admin** — Shiv might manage from his phone
5. **Validation & error messages** — "Price must be a number", "Image too large"

### Build vs Buy Decision

| Option | Pros | Cons |
|--------|------|------|
| **Custom admin dashboard** ✅ | Exactly what Shiv needs, no bloat, branded | More dev time (~15-20 hrs) |
| **Strapi / Payload CMS** | Pre-built CRUD, fast setup | Needs separate hosting, overkill for this, learning curve for Shiv |
| **Supabase Studio directly** | Zero dev effort | Ugly, confusing for non-technical users, exposes raw database |
| **WordPress backend** | Shiv might already know it | Terrible DX, mismatched with Next.js frontend |

**Recommendation: Custom admin dashboard** — it's more work but delivers the best client experience. Build it as protected routes inside the same Next.js app (`/admin/*`), authenticated via Supabase Auth.

### Admin Page Structure

```
/admin
├── /admin/login          → Email/password login
├── /admin/dashboard      → Overview: total products, active sales, recent orders
├── /admin/products       → List all products → Add/Edit/Delete
├── /admin/flash-sales    → List sales → Create new sale with countdown
├── /admin/testimonials   → List proofs/reviews → Upload new
├── /admin/orders         → View orders table with payment status
└── /admin/settings       → Pop-up toggle, site name, contact info
```

---

## 4. Maintenance & Post-Launch Support

> [!CAUTION]
> This is where most freelancers get burned. If you don't set clear boundaries now, Shiv will message you at 2 AM for months asking for "small changes" — for free.

### Define the Handoff Clearly

| What's Included in ₹40K | What's NOT Included |
|--------------------------|---------------------|
| ✅ Full website development | ❌ Adding new features after launch |
| ✅ Payment integration & testing | ❌ Content writing (product descriptions) |
| ✅ Admin panel | ❌ Ongoing SEO management |
| ✅ 1 round of design revisions | ❌ Bug fixes after 30-day warranty |
| ✅ Deployment + domain setup | ❌ Server scaling if traffic grows |
| ✅ 30-day bug fix warranty | ❌ Marketing / social media |
| ✅ Basic SEO setup | ❌ Payment gateway account management |

### Maintenance Contract Options

| Tier | What's Covered | Monthly Price |
|------|----------------|--------------|
| **No Contract** | Nothing after 30-day warranty | ₹0 |
| **Basic Support** | Bug fixes + minor text/image updates (up to 2 hrs/month) | ₹2,000/month |
| **Growth Support** | Bug fixes + 1 new feature/month + SEO monitoring | ₹5,000/month |

### What to Tell Shiv
```
"After launch, I'll give you 30 days free support for any bugs.
After that, if you need changes or new features, we can do a 
monthly support plan starting at ₹2,000/month, or you can 
pay per change. We'll discuss this after launch — no pressure."
```

> [!TIP]
> Don't push the maintenance contract now — it'll scare a budget-conscious client. Mention it casually. Once the site is live and making money, he'll **want** support and pay for it gladly.

---

## 5. Content: Who Writes What?

### Content the Client Must Provide
- ✍️ Product names and descriptions (he knows his products better than you)
- 📸 Product images / logos of AI tools
- 💰 Pricing for each product
- 📸 Payment proof screenshots
- 📝 Customer testimonials (real or his existing ones)
- 📋 Business details (about us, contact info, refund policy)
- 🔗 Social media links

### Content You Should Create
- 🎨 Website copy (hero headlines, CTAs, section titles)
- 📐 UI placeholder text during demo
- 🔍 SEO metadata (title tags, meta descriptions, alt texts)
- ⚖️ Terms & Conditions template (basic — suggest he gets it reviewed)
- 🔒 Privacy Policy template (required for payment gateways)

### What to Tell Shiv
```
"For the demo I'll use placeholder text. But for the final site, 
I need you to send me:
- Product names, prices, and short descriptions for each tool
- Screenshots of payment proofs
- Any customer reviews you have
- A short 'About Us' paragraph

I'll handle the website copywriting, SEO, and design."
```

---

## 6. Legal Protection — Don't Skip This

You're college students, but this is still a **commercial transaction.** A simple agreement protects both sides.

### Minimum Viable Contract (Send via WhatsApp/Email)

```
PROJECT AGREEMENT — NovaHub Website

Client: Shiv ([last name])
Developer: Sayanth + team

Scope:
- Full-stack website with product listing, payment integration, 
  flash sales, testimonials, and admin panel
- SEO optimization

Timeline:
- Demo: 2-3 days from receiving brand assets
- Full build: 7-10 days after demo approval

Pricing: ₹40,000
- ₹10,000 on demo approval
- ₹15,000 on backend + admin panel completion
- ₹15,000 on final launch

Terms:
- Up to 2 rounds of design revisions included
- 30-day free bug fix warranty after launch
- Client owns all code, domain, and hosting accounts
- Additional features beyond agreed scope will be quoted separately

Payment: UPI / Bank Transfer
```

> [!IMPORTANT]
> **Even if you don't do a formal contract, send this as a WhatsApp message and get Shiv to reply "Agreed" or "Okay."** That screenshot is your proof if anything goes wrong.

---

## 7. Tech Stack — Final Confirmation

### Why Each Choice Matters

| Decision | Choice | Alternative | Why This One Wins |
|----------|--------|-------------|------------------|
| **Framework** | Next.js 14 (App Router) | React + Express | SSR for SEO (you pitched SEO/GEO), API routes built-in, no separate backend server |
| **Styling** | Tailwind CSS v4 | Vanilla CSS | Speed of development — you have 2-3 days for demo. Tailwind is 3x faster for building UIs |
| **Animations** | Framer Motion | CSS animations | Pop-up, flash sale countdowns, hover effects — Framer Motion makes these trivial |
| **Database** | Supabase (Postgres) | MongoDB Atlas / PlanetScale | Free tier is generous (500MB), built-in auth, Row Level Security, real-time subscriptions for admin |
| **Auth** | Supabase Auth | NextAuth / Clerk | Already using Supabase for DB — same ecosystem, zero extra config |
| **Payments** | Razorpay | Stripe / Cashfree | Indian-focused, best checkout UI, handles UPI natively |
| **File Storage** | Supabase Storage | Cloudinary / S3 | Product images + payment proofs — free 1GB, same dashboard as DB |
| **Hosting** | Vercel | Netlify / Railway | Native Next.js support, free SSL, instant deploys, preview URLs for client review |
| **SEO** | Next.js Metadata API | Yoast / manual tags | Built-in, SSR-rendered, supports OpenGraph, structured data, sitemap generation |

### Database Schema (Preview)

```sql
-- Products
products (id, name, description, price, discounted_price, image_url, 
          category, is_active, created_at)

-- Flash Sales
flash_sales (id, product_id, discount_percent, original_price, 
             sale_price, starts_at, ends_at, is_active, popup_text)

-- Testimonials & Proofs
testimonials (id, customer_name, review_text, rating, 
              proof_image_url, is_verified, created_at)

-- Orders
orders (id, customer_name, customer_email, customer_phone, 
        product_id, amount, razorpay_payment_id, status, created_at)

-- Admin Users
admin_users (id, email, password_hash, role, created_at)

-- Site Settings
site_settings (id, key, value)
-- e.g., ("popup_enabled", "true"), ("popup_message", "Flash Sale!")
```

---

## Summary: Decision Checklist to Resolve with Shiv

| # | Question to Ask Shiv | Why It Matters |
|---|---------------------|----------------|
| 1 | Do you have Indian PAN + bank account? | Determines if Razorpay KYC is possible |
| 2 | Have you bought a domain? Any name preference? | Needed before deployment |
| 3 | Create a business Gmail for hosting accounts | All accounts go under this email |
| 4 | Will you manage the admin panel yourself? | Determines how simple we make the UI |
| 5 | Send me your product list with prices | Needed for demo |
| 6 | Send logo in PNG/SVG, brand color preferences | Needed for demo |
| 7 | Do you need international payments? | Affects gateway choice |
| 8 | Confirm ₹40K total with milestone payments | Lock in before starting work |
