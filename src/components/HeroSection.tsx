import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import irisLogo from "@/assets/iris-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Logo */}
          <div className="flex justify-center">
            <img 
              src={irisLogo} 
              alt="Iris" 
              className="h-16 w-auto opacity-90"
            />
          </div>
          
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-foreground">
              Calendar meets context
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Connects your apps together to understand your life and help you get things done
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Button 
              variant="default" 
              size="lg"
              className="text-lg px-8 py-6 rounded-full font-medium"
              onClick={() => document.getElementById('early-access-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            >
              Join Early Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;