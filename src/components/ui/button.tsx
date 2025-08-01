import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 backdrop-blur-lg relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-white/15 via-purple-50/10 to-white/8 text-foreground border border-white/30 shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.4),inset_0_-2px_4px_0_rgba(139,92,246,0.1),0_8px_32px_rgba(139,92,246,0.2),0_2px_8px_rgba(255,255,255,0.3)] hover:bg-gradient-to-br hover:from-white/20 hover:via-purple-50/15 hover:to-white/12 hover:border-white/40 hover:shadow-[inset_0_2px_6px_0_rgba(255,255,255,0.5),inset_0_-2px_6px_0_rgba(139,92,246,0.15),0_12px_48px_rgba(139,92,246,0.3),0_4px_16px_rgba(255,255,255,0.4)] transform hover:-translate-y-1 hover:scale-[1.02] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/25 before:via-purple-100/8 before:to-transparent before:rounded-2xl after:absolute after:inset-[1px] after:bg-gradient-to-b after:from-white/20 after:to-transparent after:rounded-[15px] after:pointer-events-none",
        destructive:
          "bg-gradient-to-br from-white/12 via-red-50/8 to-white/6 text-red-100 border border-white/25 shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.3),inset_0_-2px_4px_0_rgba(239,68,68,0.1),0_8px_32px_rgba(239,68,68,0.2)] hover:bg-gradient-to-br hover:from-white/16 hover:via-red-50/12 hover:to-white/8 hover:border-white/35 hover:shadow-[inset_0_2px_6px_0_rgba(255,255,255,0.4),inset_0_-2px_6px_0_rgba(239,68,68,0.15),0_12px_48px_rgba(239,68,68,0.3)] transform hover:-translate-y-1 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-red-100/6 before:to-transparent before:rounded-2xl after:absolute after:inset-[1px] after:bg-gradient-to-b after:from-white/15 after:to-transparent after:rounded-[15px] after:pointer-events-none",
        outline:
          "bg-gradient-to-br from-white/8 via-purple-50/6 to-white/4 border border-white/35 shadow-[inset_0_2px_3px_0_rgba(255,255,255,0.25),inset_0_-1px_3px_0_rgba(139,92,246,0.08),0_4px_16px_rgba(139,92,246,0.15)] hover:bg-gradient-to-br hover:from-white/12 hover:via-purple-50/10 hover:to-white/6 hover:border-white/45 hover:shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.35),inset_0_-1px_4px_0_rgba(139,92,246,0.12),0_8px_24px_rgba(139,92,246,0.2)] transform hover:-translate-y-0.5 hover:scale-[1.01] text-foreground before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/15 before:via-purple-100/4 before:to-transparent before:rounded-2xl after:absolute after:inset-[1px] after:bg-gradient-to-b after:from-white/12 after:to-transparent after:rounded-[15px] after:pointer-events-none",
        secondary:
          "bg-gradient-to-br from-white/10 via-purple-50/7 to-white/5 text-muted-foreground border border-white/25 shadow-[inset_0_2px_3px_0_rgba(255,255,255,0.22),inset_0_-1px_3px_0_rgba(139,92,246,0.06),0_6px_24px_rgba(139,92,246,0.12)] hover:bg-gradient-to-br hover:from-white/14 hover:via-purple-50/11 hover:to-white/7 hover:border-white/35 hover:shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.32),inset_0_-1px_4px_0_rgba(139,92,246,0.1),0_12px_36px_rgba(139,92,246,0.18)] transform hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/16 before:via-purple-100/5 before:to-transparent before:rounded-2xl after:absolute after:inset-[1px] after:bg-gradient-to-b after:from-white/10 after:to-transparent after:rounded-[15px] after:pointer-events-none",
        ghost: "bg-gradient-to-br from-white/6 via-purple-50/4 to-white/3 hover:bg-gradient-to-br hover:from-white/10 hover:via-purple-50/8 hover:to-white/5 border border-white/15 hover:border-white/25 shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.15),0_2px_8px_rgba(139,92,246,0.08)] hover:shadow-[inset_0_2px_3px_0_rgba(255,255,255,0.25),0_4px_16px_rgba(139,92,246,0.15)] transform hover:-translate-y-0.5 text-foreground before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/12 before:via-purple-100/3 before:to-transparent before:rounded-2xl after:absolute after:inset-[1px] after:bg-gradient-to-b after:from-white/8 after:to-transparent after:rounded-[15px] after:pointer-events-none",
        link: "text-primary underline-offset-4 hover:underline bg-transparent",
        hero: "bg-gradient-to-br from-white/20 via-purple-50/15 to-white/12 text-foreground font-semibold border border-white/40 shadow-[inset_0_3px_6px_0_rgba(255,255,255,0.5),inset_0_-3px_6px_0_rgba(139,92,246,0.15),0_20px_60px_rgba(139,92,246,0.25),0_8px_32px_rgba(255,255,255,0.2)] hover:bg-gradient-to-br hover:from-white/25 hover:via-purple-50/20 hover:to-white/15 hover:border-white/50 hover:shadow-[inset_0_4px_8px_0_rgba(255,255,255,0.6),inset_0_-4px_8px_0_rgba(139,92,246,0.2),0_30px_80px_rgba(139,92,246,0.35),0_12px_48px_rgba(255,255,255,0.3)] transform hover:-translate-y-2 hover:scale-[1.03] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/30 before:via-purple-100/12 before:to-transparent before:rounded-2xl after:absolute after:inset-[1px] after:bg-gradient-to-b after:from-white/25 after:to-transparent after:rounded-[15px] after:pointer-events-none",
        premium: "bg-gradient-to-br from-white/18 via-purple-50/12 to-white/10 text-foreground border border-white/35 shadow-[inset_0_2px_5px_0_rgba(255,255,255,0.4),inset_0_-2px_5px_0_rgba(139,92,246,0.12),0_12px_40px_rgba(139,92,246,0.2),0_4px_20px_rgba(255,255,255,0.25)] hover:bg-gradient-to-br hover:from-white/22 hover:via-purple-50/16 hover:to-white/12 hover:border-white/45 hover:shadow-[inset_0_3px_6px_0_rgba(255,255,255,0.5),inset_0_-3px_6px_0_rgba(139,92,246,0.16),0_18px_56px_rgba(139,92,246,0.3),0_6px_28px_rgba(255,255,255,0.35)] transform hover:-translate-y-1.5 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/25 before:via-purple-100/8 before:to-transparent before:rounded-2xl after:absolute after:inset-[1px] after:bg-gradient-to-b after:from-white/20 after:to-transparent after:rounded-[15px] after:pointer-events-none",
        iridescent: "relative bg-transparent text-white font-medium border border-primary/40 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-primary/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-[1.02]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
