import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-2xl border border-white/35 bg-gradient-to-br from-white/30 via-white/15 to-white/8 backdrop-blur-xl px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:border-white/50 focus-visible:from-white/35 focus-visible:via-white/20 focus-visible:to-white/12 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm shadow-glass-subtle focus-visible:shadow-glass-crystal transition-all duration-500 relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-50/12 before:via-transparent before:to-blue-50/8 before:rounded-2xl before:pointer-events-none after:absolute after:inset-[1px] after:bg-gradient-to-t after:from-transparent after:via-white/8 after:to-white/16 after:rounded-2xl after:pointer-events-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
