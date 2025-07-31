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
    <section id="waitlist-form" className="py-32 bg-background border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-light text-foreground">
              Join the waitlist
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Be among the first to experience intelligent calendar management.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full bg-white/5 border border-white/20 text-foreground placeholder:text-muted-foreground focus:border-white/40 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              required
            />
            <Button 
              type="submit" 
              className="px-8 py-3 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300"
            >
              Join Waitlist
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground/60">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;