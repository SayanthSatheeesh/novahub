export type BadgeType = 'hot' | 'new' | 'ending-soon' | 'best-seller' | 'plus-exclusive';

export interface Product {
  // Core identity
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  features: string[];

  // Pricing
  price: number;
  originalPrice: number;

  // Social proof
  rating: number;
  reviewsCount: number;

  // Visual identity
  iconText: string;
  iconBgClass: string;

  // ── Master Spec Section 2 Extensions ──

  /** Annual equivalent cost from official source e.g. 23988 = ₹23,988/yr via OpenAI */
  officialAnnualPrice?: number;
  /** Official brand name for pricing anchor e.g. "OpenAI", "Adobe" */
  officialBrand?: string;
  /** Badge type shown on card overlay */
  badge?: BadgeType;
  /** Deal end ISO timestamp — if set, shows live countdown on UrgencyBadge */
  dealEndsAt?: string;
  /** Tags for filtering and SEO */
  tags: string[];
  /** Duration of access e.g. "1 Month", "Annual", "Lifetime" */
  accessDuration: string;
  /** Replacement guarantee in days */
  guaranteeDays: number;
  /** Logo domain for fetching the product logo favicon */
  logoDomain?: string;
}

export const products: Product[] = [
  {
    slug: "chatgpt-plus",
    name: "ChatGPT Plus",
    category: "AI Assistants",
    shortDescription: "Instant Delivery • 1 Month Access",
    description: "Unlock the full power of OpenAI's most advanced model. Enjoy faster response times, priority access during peak hours, and early access to new features like GPT-4, DALL·E 3, and Advanced Data Analysis.",
    features: [
      "General access to ChatGPT, even during peak times",
      "Faster response times and priority processing",
      "Access to GPT-4, DALL·E 3, and advanced plugins"
    ],
    price: 999,
    originalPrice: 2499,
    officialAnnualPrice: 23988,
    officialBrand: "OpenAI",
    badge: "hot",
    tags: ["AI Tool", "Productivity", "Hot Deal", "ChatGPT"],
    accessDuration: "1 Month",
    guaranteeDays: 7,
    rating: 4.9,
    reviewsCount: 2450,
    iconText: "C",
    iconBgClass: "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white",
    logoDomain: "openai.com"
  },
  {
    slug: "canva-pro",
    name: "Canva Pro",
    category: "Design Tools",
    shortDescription: "Instant Delivery • 1 Month Access",
    description: "Design like a professional with Canva Pro. Get access to premium templates, 100+ million stock photos, videos, audio, and graphics. Easily remove backgrounds and resize designs with one click.",
    features: [
      "100+ million premium stock photos, videos, and elements",
      "Background Remover and Magic Resize tools",
      "1TB of cloud storage and brand kit management"
    ],
    price: 499,
    originalPrice: 1299,
    officialAnnualPrice: 15588,
    officialBrand: "Canva",
    badge: "best-seller",
    tags: ["Design Tool", "Creative Suite", "Best Seller", "Canva"],
    accessDuration: "1 Month",
    guaranteeDays: 7,
    rating: 4.8,
    reviewsCount: 3120,
    iconText: "Ca",
    iconBgClass: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    logoDomain: "canva.com"
  },
  {
    slug: "adobe-creative-cloud",
    name: "Adobe Creative Cloud",
    category: "Design Tools",
    shortDescription: "Instant Delivery • 1 Month Access",
    description: "Get the entire collection of 20+ creative desktop and mobile apps including Photoshop, Illustrator, InDesign, Premiere Pro, and Acrobat Pro. Bring your creative ideas to life.",
    features: [
      "Access to 20+ Adobe creative apps including Photoshop & Premiere Pro",
      "100GB of cloud storage for easy collaboration",
      "Adobe Fonts and Adobe Portfolio included"
    ],
    price: 1999,
    originalPrice: 4999,
    officialAnnualPrice: 59988,
    officialBrand: "Adobe",
    badge: "hot",
    tags: ["Design Tool", "Creative Suite", "Hot Deal", "Adobe"],
    accessDuration: "1 Month",
    guaranteeDays: 7,
    rating: 4.9,
    reviewsCount: 1850,
    iconText: "A",
    iconBgClass: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
    logoDomain: "adobe.com"
  },
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    category: "Developer Tools",
    shortDescription: "Instant Delivery • 1 Month Access",
    description: "Your AI pair programmer. GitHub Copilot uses the OpenAI Codex to suggest code and entire functions in real-time, right from your editor.",
    features: [
      "AI-powered code suggestions in real-time",
      "Supports multiple languages including Python, JavaScript, TypeScript, Ruby, and more",
      "Integrates with VS Code, Visual Studio, Neovim, and JetBrains IDEs"
    ],
    price: 799,
    originalPrice: 1999,
    officialAnnualPrice: 11988,
    officialBrand: "GitHub",
    badge: "new",
    tags: ["Developer Tool", "AI Tool", "New Arrival", "GitHub"],
    accessDuration: "1 Month",
    guaranteeDays: 7,
    rating: 4.9,
    reviewsCount: 4200,
    iconText: "G",
    iconBgClass: "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white",
    logoDomain: "github.com"
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    category: "AI Generators",
    shortDescription: "Instant Delivery • 1 Month Access",
    description: "Generate breathtaking AI art from text prompts. Midjourney produces highly detailed, incredibly realistic images, making it the perfect tool for concept artists, designers, and creatives.",
    features: [
      "Generate stunning, photorealistic images from text",
      "Access to the Midjourney Discord bot",
      "Commercial usage rights included with Pro plan"
    ],
    price: 1499,
    originalPrice: 3599,
    officialAnnualPrice: 28788,
    officialBrand: "Midjourney",
    badge: "hot",
    tags: ["AI Generator", "Creative Suite", "Hot Deal", "Midjourney"],
    accessDuration: "1 Month",
    guaranteeDays: 7,
    rating: 4.7,
    reviewsCount: 1560,
    iconText: "M",
    iconBgClass: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    logoDomain: "midjourney.com"
  },
  {
    slug: "beautiful-ai-1yr",
    name: "Beautiful.ai (1 Year)",
    category: "AI Tools",
    shortDescription: "Instant Delivery • 1 Year Access",
    description: "Create stunning presentations in minutes with Beautiful.ai. The AI-powered presentation maker that designs for you.",
    features: ["AI-assisted design", "Unlimited slides", "Custom branding"],
    price: 499,
    originalPrice: 2999,
    officialAnnualPrice: 2999,
    officialBrand: "Beautiful.ai",
    badge: "hot",
    tags: ["AI Tool", "Presentation", "Flash Deal"],
    accessDuration: "1 Year",
    guaranteeDays: 7,
    rating: 4.9,
    reviewsCount: 1240,
    iconText: "B",
    iconBgClass: "bg-blue-100 text-blue-600",
    logoDomain: "beautiful.ai"
  },
  {
    slug: "prime-video-6mo",
    name: "Prime Video (6 Months)",
    category: "Entertainment",
    shortDescription: "Instant Delivery • 6 Months Access",
    description: "Stream exclusive Amazon Originals, popular movies, and TV shows in 4K Ultra HD.",
    features: ["4K Ultra HD streaming", "Ad-free experience", "Watch on multiple devices"],
    price: 249,
    originalPrice: 899,
    officialAnnualPrice: 1499,
    officialBrand: "Amazon",
    badge: "hot",
    tags: ["Entertainment", "Streaming"],
    accessDuration: "6 Months",
    guaranteeDays: 7,
    rating: 4.8,
    reviewsCount: 3100,
    iconText: "P",
    iconBgClass: "bg-blue-100 text-blue-600",
    logoDomain: "primevideo.com"
  },
  {
    slug: "gemini-18mo",
    name: "Gemini Advanced (18 Months)",
    category: "AI Assistants",
    shortDescription: "Instant Delivery • 18 Months Access",
    description: "Get access to Google's most capable AI model, Gemini 1.5 Pro. Power through complex tasks with ease.",
    features: ["Access to Gemini 1.5 Pro", "Integration with Google Workspace", "Priority access to new features"],
    price: 599,
    originalPrice: 2999,
    officialAnnualPrice: 1999,
    officialBrand: "Google",
    badge: "hot",
    tags: ["AI Tool", "Productivity"],
    accessDuration: "18 Months",
    guaranteeDays: 7,
    rating: 5.0,
    reviewsCount: 5200,
    iconText: "G",
    iconBgClass: "bg-blue-100 text-blue-600",
    logoDomain: "google.com"
  },
  {
    slug: "netflix-4k-1mo",
    name: "Netflix 4K (1 Month)",
    category: "Entertainment",
    shortDescription: "Instant Delivery • 1 Month Access",
    description: "Enjoy unlimited movies, TV shows, and more in stunning 4K Ultra HD quality.",
    features: ["4K Ultra HD", "Watch on 4 supported devices at a time", "Unlimited ad-free movies and TV shows"],
    price: 349,
    originalPrice: 649,
    officialAnnualPrice: 7788,
    officialBrand: "Netflix",
    badge: "hot",
    tags: ["Entertainment", "Streaming"],
    accessDuration: "1 Month",
    guaranteeDays: 7,
    rating: 4.9,
    reviewsCount: 8900,
    iconText: "N",
    iconBgClass: "bg-red-100 text-red-600",
    logoDomain: "netflix.com"
  },
  {
    slug: "notion-biz-6mo",
    name: "Notion Business (6 Months)",
    category: "Productivity",
    shortDescription: "Instant Delivery • 6 Months Access",
    description: "The connected workspace where better, faster work happens. Now with AI built-in.",
    features: ["Unlimited blocks and file uploads", "Advanced permissions", "SAML SSO"],
    price: 799,
    originalPrice: 3999,
    officialAnnualPrice: 10800,
    officialBrand: "Notion",
    badge: "hot",
    tags: ["Productivity", "Workspace"],
    accessDuration: "6 Months",
    guaranteeDays: 7,
    rating: 4.9,
    reviewsCount: 4300,
    iconText: "N",
    iconBgClass: "bg-slate-100 text-slate-900",
    logoDomain: "notion.so"
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function getProductsByTag(tag: string): Product[] {
  return products.filter(p => p.tags.includes(tag));
}

export function getProductsByBadge(badge: BadgeType): Product[] {
  return products.filter(p => p.badge === badge);
}

export function getProductsByBudget(maxPrice: number): Product[] {
  return products.filter(p => p.price <= maxPrice);
}
