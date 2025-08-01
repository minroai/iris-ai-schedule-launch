import { ArrowRight, CheckCircle, Sparkles, Brain, MessageSquare, Users } from "lucide-react";

const FeaturesShowcase = () => {
  const features = [
    {
      step: "01",
      title: "Seamless Onboarding",
      description: "Connect your existing tools like Gmail, Slack, and Notion. Iris learns from your behavior patterns with zero manual setup required.",
      icon: Brain,
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-500/20 to-purple-500/20"
    },
    {
      step: "02", 
      title: "Smart Context Understanding",
      description: "AI automatically understands your workflow, energy patterns, and priorities to create the perfect schedule for your unique style.",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20"
    },
    {
      step: "03",
      title: "Effortless Collaboration", 
      description: "Share calendars and coordinate with friends seamlessly. See availability, plan group events, and sync across time zones.",
      icon: Users,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-500/20 to-teal-500/20"
    },
    {
      step: "04",
      title: "Natural Communication",
      description: "Chat with Iris using voice, text, or quick commands. It feels like talking to a friend who knows your schedule inside out.",
      icon: MessageSquare,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/2 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-primary-glow/2 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Step by Step Process</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-sf font-bold mb-6 tracking-tight">
            How Iris <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sf leading-relaxed">
            Four simple steps to transform your daily workflow
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group relative">
                  <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0 relative">
                      <div className="flex items-center gap-6">
                        {/* Step Number */}
                        <div className={`w-20 h-20 rounded-full border-2 border-transparent bg-gradient-to-r ${feature.color} p-[2px] group-hover:scale-110 transition-all duration-500`}>
                          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                            <span className={`text-lg font-sf font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                              {feature.step}
                            </span>
                          </div>
                        </div>
                        
                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.bgColor} border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 backdrop-blur-sm`}>
                          <Icon className={`w-8 h-8 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <h3 className={`text-3xl lg:text-4xl font-sf font-bold mb-4 group-hover:bg-gradient-to-r group-hover:${feature.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500`}>
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-lg lg:text-xl font-sf leading-relaxed max-w-3xl group-hover:text-foreground transition-colors duration-500">
                        {feature.description}
                      </p>
                      
                      {/* Progress indicator */}
                      <div className="flex items-center gap-2 pt-4">
                        <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${feature.color} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                        <span className="text-sm text-muted-foreground font-sf">
                          Step {feature.step} of 04
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connection Line */}
                  {index < features.length - 1 && (
                    <div className="flex justify-center lg:justify-start lg:ml-10 mt-12">
                      <div className="flex flex-col items-center">
                        <div className="w-px h-16 bg-gradient-to-b from-border/60 via-border/30 to-transparent" />
                        <ArrowRight className="w-5 h-5 text-primary/40 rotate-90 lg:rotate-0 animate-pulse" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;