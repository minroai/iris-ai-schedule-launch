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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-br from-white/25 via-white/10 to-white/5 border border-white/30 shadow-glass-subtle backdrop-blur-xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-100/15 before:via-transparent before:to-blue-100/8 before:rounded-2xl after:absolute after:inset-[1px] after:bg-gradient-to-t after:from-transparent after:via-white/8 after:to-white/15 after:rounded-2xl after:pointer-events-none">
                <Sparkles className="w-4 h-4 text-primary relative z-10" />
                <span className="text-sm font-medium text-foreground relative z-10">AI-Powered Scheduling</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  <span className="text-foreground">Meet</span>{" "}
                  <span className="relative inline-block">
                    {/* Background glow for visibility */}
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-400/40 via-blue-400/40 to-emerald-400/40 blur-xl animate-glass-shimmer rounded-lg" 
                          style={{
                            backgroundSize: '200% 200%',
                            backgroundImage: 'linear-gradient(45deg, #a855f7, #3b82f6, #10b981, #8b5cf6, #06b6d4)',
                            filter: 'blur(20px)',
                            zIndex: -1
                          }}>
                    </span>
                    {/* Main text with enhanced visibility */}
                    <span 
                      className="relative bg-gradient-to-r from-purple-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent animate-glass-float font-black"
                      style={{
                        backgroundSize: '200% 200%',
                        backgroundImage: 'linear-gradient(45deg, #c084fc, #93c5fd, #6ee7b7, #c084fc, #67e8f9)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(59, 130, 246, 0.3)',
                        filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))'
                      }}
                    >
                      Iris
                    </span>
                    {/* Additional shimmer overlay */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-glass-shimmer rounded-lg" 
                          style={{
                            backgroundSize: '200% 100%',
                            backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                            zIndex: 1,
                            pointerEvents: 'none'
                          }}>
                    </span>
                  </span>
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
                  variant="hero" 
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