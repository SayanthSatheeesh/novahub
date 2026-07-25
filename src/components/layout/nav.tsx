"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Nav() {
  const { setTheme, theme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <div className="w-full h-16 transition-all duration-200">
      <div className="container h-full mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-extrabold text-xl shadow-md">
              N
            </div>
            <span className="font-extrabold text-xl text-foreground tracking-tight">
              Nova<span className="text-primary">Hub</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors">
            Products
          </Link>
          <Link href="/flash-deals" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors">
            Flash Deals
          </Link>
          <Link href="/about" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-white backdrop-blur"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white border-0 font-semibold shadow-lg shadow-emerald-500/20">
              <Phone className="w-4 h-4 mr-2" />
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
            className="text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[100px] z-40 bg-white/95 dark:bg-[#0F0F23]/95 backdrop-blur-xl md:hidden border-t border-slate-200 dark:border-white/10">
          <div className="flex flex-col items-center justify-center space-y-8 p-8 h-[calc(100vh-100px)] text-foreground">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold">
              Home
            </Link>
            <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold">
              Products
            </Link>
            <Link href="/flash-deals" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold">
              Flash Deals
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold">
              About
            </Link>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm">
              <Button className="rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white w-full border-0 font-semibold py-6">
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
