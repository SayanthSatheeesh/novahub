import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-[#EDE8FA] dark:bg-[#0F0F23] pt-16 pb-8 overflow-hidden">
      {/* Gradient Accent Strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4FC3F7] via-primary to-[#7B2FBE]" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#4FC3F7] to-[#7B2FBE] flex items-center justify-center text-white font-bold text-xl">
                N
              </div>
              <span className="font-extrabold text-xl text-foreground">
                Nova<span className="text-[#7B2FBE]">Hub</span>
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm mb-6">
              Your one-stop destination for genuine software subscriptions at the best prices. Smart software. Trusted solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-border dark:border-white/10 flex items-center justify-center text-slate-500 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                <span className="font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-border dark:border-white/10 flex items-center justify-center text-slate-500 hover:bg-pink-100 hover:text-pink-600 transition-colors">
                <span className="font-bold">ig</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-border dark:border-white/10 flex items-center justify-center text-slate-500 hover:bg-blue-100 hover:text-blue-400 transition-colors">
                <span className="font-bold">x</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors">Products</Link></li>
              <li><Link href="/flash-deals" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors">Flash Deals</Link></li>
              <li><Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors">FAQ</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-violet-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} NovaHub. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-500 dark:text-slate-400">100% Secure Payments</span>
            <div className="flex gap-2">
              <div className="w-8 h-5 bg-violet-200 dark:bg-slate-800 rounded"></div>
              <div className="w-8 h-5 bg-violet-200 dark:bg-slate-800 rounded"></div>
              <div className="w-8 h-5 bg-violet-200 dark:bg-slate-800 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
