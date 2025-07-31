import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import irisLogo from "@/assets/iris-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={irisLogo} 
              alt="Iris" 
              className="h-16 w-auto opacity-90"
            />
          </div>
          
          {/* Main headline */}
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-8xl font-light tracking-tight text-foreground">
              Calendar meets context.
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
              Iris connects your apps — Gmail, Maps, Notion, Linear, Calendar — to plan your day the way you actually live.
            </p>
          </div>
          
          {/* CTA */}
          <div className="pt-8">
            <Button 
              size="lg"
              className="text-lg px-12 py-6 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-elegant"
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Waitlist
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;