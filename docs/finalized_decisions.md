# NovaHub — Finalized Decisions (Ready to Execute)

Based on your answers, here's the locked-in plan for each decision.

---

## 1. Payment Gateway — Razorpay (Beginner-Friendly Guide)

Since you've never worked with a payment gateway before, here's everything from zero.

### What is a Payment Gateway?
Think of it like a **middleman** between your website and the customer's bank. When a customer clicks "Pay Now":

```
Customer clicks Pay → Razorpay opens a payment popup → Customer pays via UPI/Card
→ Razorpay verifies payment → Sends confirmation to your website → Money goes to Shiv's bank
```

You never touch the customer's money or card details. Razorpay handles all the security.

### Why Razorpay for This Project

- ✅ Shiv has Indian PAN + bank account → KYC will pass
- ✅ Customers mostly pay via UPI → Razorpay supports UPI natively
- ✅ ₹ pricing only → no international gateway needed (for now)
- ✅ Beautiful checkout popup that builds trust
- ✅ Free to set up, only charges 2% per transaction (Shiv pays this from his sales)

### Step-by-Step: Setting Up Razorpay

#### Step 1: Create Account (Shiv does this)
1. Go to [razorpay.com](https://razorpay.com) → Sign up
2. Use Shiv's email and phone number
3. Choose **"Individual / Sole Proprietor"** (no company registration needed)

#### Step 2: Complete KYC (Shiv does this)
Documents Shiv needs to upload:
- PAN card (photo/scan)
- Bank account details (account number, IFSC)
- Address proof (Aadhaar / passport / utility bill)
- A brief business description: *"Online marketplace for AI tool subscriptions"*

> [!NOTE]
> KYC approval takes **1-3 business days**. Tell Shiv to do this NOW while you build the demo, so the gateway is ready when you need it.

#### Step 3: Get API Keys (You do this)
After KYC is approved:
1. Log into Razorpay Dashboard → Settings → API Keys
2. Generate **Test Mode** keys first (for development)
3. You'll get two keys:
   - `RAZORPAY_KEY_ID` (public — goes in frontend)
   - `RAZORPAY_KEY_SECRET` (private — goes in backend only, NEVER expose)

#### Step 4: How It Works in Your Code (Simplified)

```
Frontend (what customer sees):
1. Customer selects product → clicks "Buy Now"
2. Your code calls your backend API: "Create an order for ₹800"
3. Backend creates a Razorpay order → returns order ID
4. Frontend opens Razorpay checkout popup with that order ID
5. Customer pays via UPI/card
6. Razorpay sends payment confirmation to your backend
7. Backend verifies the payment signature → saves order to database
8. Customer sees "Payment Successful!" page
```

#### Step 5: Testing
- Razorpay has a **Test Mode** — fake payments, no real money moves
- Test UPI ID: `success@razorpay` (always succeeds)
- Test card: `4111 1111 1111 1111` (always succeeds)
- Switch to **Live Mode** only when the site launches

### Razorpay Costs (Shiv Pays These, Not You)

| Payment Method | Razorpay Fee | Example |
|---------------|-------------|---------|
| UPI | 2% | Customer pays ₹1000 → Shiv receives ₹980 |
| Debit Card | 2% | Same as above |
| Credit Card | 2% | Same |
| Netbanking | 2% | Same |

No monthly fees. No setup fees. Only pay-per-transaction.

### What to Tell Shiv Right Now

```
"Shiv, I need you to create a Razorpay account and complete KYC.
It takes 1-3 days to verify, so please do it now while I build the demo.

1. Go to razorpay.com → Sign up with your email
2. Choose 'Individual / Sole Proprietor'  
3. Upload PAN card and bank details
4. Write business description: 'Online marketplace for AI tool subscriptions'

It's free to set up. They only charge 2% per transaction.
Once you're verified, share the login with me and I'll connect it."
```

> [!IMPORTANT]
> **Ask Shiv one thing:** Does he have any international (UK) customers? If yes, you'll need to activate Razorpay's international payments later (requires additional documentation). For now, UPI-only is fine.

---

## 2. Domain & Hosting — You Buy, Transfer After Full Payment

### Domain Strategy

| Detail | Decision |
|--------|----------|
| **Who buys** | You (Sayanth) |
| **Registered under** | Your email — transfer to Shiv after full ₹40K payment |
| **Where to buy** | **Namecheap** (cheapest, good interface) |
| **Cost** | ~₹800-1,200/year for a .com domain |
| **Included in price** | Yes — part of the ₹40K package |

### Domain Name Suggestions (Ask Shiv to Pick)
Ask Shiv what his business is called. Based on the transcript, suggest:
- `novahub.in` or `novahub.co.in` (if Indian audience)
- `getnovahub.com`
- `novahubstore.com`
- Or whatever his brand name is

### Hosting Strategy

| Service | Account Owner | When to Transfer |
|---------|--------------|-----------------|
| **Vercel** (website hosting) | Your email | Transfer after full payment |
| **Supabase** (database + auth) | Your email | Transfer after full payment |
| **Razorpay** | Shiv's email directly | Already under his name |

### Transfer Process (After Full Payment)

**Vercel:**
1. Add Shiv's email as team member → Make him Owner → Remove yourself

**Supabase:**
1. Add Shiv's email to the organization → Transfer ownership → Remove yourself

**Domain (Namecheap):**
1. Unlock domain → Get authorization code → Send to Shiv → He initiates transfer to his account

> [!TIP]
> **This protects you.** If Shiv pays only ₹10K for the demo and disappears, you still control the domain and hosting. Once he pays the full ₹40K, you transfer everything — clean and fair.

### What to Put in the Contract
```
"Domain and hosting accounts are registered under the developer's 
name during development. Full ownership (domain, hosting, database, 
and all credentials) will be transferred to the client within 
7 days of receiving the final payment."
```

---

## 3. Admin Panel — So Simple a Non-Tech Person Can Use It

Since Shiv is not a developer and you want him to be **completely self-sufficient** (no calling you for product changes), the admin must feel like using Instagram or WhatsApp.

### Design Philosophy: "If it needs a manual, it's too complex"

### Every Screen Explained

#### 🔐 Login Page
- Just email + password. Nothing else.
- "Forgot Password" sends reset link
- No signup — you create the admin account during setup

#### 📊 Dashboard (First thing Shiv sees after login)
```
┌──────────────────────────────────────────────────┐
│  Welcome back, Shiv! 👋                          │
│                                                  │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐          │
│  │ 12      │  │ 3       │  │ ₹24,500 │          │
│  │Products │  │Active   │  │ Revenue │          │
│  │         │  │Sales    │  │ (month) │          │
│  └─────────┘  └─────────┘  └─────────┘          │
│                                                  │
│  Recent Orders                                   │
│  ┌────────────────────────────────────────┐      │
│  │ Rahul S.  │ ChatGPT │ ₹500 │ ✅ Paid  │      │
│  │ Priya M.  │ Gemini  │ ₹400 │ ✅ Paid  │      │
│  │ Amit K.   │ Lovable │ ₹800 │ ⏳ Pending│     │
│  └────────────────────────────────────────┘      │
└──────────────────────────────────────────────────┘
```

#### 📦 Products Page — "Add Product" is one form

```
┌──────────────────────────────────────────────────┐
│  Products                      [+ Add Product]   │
│                                                  │
│  ┌────────────────────────────────────────┐      │
│  │ 🖼️ ChatGPT │ ₹500 │ ✅ Active │ ✏️ 🗑️ │      │
│  │ 🖼️ Gemini  │ ₹400 │ ✅ Active │ ✏️ 🗑️ │      │
│  │ 🖼️ Lovable │ ₹1000│ ❌ Hidden │ ✏️ 🗑️ │      │
│  └────────────────────────────────────────┘      │
│                                                  │
│  Click ✏️ to edit, 🗑️ to delete                  │
│  Toggle Active/Hidden with one click             │
└──────────────────────────────────────────────────┘
```

**"Add Product" form — just 5 fields:**

| Field | Type | Example |
|-------|------|---------|
| Product Name | Text input | "ChatGPT Plus Subscription" |
| Description | Text area | "1 month ChatGPT Plus access..." |
| Price (₹) | Number input | 500 |
| Image | Drag & drop upload | chatgpt-logo.png |
| Category | Dropdown | AI Assistants / Design Tools / Other |

That's it. Click **"Save"** → product is live on the website. Click **toggle** → product is hidden.

#### 🔥 Flash Sales — Create a Sale in 30 Seconds

| Field | Type | Example |
|-------|------|---------|
| Select Product | Dropdown (from existing products) | "Lovable" |
| Discount (%) | Number input | 20 |
| Sale Price | Auto-calculated, shown instantly | ₹800 (was ₹1000) |
| Start Date | Date picker | July 25, 2026 |
| End Date | Date picker | July 30, 2026 |
| Show as Pop-up? | Toggle switch | ✅ Yes |
| Pop-up Text | Text input | "🔥 Flash Sale! 20% off Lovable — Limited Time!" |

Click **"Start Sale"** → pop-up appears on website, flash sale page updates, countdown starts.
When end date passes → sale **automatically deactivates**. Shiv doesn't need to do anything.

#### 💬 Testimonials — Upload Proof in One Click

| Field | Type | Example |
|-------|------|---------|
| Customer Name | Text input | "Rahul S." |
| Review | Text area | "Got my Gemini subscription within 5 minutes!" |
| Rating | Click 1-5 stars | ⭐⭐⭐⭐⭐ |
| Payment Proof Screenshot | Drag & drop image | screenshot.jpg |

Click **"Add"** → appears on website immediately.

#### 📋 Orders — Just a View, No Actions Needed

Read-only table showing all purchases:

| Customer | Product | Amount | Status | Date |
|----------|---------|--------|--------|------|
| Rahul S. | ChatGPT | ₹500 | ✅ Paid | Jul 24 |
| Priya M. | Gemini | ₹400 | ✅ Paid | Jul 23 |

Payment status is **auto-updated by Razorpay** — Shiv doesn't manually mark anything.

#### ⚙️ Settings — Site-Wide Controls

| Setting | Type | What It Does |
|---------|------|-------------|
| Site Name | Text | Changes header/footer name |
| Contact WhatsApp | Phone number | Updates the WhatsApp button on site |
| Contact Email | Email | Updates contact page |
| Show Pop-up | Toggle | Master switch for flash sale pop-up |
| About Us Text | Text area | Editable about section |

### Key Principle: Shiv Never Calls You for These

| Shiv Wants To... | He Does This Himself |
|-------------------|---------------------|
| Add a new product | Admin → Products → Add Product → fill form → Save |
| Change a price | Admin → Products → Edit → change number → Save |
| Start a flash sale | Admin → Flash Sales → Create → set discount & dates → Start |
| End a flash sale early | Admin → Flash Sales → Toggle off |
| Add payment proof | Admin → Testimonials → Upload screenshot → Save |
| Hide a product temporarily | Admin → Products → Toggle Active/Hidden |
| Change pop-up message | Admin → Flash Sales → Edit pop-up text → Save |
| Check recent orders | Admin → Orders → view table |

---

## 4. Maintenance — 6 Months Free (Critical Issues Only)

### What's Covered (Free for 6 Months)

| Issue Type | Covered? | Example |
|------------|---------|---------|
| **Site is down / not loading** | ✅ Yes | Server error, DNS issue |
| **Payment not working** | ✅ Yes | Razorpay integration breaks |
| **Page showing errors** | ✅ Yes | 500 error, blank page |
| **Database connection lost** | ✅ Yes | Supabase outage recovery |
| **Security vulnerability found** | ✅ Yes | Patch critical bugs |
| **SSL certificate expired** | ✅ Yes | Renew / fix HTTPS |

### What's NOT Covered (Even During 6 Months)

| Request Type | Covered? | Why Not |
|-------------|---------|---------|
| **"Add a new page"** | ❌ No | New feature, not maintenance |
| **"Change the design"** | ❌ No | Design revision, quote separately |
| **"Add a blog section"** | ❌ No | New feature |
| **"Change product images/prices"** | ❌ No — but Shiv does this himself | That's what the admin panel is for |
| **"The site is slow"** | ⚠️ Maybe | If it's a code bug, yes. If it's traffic-related scaling, no |
| **"Add a referral system"** | ❌ No | New feature, quote separately |

### Response Time Commitment

| Severity | Response Time | Example |
|----------|-------------|---------|
| 🔴 **Critical** (site down, payments broken) | Within 12 hours | Razorpay stopped working |
| 🟡 **Medium** (page error, UI glitch) | Within 48 hours | One page shows wrong layout |
| 🟢 **Low** (minor visual issues) | Within 1 week | Font looks different on one phone |

### After 6 Months

```
"After the 6-month free support period, maintenance will be 
available at ₹2,000/month (bug fixes + minor updates) or 
on a per-issue basis at mutually agreed rates."
```

---

## 5. Legal — Complete Protection (Contract Template)

Since you're operating as **individuals (not a registered business)**, you need a clear **Freelance Services Agreement**. Here's a legally sound approach:

### Format: Google Doc + PDF

1. Draft the agreement in **Google Docs** (easy to edit and share)
2. Once both sides agree, **export as PDF**
3. Both sign digitally (Shiv can use any e-signature — even typing "I agree" in email works as evidence in India under IT Act 2000)

### Complete Contract Template

> [!IMPORTANT]
> Below is a comprehensive agreement. Copy this to Google Docs, fill in the blanks, and share with Shiv for review.

---

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       FREELANCE WEBSITE DEVELOPMENT AGREEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Date: [DATE]
Agreement No: NOVA-2026-001

BETWEEN:

Developer (Service Provider):
  Name: Sayanth [LAST NAME]
  Email: [YOUR EMAIL]
  Phone: [YOUR PHONE]
  Address: [YOUR ADDRESS]
  
  Team Members: [FRIEND 1 NAME], [FRIEND 2 NAME]
  (Collectively referred to as "the Developer")

Client:
  Name: Shiv [LAST NAME]
  Email: [SHIV'S EMAIL]
  Phone: [SHIV'S PHONE]  
  Location: United Kingdom
  (Referred to as "the Client")

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PROJECT SCOPE

The Developer agrees to build a full-stack web application 
("the Website") with the following features:

1.1 Public-Facing Website:
  a) Homepage with hero section, featured products, and trust elements
  b) Products listing page with category filtering
  c) Individual product detail pages
  d) Flash sale / offers page with countdown timers
  e) Flash sale pop-up notification system
  f) Testimonials and payment proof section
  g) Contact page with WhatsApp integration
  h) Checkout page with Razorpay payment gateway

1.2 Admin Dashboard:
  a) Secure login system
  b) Product management (add, edit, delete, toggle visibility)
  c) Flash sale management (create, schedule, auto-expire)
  d) Testimonial and payment proof management
  e) Order viewing dashboard
  f) Site settings management (pop-up toggle, contact info)

1.3 Additional Services Included:
  a) Domain registration (1 year)
  b) Hosting setup (Vercel + Supabase free tiers)
  c) Razorpay payment gateway integration
  d) Basic SEO optimization (meta tags, sitemap, structured data)
  e) Mobile-responsive design
  f) SSL certificate (included with Vercel)

1.4 NOT Included in This Agreement:
  a) Content writing (product descriptions, about us text)
  b) Logo design (client provides logo)
  c) Social media marketing
  d) Email marketing setup
  e) Mobile application (iOS/Android)
  f) Blog section
  g) Referral/coupon system
  h) Multi-language support
  i) Any feature not explicitly listed in Section 1.1-1.3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. TIMELINE

  Phase 1 — UI/UX Demo:
    Delivery: Within 3 working days of receiving all brand 
    assets (logo, colors, product list) from the Client.
    
  Phase 2 — Full Development:
    Delivery: Within 10 working days of Phase 1 approval.
    
  Note: Delays caused by late asset delivery, delayed feedback, 
  or scope changes from the Client will extend the timeline 
  proportionally.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. PRICING AND PAYMENT

  Total Project Cost: ₹40,000 (Indian Rupees Forty Thousand)

  This amount includes:
  - Complete website development (as per Section 1)
  - Domain registration for 1 year
  - Hosting setup
  - 6 months free critical maintenance (as per Section 5)

  Payment Schedule:
  ┌──────────────────────────────────────────────┐
  │ Milestone 1: ₹10,000                        │
  │ Due: Upon approval of UI/UX demo             │
  │                                              │
  │ Milestone 2: ₹15,000                         │
  │ Due: Upon delivery of admin panel + backend   │
  │                                              │
  │ Milestone 3: ₹15,000                         │
  │ Due: Upon final launch with payment gateway   │
  └──────────────────────────────────────────────┘

  Payment Method: UPI / Bank Transfer
  Payment Due: Within 3 days of milestone delivery

  Late Payment: If payment is delayed beyond 7 days, the 
  Developer reserves the right to pause work until payment 
  is received.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. INTELLECTUAL PROPERTY AND OWNERSHIP

4.1 During Development:
  All code, designs, and digital assets remain the intellectual 
  property of the Developer until full payment (₹40,000) is received.

4.2 After Full Payment:
  Upon receipt of the final payment, the Developer transfers 
  full ownership of:
  - All source code
  - Domain name
  - Hosting accounts
  - Database and stored data
  - Design assets created for this project
  
  to the Client. The transfer will be completed within 7 working 
  days of final payment.

4.3 Developer's Right to Showcase:
  The Developer retains the right to display the website in 
  their portfolio and reference it for future clients, unless 
  the Client objects in writing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. MAINTENANCE AND SUPPORT

5.1 Free Maintenance Period: 6 months from the date of 
  final launch.

5.2 What Is Covered (Free):
  - Website downtime / server errors
  - Payment gateway integration failures
  - Security vulnerability patches
  - SSL certificate issues
  - Critical bugs that prevent normal operation

5.3 What Is NOT Covered:
  - New features or pages
  - Design changes or redesigns
  - Content updates (Client can do these via admin panel)
  - Performance optimization for increased traffic
  - Third-party service outages (Razorpay, Vercel, Supabase)
  - Issues caused by Client's modifications to the code

5.4 Response Times:
  - Critical issues (site down, payments broken): 12 hours
  - Medium issues (page errors, UI bugs): 48 hours
  - Low issues (minor visual glitches): 7 days

5.5 After 6 Months:
  Maintenance available at ₹2,000/month or per-issue pricing 
  at mutually agreed rates.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. REVISIONS AND CHANGE REQUESTS

6.1 Included Revisions:
  - Up to 2 rounds of design revisions during Phase 1 (demo)
  - Minor text/color adjustments during Phase 2

6.2 Additional Revisions:
  Any revision beyond 2 rounds, or changes that alter the 
  agreed scope (adding features, restructuring pages), will 
  be quoted separately before work begins.

6.3 Scope Changes:
  If the Client requests features not listed in Section 1, 
  the Developer will provide a separate quote. Work on scope 
  changes begins only after written approval and payment terms 
  are agreed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. CONFIDENTIALITY

7.1 Both parties agree to keep confidential:
  - Business strategies and pricing information
  - Login credentials and API keys
  - Customer data processed through the website
  - Terms of this agreement

7.2 This obligation survives the termination of this agreement.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. LIMITATION OF LIABILITY

8.1 The Developer is not responsible for:
  - Loss of revenue due to website downtime
  - Third-party service failures (payment gateway, hosting)
  - Data loss due to Client's actions
  - Legal issues arising from Client's business operations
  - Content posted by the Client on the website

8.2 The Developer's total liability under this agreement 
  shall not exceed the total amount paid by the Client.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. TERMINATION

9.1 By Client:
  The Client may terminate this agreement at any time. 
  Payments already made for completed milestones are 
  non-refundable. Work-in-progress will be delivered 
  as-is.

9.2 By Developer:
  The Developer may terminate if:
  - Payment is overdue by more than 14 days
  - The Client is unresponsive for more than 14 days
  - The project scope changes significantly without 
    agreement on revised pricing

9.3 Upon Termination:
  - Client receives all work completed up to the point 
    of termination (for paid milestones only)
  - Unpaid work remains the Developer's property

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DISPUTE RESOLUTION

10.1 Both parties will first attempt to resolve disputes 
  through direct communication.

10.2 If unresolved, disputes will be settled through 
  arbitration under the Indian Arbitration and 
  Conciliation Act, 1996.

10.3 Jurisdiction: [YOUR CITY], India.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. GENERAL

11.1 This agreement constitutes the entire understanding 
  between both parties.

11.2 Amendments must be agreed upon in writing (email 
  or WhatsApp message with explicit confirmation).

11.3 This agreement is governed by the laws of India, 
  including the Indian Contract Act, 1872 and the 
  Information Technology Act, 2000.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SIGNATURES:

Developer:
Name: ___________________________
Date: ___________________________
Signature / Digital Consent: ___________________________

Client:
Name: ___________________________  
Date: ___________________________
Signature / Digital Consent: ___________________________

(Digital consent via email reply stating "I agree to the 
above terms" is legally valid under the Information 
Technology Act, 2000, Section 5.)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 6. Making It Legally Valid — Step by Step

### What Makes This Contract Enforceable in India?

| Legal Basis | How It Applies |
|-------------|---------------|
| **Indian Contract Act, 1872** | Any agreement with offer, acceptance, consideration (money), and lawful purpose is a valid contract. No stamp paper needed for service agreements under ₹50K. |
| **IT Act, 2000 — Section 5** | Electronic signatures and digital consent (email/WhatsApp reply saying "I agree") are legally valid. |
| **IT Act, 2000 — Section 65B** | Screenshots and email threads are admissible as evidence in court if properly preserved. |
| **Consumer Protection Act, 2019** | Shiv has consumer rights even without a formal contract, but having one protects BOTH sides. |

### Your Execution Steps

| Step | Action | How |
|------|--------|-----|
| 1 | Copy the contract template to Google Docs | Fill in all `[BLANKS]` with real details |
| 2 | Share Google Doc with Shiv | "View & Comment" mode, not edit |
| 3 | Give Shiv 2-3 days to review | Tell him to ask questions or suggest changes |
| 4 | Once agreed, export as PDF | File → Download → PDF |
| 5 | Sign it | Both add typed names + dates (valid under IT Act) |
| 6 | Alternative: Email confirmation | Shiv replies to your email with "I agree to the terms shared on [date]" |
| 7 | Save everything | Keep the Google Doc, PDF, and email/WhatsApp confirmation screenshots |

### Extra Legal Safety Measures

| What | Why | How |
|------|-----|-----|
| **Screenshot every payment received** | Proof of milestone completion | UPI payment screenshot + bank statement |
| **Keep WhatsApp chat backed up** | Evidence of scope discussions | WhatsApp → Settings → Chat Backup (auto to Google Drive) |
| **Document scope changes** | Prevent "but I asked for this" disputes | Any new request → "Sure, I'll quote this separately. Confirming: you want [X]. Please reply 'yes' to confirm." |
| **Use email for formal communications** | More legally credible than WhatsApp | Send milestone delivery + payment requests via email, not just WhatsApp |
| **Add timestamps to deliveries** | Proof of when you delivered | "Demo delivered on [date] at [time]. Please review and confirm within 3 days." |

---

## 7. Shiv's Self-Service Capability — The Complete Picture

### Things Shiv Can Do WITHOUT Calling You

| Action | How (From Shiv's Perspective) |
|--------|------------------------------|
| Add a new product | Admin → Products → "＋ Add" → Fill 5 fields → Save |
| Edit product price | Admin → Products → Click edit icon → Change price → Save |
| Remove a product | Admin → Products → Click delete icon → Confirm |
| Hide product temporarily | Admin → Products → Toggle the green switch off |
| Create a flash sale | Admin → Flash Sales → "＋ New Sale" → Pick product, set discount%, set dates → Save |
| Stop a sale early | Admin → Flash Sales → Toggle off |
| Turn pop-up on/off | Admin → Flash Sales → Toggle "Show as Pop-up" |
| Change pop-up message | Admin → Flash Sales → Edit text → Save |
| Add payment proof | Admin → Testimonials → "＋ Add Proof" → Upload image, add customer name → Save |
| Add customer review | Admin → Testimonials → "＋ Add Review" → Fill form → Save |
| View orders | Admin → Orders → Scroll through table |
| Change WhatsApp number | Admin → Settings → Edit phone number → Save |
| Update About Us text | Admin → Settings → Edit text area → Save |

### Things That Still Need You (Developer)

| Action | Why Shiv Can't Do It |
|--------|---------------------|
| Add a completely new page type | Requires code changes |
| Change the website layout/design | Requires frontend code changes |
| Fix payment gateway issues | Requires backend debugging |
| Update SSL/hosting configuration | Requires Vercel/Supabase access |
| Add new features (blog, referral, etc.) | Requires development work |
| Database migrations | Requires technical expertise |

### Admin Panel Training

Before handoff, create a **simple 5-minute screen recording** showing Shiv:
1. How to log in
2. How to add a product
3. How to create a flash sale
4. How to upload payment proof
5. How to check orders

This recording = zero future support calls for basic operations.

---

## Summary: Everything Locked In

| Decision | Final Answer |
|----------|-------------|
| **Payment Gateway** | Razorpay (Shiv does KYC now, you integrate after demo approval) |
| **Domain** | You buy on Namecheap, transfer to Shiv after full ₹40K payment |
| **Hosting** | Vercel + Supabase under your email, transfer after full payment |
| **Admin Panel** | Custom-built, ultra-simple, Shiv manages everything himself |
| **Maintenance** | 6 months free (critical issues only: downtime, payment failures, security) |
| **Legal** | Google Doc agreement → PDF → Shiv replies "I agree" via email |
| **Pricing** | ₹40,000 total: ₹10K (demo) + ₹15K (backend) + ₹15K (launch) |
| **Content** | Shiv provides; you handle website copy and SEO |
| **Self-service** | Shiv handles all day-to-day changes; you're only needed for new features or bugs |
