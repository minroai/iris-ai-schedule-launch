import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, FileText, GitBranch, MapPin, Calendar, MessageSquare } from "lucide-react";
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
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  <span className="text-foreground">meet</span>{" "}
                  <span 
                    className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent animate-glass-float"
                    style={{
                      backgroundSize: '200% 200%',
                      backgroundImage: 'linear-gradient(45deg, #a855f7, #3b82f6, #10b981, #8b5cf6, #06b6d4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Iris
                  </span>
                </h1>
                
                <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                  calendar meets context
                </h2>
                
                {/* Connected Apps Scrolling Section */}
                <div className="py-8">
                  <div className="overflow-hidden relative">
                    <div className="flex animate-scroll-horizontal gap-8 whitespace-nowrap">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                        <Mail className="w-5 h-5 text-red-500" />
                        <span className="text-sm font-medium">Gmail</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                        <FileText className="w-5 h-5 text-gray-700" />
                        <span className="text-sm font-medium">Notion</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                        <GitBranch className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium">Linear</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                        <MapPin className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-medium">Google Maps</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                        <Calendar className="w-5 h-5 text-blue-500" />
                        <span className="text-sm font-medium">Calendar</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                        <MessageSquare className="w-5 h-5 text-purple-600" />
                        <span className="text-sm font-medium">Slack</span>
                      </div>
                      {/* Duplicate for seamless loop */}
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                        <Mail className="w-5 h-5 text-red-500" />
                        <span className="text-sm font-medium">Gmail</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                        <FileText className="w-5 h-5 text-gray-700" />
                        <span className="text-sm font-medium">Notion</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                        <GitBranch className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium">Linear</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                        <MapPin className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-medium">Google Maps</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="iridescent" 
                  size="lg"
                  className="text-lg px-8 py-6 rounded-2xl"
                  onClick={() => document.getElementById('early-access-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                >
                  Join Early Access
                  <ArrowRight className="w-5 h-5" />
                </Button>
                
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