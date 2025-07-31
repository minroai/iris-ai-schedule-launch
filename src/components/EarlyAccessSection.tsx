import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const EarlyAccessSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list!",
        description: "We'll notify you when Iris is ready.",
      });
      setEmail("");
    }
  };

  return (
    <section id="waitlist-form" className="py-32 bg-background border-t border-border/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/3 to-transparent rounded-full blur-3xl animate-glass-float opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-accent/3 to-transparent rounded-full blur-3xl animate-glass-float [animation-delay:3s] opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div className="space-y-6 animate-fade-in opacity-0 [animation-fill-mode:forwards]">
            <h2 className="text-4xl lg:text-5xl font-light text-foreground">
              Join the waitlist
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Be among the first to experience intelligent calendar management.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms] group">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full transition-all duration-500 focus:scale-[1.02] focus:shadow-glass-crystal"
              required
            />
            <Button 
              type="submit" 
              className="group/btn px-8 py-3 rounded-full bg-primary text-primary-foreground hover:shadow-glass-hero-hover transition-all duration-500 shadow-glass-hero border border-border/20 hover:border-border/40 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join Waitlist
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground/60 animate-fade-in opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms]">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;