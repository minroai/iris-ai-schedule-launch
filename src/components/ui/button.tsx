import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 backdrop-blur-md",
  {
    variants: {
      variant: {
        default: "bg-primary/20 text-primary-foreground border border-primary/30 backdrop-blur-md hover:bg-primary/30 hover:border-primary/40 shadow-glass hover:shadow-glass-hover transform hover:-translate-y-1 hover:scale-[1.02]",
        destructive:
          "bg-destructive/20 text-destructive-foreground border border-destructive/30 backdrop-blur-md hover:bg-destructive/30 hover:border-destructive/40 shadow-glass hover:shadow-glass-hover transform hover:-translate-y-1",
        outline:
          "border border-border/50 bg-background/20 backdrop-blur-md hover:bg-accent/30 hover:text-accent-foreground hover:border-accent/40 shadow-glass hover:shadow-glass-hover transform hover:-translate-y-0.5",
        secondary:
          "bg-secondary/20 text-secondary-foreground border border-secondary/30 backdrop-blur-md hover:bg-secondary/30 hover:border-secondary/40 shadow-glass hover:shadow-glass-hover transform hover:-translate-y-0.5",
        ghost: "bg-transparent backdrop-blur-sm hover:bg-accent/20 hover:text-accent-foreground border border-transparent hover:border-accent/20 shadow-glass-subtle hover:shadow-glass transform hover:-translate-y-0.5",
        link: "text-primary underline-offset-4 hover:underline bg-transparent",
        hero: "bg-gradient-to-r from-primary/30 to-primary-glow/30 text-primary-foreground border border-primary/40 backdrop-blur-lg hover:from-primary/40 hover:to-primary-glow/40 hover:border-primary/50 shadow-glass-large hover:shadow-glass-large-hover transform hover:-translate-y-2 hover:scale-[1.05]",
        premium: "bg-card/30 text-card-foreground border border-border/40 backdrop-blur-md hover:bg-accent/30 hover:text-accent-foreground hover:border-accent/40 shadow-glass hover:shadow-glass-hover transform hover:-translate-y-1",
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
