import { Brain, Users, Zap, Shield } from "lucide-react";

const FeaturesSection = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: "Zero Setup Intelligence",
      subtitle: "Iris learns from your existing tools",
      description: "Connect your Gmail, Slack, Notion, and other tools. Iris automatically understands your work patterns, priorities, and preferences—no manual setup required.",
      benefits: ["Pulls context from your emails", "Learns your meeting patterns", "Understands your peak hours", "Knows your project priorities"]
    },
    {
      icon: Users,
      title: "Shared Calendar Magic",
      subtitle: "Coordinate effortlessly with friends",
      description: "Add friends to see each other's availability and plan together. Perfect for coordinating hangouts, shared projects, or just staying connected.",
      benefits: ["See friends' availability", "Plan group events easily", "Share calendar permissions", "Coordinate across time zones"]
    }
  ];

  const supportingFeatures = [
    {
      icon: Zap,
      title: "Instant Adaptation",
      description: "Real-time schedule optimization based on your energy, location, and changing priorities."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data stays secure. We only see what you choose to share, when you choose to share it."
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary-glow/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
              Built for how you
              <span className="bg-gradient-primary bg-clip-text text-transparent"> actually work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stop fighting your calendar. Iris understands your workflow and connects you with the people who matter.
            </p>
          </div>
          
          {/* Main Features - Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group relative"
                >
                  {/* Feature Card */}
                  <div className="p-10 rounded-3xl bg-gradient-to-br from-card/95 via-card/85 to-card/75 border border-white/10 shadow-glass-subtle hover:shadow-glass-crystal transition-all duration-700 hover:-translate-y-2 backdrop-blur-xl relative overflow-hidden">
                    
                    {/* Icon */}
                    <div className="mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border border-primary/20 backdrop-blur-lg flex items-center justify-center group-hover:from-primary/30 group-hover:via-primary/15 group-hover:to-primary/8 transition-all duration-500 shadow-glass-subtle">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                          {feature.title}
                        </h3>
                        <p className="text-primary/80 font-medium">
                          {feature.subtitle}
                        </p>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {feature.description}
                      </p>
                      
                      {/* Benefits List */}
                      <div className="grid grid-cols-2 gap-3 pt-4">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                            <span className="text-sm text-muted-foreground">
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

          {/* Supporting Features */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supportingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-card/70 via-card/50 to-card/30 border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-1 backdrop-blur-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 via-primary/8 to-primary/3 border border-primary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:via-primary/12 group-hover:to-primary/5 transition-all duration-500">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
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