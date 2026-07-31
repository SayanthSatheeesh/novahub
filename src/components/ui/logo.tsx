import * as React from "react"

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  showTagline?: boolean;
}

export function Logo({ showTagline = false, className = "", ...props }: LogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`} {...props}>
      <div className="flex items-center gap-2">
        {/* N Icon with Gradients and Sparkles */}
        <div className="relative w-8 h-8 flex-shrink-0">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md overflow-visible">
            <defs>
              <linearGradient id="leg1" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1E3A8A" />
                <stop offset="40%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#2DD4BF" />
              </linearGradient>
              <linearGradient id="leg2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#4F46E5" />
              </linearGradient>
              {/* Small drop shadow for the fold overlap */}
              <filter id="fold-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="-2" dy="2" stdDeviation="2" floodOpacity="0.4" />
              </filter>
            </defs>
            
            {/* Back right leg */}
            <path d="M 75 15 L 75 80" stroke="url(#leg2)" strokeWidth="20" strokeLinecap="round" />
            
            {/* Diagonal cross */}
            <path d="M 25 25 L 75 80" stroke="url(#leg2)" strokeWidth="20" strokeLinecap="round" filter="url(#fold-shadow)" />
            
            {/* Front left leg */}
            <path d="M 25 85 L 25 25" stroke="url(#leg1)" strokeWidth="20" strokeLinecap="round" filter="url(#fold-shadow)" />

            {/* Sparkles / Stars */}
            <g transform="translate(75, -5) scale(0.6)">
              <path d="M 10 0 Q 10 10 20 10 Q 10 10 10 20 Q 10 10 0 10 Q 10 10 10 0 Z" fill="#FCD34D" />
            </g>
            <g transform="translate(85, 10) scale(0.4)">
              <path d="M 10 0 Q 10 10 20 10 Q 10 10 10 20 Q 10 10 0 10 Q 10 10 10 0 Z" fill="#FCD34D" />
            </g>
          </svg>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <span className="font-[800] text-2xl tracking-tight leading-none lowercase">
            <span className="text-slate-900 dark:text-white">nova</span>
            <span className="text-blue-500 dark:text-blue-400">hub</span>
          </span>
        </div>
      </div>

      {showTagline && (
        <div className="flex items-center gap-2 mt-1 w-full max-w-[200px]">
          <div className="h-px bg-slate-300 dark:bg-slate-700 flex-grow" />
          <span className="text-[7.5px] font-bold tracking-[0.2em] text-slate-500 dark:text-slate-400 uppercase whitespace-nowrap">
            Digital Software Subscriptions
          </span>
          <div className="h-px bg-slate-300 dark:bg-slate-700 flex-grow" />
        </div>
      )}
    </div>
  )
}
