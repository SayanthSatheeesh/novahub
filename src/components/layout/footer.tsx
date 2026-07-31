import Link from "next/link"
import { MessageCircle, Share2, PlayCircle, AtSign } from "lucide-react"
import { Logo } from "@/components/ui/logo"

const footerLinks = {
  products: {
    title: "Products",
    links: [
      { label: "AI Tools", href: "/products?category=ai-tools" },
      { label: "Creative Suite", href: "/products?category=creative" },
      { label: "Developer Tools", href: "/products?category=developer" },
      { label: "Bundles", href: "/products?tag=bundle" },
      { label: "🔥 Hot Deals", href: "/products?badge=hot" },
      { label: "✨ New Arrivals", href: "/products?badge=new" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "FAQ", href: "/#faq" },
      { label: "Delivery Info", href: "/delivery-info" },
      { label: "7-Day Guarantee", href: "/guarantee" },
      { label: "Blog", href: "/blog" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About NovaHub", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "WhatsApp Us", href: "https://wa.me/919999999999" },
      { label: "NovaHub Plus", href: "/plus" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
}

export function Footer() {
  return (
    <footer className="relative bg-[#F8FAFC] dark:bg-[#0F0F23] pt-16 pb-8 overflow-hidden border-t border-slate-200 dark:border-white/5">
      {/* Gradient Accent Strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4FC3F7] via-primary to-[#7B2FBE]" />

      <div className="container mx-auto px-4">
        {/* Main grid — Brand col + 4 link columns */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">

          {/* Brand column — spans 2 cols on md */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo showTagline />
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs mb-5 leading-relaxed">
              Your one-stop destination for genuine software subscriptions at the best prices. Smart software. Trusted solutions. Instant WhatsApp delivery.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mb-5">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] hover:shadow-lg hover:shadow-[#E1306C]/20 transition-all duration-300 group"
              >
                <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:shadow-lg hover:shadow-[#FF0000]/20 transition-all duration-300 group"
              >
                <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a
                href="#"
                aria-label="X"
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-white/20 transition-all duration-300 group"
              >
                <svg className="w-3.5 h-3.5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Channel"
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300 group"
              >
                <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((col) => (
            <div key={col.title} className="col-span-1">
              <h3 className="font-semibold text-slate-800 dark:text-white mb-4 text-sm">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* India Legal Compliance Bar — Consumer Protection (E-Commerce) Rules 2020 */}
        <div className="border-t border-slate-200 dark:border-white/10 pt-6 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-400 dark:text-slate-500">
            <div className="space-y-1">
              <p><span className="font-semibold text-slate-500 dark:text-slate-400">Registered Name:</span> NovaHub (Sole Proprietorship) — India</p>
              <p><span className="font-semibold text-slate-500 dark:text-slate-400">GST:</span> Pending Registration</p>
            </div>
            <div className="space-y-1 md:text-right">
              <p><span className="font-semibold text-slate-500 dark:text-slate-400">Grievance Officer:</span> support@novahub.in</p>
              <p>Available Mon–Sat, 10 AM – 7 PM IST via WhatsApp & Email</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 dark:border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} NovaHub. All rights reserved. Prices are in INR (₹).
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-500 dark:text-slate-400">🔒 100% Secure Payments</span>
            <div className="flex gap-2">
              <div className="w-10 h-6 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-[9px] font-black text-slate-600 dark:text-slate-300">UPI</div>
              <div className="w-10 h-6 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-[9px] font-black text-slate-600 dark:text-slate-300">VISA</div>
              <div className="w-10 h-6 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-[9px] font-black text-slate-600 dark:text-slate-300">MC</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
