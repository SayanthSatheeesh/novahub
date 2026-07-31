"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"

export function Nav() {
  const { setTheme, theme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`relative w-full h-16 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/85 dark:bg-[#0F0F23]/85 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-sm" 
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="container h-full mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-6">
          {[
            { href: "/products?category=ai-tools", label: "AI Tools" },
            { href: "/products?category=creative", label: "Creative Suite" },
            { href: "/products?category=developer", label: "Developer Tools" },
            { href: "/products?tag=bundle", label: "Bundles" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/products?badge=hot"
            className="relative text-sm font-black text-orange-500 hover:text-orange-400 transition-colors group"
          >
            🔥 Hot Deals
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/products?badge=new"
            className="relative text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-500 transition-colors group"
          >
            ✨ New
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-white backdrop-blur w-11 h-11"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white border-0 font-bold shadow-md hover:shadow-lg transition-all h-10 px-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 w-11 h-11"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 w-11 h-11"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[100px] z-40 bg-white/95 dark:bg-[#0F0F23]/95 backdrop-blur-xl md:hidden border-t border-slate-200 dark:border-white/10">
          <div className="flex flex-col items-center justify-center space-y-6 p-8 h-[calc(100vh-100px)] text-foreground">
            <Link href="/products?category=ai-tools" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold">
              AI Tools
            </Link>
            <Link href="/products?category=creative" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold">
              Creative Suite
            </Link>
            <Link href="/products?category=developer" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold">
              Developer Tools
            </Link>
            <Link href="/products?tag=bundle" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold">
              Bundles
            </Link>
            <Link href="/products?badge=hot" onClick={() => setMobileMenuOpen(false)} className="text-xl font-black text-orange-500">
              🔥 Hot Deals
            </Link>
            <Link href="/products?badge=new" onClick={() => setMobileMenuOpen(false)} className="text-xl font-semibold text-violet-500">
              ✨ New Arrivals
            </Link>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm">
              <Button className="rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white w-full border-0 font-bold py-6 shadow-md hover:shadow-lg transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 mr-2 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
