import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/iris-app-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-accent border border-border shadow-card">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-accent-foreground">AI-Powered Scheduling</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  <span className="text-foreground">Meet</span>{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Iris</span>
                </h1>
                
                <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                  Your AI lifestyle companion that helps you schedule your life and get shit done.
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Iris uses advanced AI to intelligently organize your calendar, prioritize tasks, 
                  and help you achieve more while maintaining perfect work-life balance.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="text-lg px-8 py-6 rounded-2xl"
                >
                  Join Early Access
                  <ArrowRight className="w-5 h-5" />
                </Button>
                
                <Button 
                  variant="premium" 
                  size="lg"
                  className="text-lg px-8 py-6 rounded-2xl"
                >
                  Watch Demo
                </Button>
              </div>
              
              <div className="flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>Free during beta</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>iOS & Android</span>
                </div>
              </div>
            </div>
            
            {/* App Preview */}
            <div className="relative">
              <div className="relative mx-auto max-w-md lg:max-w-lg">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 scale-105" />
                <img 
                  src={heroImage} 
                  alt="Iris App Interface" 
                  className="relative z-10 w-full h-auto rounded-3xl shadow-elegant"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;