"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface BudgetPickerProps {
  onFilter: (maxPrice: number | null) => void
  className?: string
}

const budgetOptions = [
  { label: "All Prices", value: null },
  { label: "Under ₹499", value: 499 },
  { label: "Under ₹999", value: 999 },
  { label: "Under ₹1,499", value: 1499 },
  { label: "Under ₹1,999", value: 1999 },
]

export function BudgetPicker({ onFilter, className }: BudgetPickerProps) {
  const [selected, setSelected] = useState<number | null>(null)

  const handleSelect = (value: number | null) => {
    setSelected(value)
    onFilter(value)
  }

  return (
    <div className={cn("flex flex-wrap gap-2", className)} role="group" aria-label="Filter by budget">
      {budgetOptions.map((opt) => (
        <button
          key={opt.label}
          onClick={() => handleSelect(opt.value)}
          aria-pressed={selected === opt.value}
          className={cn(
            "px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer",
            selected === opt.value
              ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
              : "bg-background border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
