import { ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

interface GuaranteeBadgeProps {
  days?: number
  variant?: "card" | "page" | "checkout"
  className?: string
}

export function GuaranteeBadge({
  days = 7,
  variant = "card",
  className,
}: GuaranteeBadgeProps) {
  if (variant === "page") {
    return (
      <div
        className={cn(
          "flex items-start gap-3 p-4 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50 dark:bg-blue-950/30",
          className
        )}
      >
        <ShieldCheck
          className="w-5 h-5 text-blue-500 shrink-0 mt-0.5"
          strokeWidth={1.75}
        />
        <div>
          <p className="font-semibold text-sm text-foreground">
            {days}-Day Replacement Guarantee
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Account not working? WhatsApp us. We replace it. No forms. No waiting.
          </p>
        </div>
      </div>
    )
  }

  if (variant === "checkout") {
    return (
      <div
        className={cn("flex items-center gap-2 text-sm text-muted-foreground", className)}
      >
        <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" strokeWidth={1.75} />
        <span>Protected by {days}-Day Replacement Guarantee</span>
      </div>
    )
  }

  // card variant (default)
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-[10px] text-blue-600 dark:text-blue-400 font-medium",
        className
      )}
    >
      <ShieldCheck className="w-3 h-3" strokeWidth={2} />
      {days}-Day Guarantee
    </span>
  )
}
