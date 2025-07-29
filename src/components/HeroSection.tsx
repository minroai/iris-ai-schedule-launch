import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/iris-hero.jpg";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleEarlyAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email",
        description: "We need your email to notify you when Iris launches.",
      });
      return;
    }
    
    // Here you would typically send to your backend
    toast({
      title: "You're on the list! 🎉",
      description: "We'll notify you when Iris is ready for early access.",
    });
    setEmail("");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Meet{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Iris
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                The AI-powered lifestyle app that helps you schedule your life and get stuff done.
              </p>
              <p className="text-lg text-muted-foreground/80">
                Coming soon to iOS and Android
              </p>
            </div>

            {/* Early access form */}
            <form onSubmit={handleEarlyAccess} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-base"
              />
              <Button 
                type="submit" 
                variant="hero" 
                size="lg"
                className="h-12 px-8 text-base font-semibold"
              >
                Get Early Access
              </Button>
            </form>

            <p className="text-sm text-muted-foreground">
              Join thousands of early adopters. No spam, ever.
            </p>
          </div>

          {/* Right content - App mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={heroImage}
                alt="Iris App Preview"
                className="w-full max-w-lg rounded-3xl shadow-2xl animate-float"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-primary-glow/20 blur-xl -z-10 animate-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;