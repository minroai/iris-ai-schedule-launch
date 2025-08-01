import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideo from "@/assets/irisv0_final_final_finalpreview.mov";
import { useState } from "react";

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  return (
    <section className="relative h-screen flex flex-col md:items-center justify-start md:justify-center bg-white overflow-hidden pt-0 md:pt-0">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-6 py-2 md:py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center px-4 sm:px-8 lg:px-[50px]">
            {/* Content */}
            <div className="text-center lg:text-left space-y-4 md:space-y-8 order-1 lg:order-1 mt-0 md:mt-0">
              <div className="space-y-3 md:space-y-6">
                <h1 className="text-5xl lg:text-8xl font-sf font-bold tracking-tight">
                  <span className="text-black">Meet</span>{" "}
                  <span
                    className="text-primary bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(45deg, #a855f7, #3b82f6, #10b981, #8b5cf6, #06b6d4)",
                      backgroundSize: "200% 200%",
                      backgroundRepeat: "repeat",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      color: "transparent",
                      willChange: "background-position",
                      display: "inline-block",
                      animation: "gradient-shift 3s ease-in-out infinite"
                    }}
                  >
                    Iris
                  </span>
                </h1>
              </div>
              
              <div className="hidden lg:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#early-access" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <Button variant="default" size="lg" className="text-lg px-8 py-6 rounded-2xl text-black backdrop-blur-md bg-primary/10 border border-primary/30 shadow-[0_8px_32px_rgba(139,92,246,0.25)] hover:bg-primary/15 hover:border-primary/40 hover:shadow-[0_12px_48px_rgba(139,92,246,0.35)] transition-all duration-300">
                    Join Early Access
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
            
            {/* App Preview */}
            <div className="relative order-2 lg:order-2">
              <div className="relative mx-auto w-72 lg:w-96">
                {videoLoaded ? (
                  <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl border border-gray-800/50 transition-opacity duration-500 opacity-100">
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
                        ref={video => {
                          if (video) video.playbackRate = 1.5;
                        }}
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    {/* Minimal side buttons */}
                    <div className="absolute -left-[1px] top-24 w-[2px] h-6 bg-black rounded-l-sm"></div>
                    <div className="absolute -left-[1px] top-36 w-[2px] h-10 bg-black rounded-l-sm"></div>
                    <div className="absolute -right-[1px] top-32 w-[2px] h-12 bg-black rounded-r-sm"></div>
                  </div>
                ) : (
                  <div className="relative w-72 lg:w-96 h-[500px] flex items-center justify-center">
                    <div className="animate-pulse flex space-x-4">
                      <div className="rounded-full bg-gray-200 h-12 w-12"></div>
                    </div>
                    <video 
                      src={heroVideo} 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      className="hidden" 
                      ref={video => {
                        if (video) video.playbackRate = 1.5;
                      }}
                      onLoadedData={() => setVideoLoaded(true)}
                    />
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-primary rounded-[3rem] blur-3xl opacity-10 scale-90" />
            </div>
          </div>
          
          {/* Mobile buttons below video */}
          <div className="lg:hidden flex flex-col gap-3 items-center mt-8">
            <a href="#early-access" onClick={(e) => {
              e.preventDefault();
              document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Button variant="default" size="default" className="text-sm px-6 py-4 rounded-2xl text-black backdrop-blur-md bg-primary/10 border border-primary/30 shadow-[0_8px_32px_rgba(139,92,246,0.25)] hover:bg-primary/15 hover:border-primary/40 hover:shadow-[0_12px_48px_rgba(139,92,246,0.35)] transition-all duration-300">
                Join Early Access
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;