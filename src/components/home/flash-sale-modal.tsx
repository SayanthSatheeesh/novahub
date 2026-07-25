"use client"

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

export function FlashSaleModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Show modal after 3 seconds on the site
    const timer = setTimeout(() => {
      // Check if they've seen it recently (in a real app, use localStorage)
      setOpen(true)
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-white dark:bg-[#1E1E4A] border-purple-200 dark:border-purple-900 shadow-2xl p-0 overflow-hidden rounded-2xl">
        <div className="bg-gradient-to-r from-[#4FC3F7] to-[#7B2FBE] p-6 text-white text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
            <Zap className="w-6 h-6 text-yellow-300 fill-current animate-pulse" />
          </div>
          <DialogTitle className="text-2xl font-extrabold mb-2">Wait! Special Offer Unlocked</DialogTitle>
          <p className="text-white/90">Get an extra 10% off your first purchase.</p>
        </div>
        
        <div className="p-6 text-center space-y-6">
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 border-dashed">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wide font-bold">Use Coupon Code</p>
            <p className="text-3xl font-mono font-bold text-slate-900 dark:text-white tracking-widest">NOVA10</p>
          </div>
          
          <Button className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 py-6 text-lg font-bold rounded-xl" onClick={() => setOpen(false)}>
            Claim Discount Now
          </Button>
          
          <button 
            onClick={() => setOpen(false)}
            className="text-sm text-slate-500 dark:text-slate-400 hover:underline"
          >
            No thanks, I prefer paying full price
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
