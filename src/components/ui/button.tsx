import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-all duration-700 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 backdrop-blur-xl relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-white/35 via-white/20 to-white/10 text-foreground border border-white/40 shadow-glass-crystal hover:shadow-glass-crystal-hover hover:from-white/45 hover:via-white/25 hover:to-white/15 transform hover:-translate-y-2 hover:scale-[1.03] before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-200/25 before:via-transparent before:to-blue-200/15 before:rounded-2xl after:absolute after:inset-[1px] after:bg-gradient-to-t after:from-transparent after:via-white/15 after:to-white/25 after:rounded-2xl after:pointer-events-none",
        destructive:
          "bg-gradient-to-br from-white/35 via-white/20 to-white/10 text-red-400 border border-red-300/50 shadow-glass-crystal hover:shadow-glass-crystal-hover hover:from-white/45 hover:via-white/25 hover:to-white/15 transform hover:-translate-y-2 before:absolute before:inset-0 before:bg-gradient-to-br before:from-red-200/25 before:via-transparent before:to-red-300/15 before:rounded-2xl after:absolute after:inset-[1px] after:bg-gradient-to-t after:from-transparent after:via-white/15 after:to-white/25 after:rounded-2xl after:pointer-events-none",
        outline:
          "bg-gradient-to-br from-white/30 via-white/15 to-white/8 border border-white/35 shadow-glass-crystal hover:shadow-glass-crystal-hover hover:from-white/40 hover:via-white/20 hover:to-white/12 transform hover:-translate-y-1.5 hover:scale-[1.02] text-foreground before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-100/20 before:via-transparent before:to-blue-100/12 before:rounded-2xl after:absolute after:inset-[1px] after:bg-gradient-to-t after:from-transparent after:via-white/12 after:to-white/20 after:rounded-2xl after:pointer-events-none",
        secondary:
          "bg-gradient-to-br from-white/32 via-white/18 to-white/9 text-muted-foreground border border-white/38 shadow-glass-crystal hover:shadow-glass-crystal-hover hover:from-white/42 hover:via-white/23 hover:to-white/12 transform hover:-translate-y-1.5 before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-50/25 before:via-transparent before:to-blue-50/15 before:rounded-2xl after:absolute after:inset-[1px] after:bg-gradient-to-t after:from-transparent after:via-white/14 after:to-white/22 after:rounded-2xl after:pointer-events-none",
        ghost: "bg-gradient-to-br from-white/25 via-white/12 to-white/6 hover:from-white/35 hover:via-white/18 hover:to-white/10 border border-white/25 hover:border-white/35 shadow-glass-subtle hover:shadow-glass-crystal transform hover:-translate-y-1 text-foreground before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-50/15 before:via-transparent before:to-blue-50/8 before:rounded-2xl after:absolute after:inset-[1px] after:bg-gradient-to-t after:from-transparent after:via-white/8 after:to-white/16 after:rounded-2xl after:pointer-events-none",
        link: "text-primary underline-offset-4 hover:underline bg-transparent",
        hero: "bg-gradient-to-br from-white/40 via-white/25 to-white/15 text-foreground font-semibold border border-white/45 shadow-glass-hero hover:shadow-glass-hero-hover hover:from-white/50 hover:via-white/30 hover:to-white/20 transform hover:-translate-y-3 hover:scale-[1.05] before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-300/30 before:via-transparent before:to-blue-300/20 before:rounded-2xl after:absolute after:inset-[1px] after:bg-gradient-to-t after:from-transparent after:via-white/20 after:to-white/35 after:rounded-2xl after:pointer-events-none",
        premium: "bg-gradient-to-br from-white/38 via-white/22 to-white/12 text-foreground border border-white/42 shadow-glass-crystal hover:shadow-glass-crystal-hover hover:from-white/48 hover:via-white/27 hover:to-white/16 transform hover:-translate-y-2 before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-100/25 before:via-transparent before:to-blue-100/18 before:rounded-2xl after:absolute after:inset-[1px] after:bg-gradient-to-t after:from-transparent after:via-white/18 after:to-white/30 after:rounded-2xl after:pointer-events-none",
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
