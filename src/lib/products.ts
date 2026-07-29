export interface Product {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  features: string[];
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  iconText: string;
  iconBgClass: string;
}

export const products: Product[] = [
  {
    slug: "chatgpt-plus",
    name: "ChatGPT Plus",
    category: "AI Assistants",
    shortDescription: "Instant Delivery",
    description: "Unlock the full power of OpenAI's most advanced model. Enjoy faster response times, priority access during peak hours, and early access to new features like GPT-4, DALL·E 3, and Advanced Data Analysis.",
    features: [
      "General access to ChatGPT, even during peak times",
      "Faster response times and priority processing",
      "Access to GPT-4, DALL·E 3, and advanced plugins"
    ],
    price: 999,
    originalPrice: 2499,
    rating: 4.9,
    reviewsCount: 2450,
    iconText: "C",
    iconBgClass: "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white"
  },
  {
    slug: "canva-pro",
    name: "Canva Pro",
    category: "Design Tools",
    shortDescription: "Instant Delivery",
    description: "Design like a professional with Canva Pro. Get access to premium templates, 100+ million stock photos, videos, audio, and graphics. Easily remove backgrounds and resize designs with one click.",
    features: [
      "100+ million premium stock photos, videos, and elements",
      "Background Remover and Magic Resize tools",
      "1TB of cloud storage and brand kit management"
    ],
    price: 499,
    originalPrice: 1299,
    rating: 4.8,
    reviewsCount: 3120,
    iconText: "Ca",
    iconBgClass: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
  },
  {
    slug: "adobe-creative-cloud",
    name: "Adobe Creative Cloud",
    category: "Design Tools",
    shortDescription: "Instant Delivery",
    description: "Get the entire collection of 20+ creative desktop and mobile apps including Photoshop, Illustrator, InDesign, Premiere Pro, and Acrobat Pro. Bring your creative ideas to life.",
    features: [
      "Access to 20+ Adobe creative apps including Photoshop & Premiere Pro",
      "100GB of cloud storage for easy collaboration",
      "Adobe Fonts and Adobe Portfolio included"
    ],
    price: 1999,
    originalPrice: 4999,
    rating: 4.9,
    reviewsCount: 1850,
    iconText: "A",
    iconBgClass: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
  },
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    category: "Developer Tools",
    shortDescription: "Instant Delivery",
    description: "Your AI pair programmer. GitHub Copilot uses the OpenAI Codex to suggest code and entire functions in real-time, right from your editor.",
    features: [
      "AI-powered code suggestions in real-time",
      "Supports multiple languages including Python, JavaScript, TypeScript, Ruby, and more",
      "Integrates with VS Code, Visual Studio, Neovim, and JetBrains IDEs"
    ],
    price: 799,
    originalPrice: 1999,
    rating: 4.9,
    reviewsCount: 4200,
    iconText: "G",
    iconBgClass: "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white"
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    category: "AI Generators",
    shortDescription: "Instant Delivery",
    description: "Generate breathtaking AI art from text prompts. Midjourney produces highly detailed, incredibly realistic images, making it the perfect tool for concept artists, designers, and creatives.",
    features: [
      "Generate stunning, photorealistic images from text",
      "Access to the Midjourney Discord bot",
      "Commercial usage rights included with Pro plan"
    ],
    price: 1499,
    originalPrice: 3599,
    rating: 4.7,
    reviewsCount: 1560,
    iconText: "M",
    iconBgClass: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
