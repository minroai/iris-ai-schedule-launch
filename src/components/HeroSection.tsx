import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import irisLogo from "@/assets/iris-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,black_1px,transparent_1px)] bg-[size:32px_32px] animate-glass-float" />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="relative group">
              <img 
                src={irisLogo} 
                alt="Iris" 
                className="h-16 w-auto opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
            </div>
          </div>
          
          {/* Main headline */}
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-8xl font-light tracking-tight text-foreground animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
              Calendar meets context.
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
              Iris connects your apps — Gmail, Maps, Notion, Linear, Calendar — to plan your day the way you actually live.
            </p>
          </div>
          
          {/* CTA */}
          <div className="pt-8 animate-fade-in [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
            <Button 
              size="lg"
              className="group text-lg px-12 py-6 rounded-full bg-primary text-primary-foreground hover:shadow-glass-hero-hover transition-all duration-500 shadow-glass-hero border border-border/20 hover:border-border/40 hover:scale-105 relative overflow-hidden"
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-3">
                Join Waitlist
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-foreground/5 rounded-full animate-glass-float [animation-delay:0s]" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-foreground/5 rounded-full animate-glass-float [animation-delay:2s]" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-foreground/5 rounded-full animate-glass-float [animation-delay:4s]" />
      </div>
    </section>
  );
};

export default HeroSection;