"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroEmailCapture() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!email) return
    setLoading(true)
    // TODO: connect to Brevo API at /api/subscribe
    try {
      await new Promise((r) => setTimeout(r, 800)) // simulated API call
      console.log("Email capture:", email)
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-white/50 pointer-events-none" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-9 h-12 rounded-xl bg-white dark:bg-white/10 border-slate-200 dark:border-white/20 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-white/50 focus-visible:border-primary dark:focus-visible:border-white focus-visible:ring-0 shadow-sm"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="h-12 px-5 rounded-xl font-semibold bg-primary text-white hover:bg-primary/90 dark:bg-white dark:text-primary dark:hover:bg-white/90 transition-all shrink-0 shadow-lg shadow-primary/20 dark:shadow-black/20"
            >
              {loading ? (
                <span className="animate-pulse">Saving…</span>
              ) : (
                <>
                  Get 5% Off{" "}
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </Button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/40 backdrop-blur-sm shadow-sm"
          >
            <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-emerald-900 dark:text-white">You&apos;re in! Check your email.</p>
              <p className="text-xs text-emerald-700 dark:text-white/60">Your 5% discount code is on the way.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <p className="text-xs text-red-400 mt-1.5">{error}</p>
      )}

      {!submitted && (
        <p className="text-xs text-slate-500 dark:text-white/40 mt-2 text-center sm:text-left font-medium">
          No spam. Unsubscribe anytime.
        </p>
      )}
    </div>
  )
}
