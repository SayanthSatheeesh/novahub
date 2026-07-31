"use client"

import { useEffect, useState } from "react"
import { Flame, Sparkles, Clock, Star, Gem } from "lucide-react"
import { cn } from "@/lib/utils"
import type { BadgeType } from "@/lib/products"

interface UrgencyBadgeProps {
  type: BadgeType
  dealEndsAt?: string
  className?: string
}

function getTimeLeft(isoDate: string): string | null {
  const diff = new Date(isoDate).getTime() - Date.now()
  if (diff <= 0) return null
  const totalMinutes = Math.floor(diff / (1000 * 60))
  const h = Math.floor(totalMinutes / 60)
  const m = totalMinutes % 60
  if (h > 48) {
    const days = Math.floor(h / 24)
    return `Ends in ${days} day${days > 1 ? "s" : ""}`
  }
  if (h > 0) return `Ends in ${h}h ${m}m`
  return `Ends in ${m}m`
}

const badgeConfig: Record<
  BadgeType,
  { label: string; className: string; Icon: React.ElementType }
> = {
  hot: {
    label: "🔥 Hot Deal",
    className: "bg-orange-500 text-white shadow-orange-500/30",
    Icon: Flame,
  },
  new: {
    label: "✨ New Arrival",
    className: "bg-violet-600 text-white shadow-violet-500/30",
    Icon: Sparkles,
  },
  "ending-soon": {
    label: "⏰ Ending Soon",
    className: "bg-red-500 text-white shadow-red-500/30",
    Icon: Clock,
  },
  "best-seller": {
    label: "👑 Best Seller",
    className: "bg-amber-500 text-slate-900 shadow-amber-500/30",
    Icon: Star,
  },
  "plus-exclusive": {
    label: "💎 Plus Only",
    className:
      "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-violet-500/30",
    Icon: Gem,
  },
}

export function UrgencyBadge({ type, dealEndsAt, className }: UrgencyBadgeProps) {
  const [timeLabel, setTimeLabel] = useState<string | null>(null)

  useEffect(() => {
    if (type !== "ending-soon" || !dealEndsAt) return
    const update = () => setTimeLabel(getTimeLeft(dealEndsAt))
    update()
    const interval = setInterval(update, 60_000)
    return () => clearInterval(interval)
  }, [type, dealEndsAt])

  const config = badgeConfig[type]
  const displayLabel =
    type === "ending-soon" && timeLabel ? `⏰ ${timeLabel}` : config.label

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm",
        config.className,
        className
      )}
    >
      {displayLabel}
    </span>
  )
}
