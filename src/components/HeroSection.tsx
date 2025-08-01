import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideo from "@/assets/irisv0_final_final_finalpreview.mov";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-6 pt-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left space-y-8 order-1 lg:order-1">
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-sf font-bold tracking-tight">
                  <span className="text-foreground">Meet</span>{" "}
                  <span className="text-primary bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent animate-glass-float" style={{
                  backgroundSize: '200% 200%',
                  backgroundImage: 'linear-gradient(45deg, #a855f7, #3b82f6, #10b981, #8b5cf6, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                    Iris
                  </span>
                </h1>
                
                <h2 className="text-base lg:text-3xl font-sf font-semibold text-white">
                  Plans your day from your real life
                </h2>
                
                
              </div>
              
              <div className="hidden lg:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="iridescent" size="lg" className="text-lg px-8 py-6 rounded-2xl" onClick={() => document.getElementById('early-access-form')?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              })}>
                  Join Early Access
                  <ArrowRight className="w-5 h-5" />
                </Button>
                
                <Link to="/features">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-2xl">
                    See All Features
                  </Button>
                </Link>
                
              </div>
              
            </div>
            
            {/* App Preview */}
            <div className="relative order-2 lg:order-2">
              <div className="relative mx-auto max-w-md lg:max-w-lg">
                {/* Phone Frame */}
                <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl border border-gray-800/50">
                  {/* Screen Content */}
                  <div className="relative bg-black rounded-[2.25rem] overflow-hidden">
                    {/* Minimal notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-b-xl z-10"></div>
                    <video 
                      src={heroVideo} 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      className="w-full h-auto rounded-[2.25rem]"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  {/* Minimal side buttons */}
                  <div className="absolute -left-[1px] top-24 w-[2px] h-6 bg-black rounded-l-sm"></div>
                  <div className="absolute -left-[1px] top-36 w-[2px] h-10 bg-black rounded-l-sm"></div>
                  <div className="absolute -right-[1px] top-32 w-[2px] h-12 bg-black rounded-r-sm"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-primary rounded-[3rem] blur-3xl opacity-10 scale-105" />
              </div>
            </div>
          </div>
          
          {/* Mobile buttons below video */}
          <div className="lg:hidden flex flex-col gap-3 items-center mt-8">
            <Button variant="iridescent" size="default" className="text-sm px-6 py-4 rounded-2xl" onClick={() => document.getElementById('early-access-form')?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          })}>
              Join Early Access
              <ArrowRight className="w-4 h-4" />
            </Button>
            
            <Link to="/features">
              <Button variant="outline" size="default" className="text-sm px-6 py-4 rounded-2xl">
                See All Features
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;