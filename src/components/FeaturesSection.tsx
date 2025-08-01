import { Brain, Users, Zap, Shield, Calendar, Clock, MessageCircle, Sparkles, Globe, Lock } from "lucide-react";

const FeaturesSection = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: "Zero Setup Intelligence",
      subtitle: "Iris learns from your existing tools",
      description: "Connect your Gmail, Slack, Notion, and other tools. Iris automatically understands your work patterns, priorities, and preferences—no manual setup required.",
      benefits: ["Pulls context from your emails", "Learns your meeting patterns", "Understands your peak hours", "Knows your project priorities"],
      color: "from-purple-500/20 to-blue-500/20",
      glow: "shadow-purple-500/20"
    },
    {
      icon: Users,
      title: "Shared Calendar Magic",
      subtitle: "Coordinate effortlessly with friends",
      description: "Add friends to see each other's availability and plan together. Perfect for coordinating hangouts, shared projects, or just staying connected.",
      benefits: ["See friends' availability", "Plan group events easily", "Share calendar permissions", "Coordinate across time zones"],
      color: "from-emerald-500/20 to-teal-500/20",
      glow: "shadow-emerald-500/20"
    }
  ];

  const supportingFeatures = [
    {
      icon: Zap,
      title: "Instant Adaptation",
      description: "Real-time schedule optimization based on your energy, location, and changing priorities.",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: Shield,
      title: "Privacy First", 
      description: "Your data stays secure. We only see what you choose to share, when you choose to share it.",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered time blocking that adapts to your habits and optimizes for deep work.",
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      icon: MessageCircle,
      title: "Natural Conversations",
      description: "Chat with Iris like you would a friend. Voice, text, or quick commands—whatever feels natural.",
      color: "from-pink-500/20 to-rose-500/20"
    }
  ];

  return (
    <section className="py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary-glow/3 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/2 via-blue-500/2 to-emerald-500/2 rounded-full blur-3xl animate-glass-float" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-glass-float"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary-glow/40 rounded-full animate-glass-float delay-500"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-glass-float delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-24 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Powered by AI</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-sf font-bold text-foreground">
              Built for how you
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-glass-shimmer"> actually work</span>
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-sf">
              Stop fighting your calendar. Iris understands your workflow and connects you with the people who matter.
            </p>
          </div>
          
          {/* Main Features - Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16 mb-32">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group relative"
                >
                  {/* Enhanced Feature Card */}
                  <div className={`p-12 rounded-3xl bg-gradient-to-br from-card/95 via-card/85 to-card/75 border border-white/10 shadow-glass-subtle hover:shadow-glass-crystal hover:${feature.glow} transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02] backdrop-blur-xl relative overflow-hidden`}>
                    
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${feature.color} rounded-3xl transition-opacity duration-700`} />
                    
                    {/* Enhanced Icon */}
                    <div className="mb-10 relative z-10">
                      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border border-primary/20 backdrop-blur-lg flex items-center justify-center group-hover:from-primary/30 group-hover:via-primary/15 group-hover:to-primary/8 transition-all duration-500 shadow-glass-subtle group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    
                    {/* Enhanced Content */}
                    <div className="space-y-6 relative z-10">
                      <div>
                        <h3 className="text-3xl font-sf font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                          {feature.title}
                        </h3>
                        <p className="text-primary/80 font-sf font-medium text-lg">
                          {feature.subtitle}
                        </p>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed text-lg font-sf">
                        {feature.description}
                      </p>
                      
                      {/* Enhanced Benefits List */}
                      <div className="grid grid-cols-1 gap-4 pt-6">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-3 group/benefit">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary-glow group-hover/benefit:scale-125 transition-transform duration-300" />
                            <span className="text-muted-foreground group-hover/benefit:text-foreground transition-colors duration-300 font-sf">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Supporting Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {supportingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group relative"
                >
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-card/80 via-card/60 to-card/40 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105 backdrop-blur-lg relative overflow-hidden">
                    
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${feature.color} rounded-3xl transition-opacity duration-500`} />
                    
                    {/* Icon */}
                    <div className="mb-6 relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 via-primary/8 to-primary/3 border border-primary/10 flex items-center justify-center group-hover:from-primary/25 group-hover:via-primary/15 group-hover:to-primary/8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h4 className="text-xl font-sf font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed font-sf text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;