import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-all duration-700 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 backdrop-blur-md relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-white/10 text-foreground border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/15 hover:border-white/30 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),0_16px_48px_rgba(0,0,0,0.4)] transform hover:-translate-y-1 hover:scale-[1.02] before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:via-white/5 before:to-transparent before:rounded-2xl",
        destructive:
          "bg-white/8 text-red-400 border border-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/12 hover:border-white/25 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_16px_48px_rgba(0,0,0,0.4)] transform hover:-translate-y-1 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/15 before:via-white/3 before:to-transparent before:rounded-2xl",
        outline:
          "bg-white/6 border border-white/25 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_4px_16px_rgba(0,0,0,0.2)] hover:bg-white/10 hover:border-white/35 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_8px_24px_rgba(0,0,0,0.3)] transform hover:-translate-y-0.5 hover:scale-[1.01] text-foreground before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/12 before:via-white/2 before:to-transparent before:rounded-2xl",
        secondary:
          "bg-white/7 text-muted-foreground border border-white/18 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.22),0_6px_24px_rgba(0,0,0,0.25)] hover:bg-white/11 hover:border-white/28 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.32),0_12px_36px_rgba(0,0,0,0.35)] transform hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/14 before:via-white/3 before:to-transparent before:rounded-2xl",
        ghost: "bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_2px_8px_rgba(0,0,0,0.15)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_4px_16px_rgba(0,0,0,0.25)] transform hover:-translate-y-0.5 text-foreground before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:via-white/2 before:to-transparent before:rounded-2xl",
        link: "text-primary underline-offset-4 hover:underline bg-transparent",
        hero: "bg-white/15 text-foreground font-semibold border border-white/30 shadow-[inset_0_2px_0_0_rgba(255,255,255,0.4),0_20px_60px_rgba(0,0,0,0.4)] hover:bg-white/20 hover:border-white/40 hover:shadow-[inset_0_2px_0_0_rgba(255,255,255,0.5),0_30px_80px_rgba(0,0,0,0.5)] transform hover:-translate-y-2 hover:scale-[1.03] before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/25 before:via-white/8 before:to-transparent before:rounded-2xl",
        premium: "bg-white/12 text-foreground border border-white/25 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_12px_40px_rgba(0,0,0,0.3)] hover:bg-white/17 hover:border-white/35 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),0_18px_56px_rgba(0,0,0,0.4)] transform hover:-translate-y-1.5 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:via-white/6 before:to-transparent before:rounded-2xl",
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
