import { Brain, Calendar, Target, Zap, Clock, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms analyze your habits and preferences to create personalized schedules that actually work."
    },
    {
      icon: Calendar,
      title: "Smart Calendar Sync",
      description: "Seamlessly integrates with all your existing calendars while intelligently managing conflicts and optimizing your time."
    },
    {
      icon: Target,
      title: "Goal Achievement",
      description: "Break down big goals into manageable daily actions. Iris tracks your progress and adjusts your schedule to keep you on track."
    },
    {
      icon: Zap,
      title: "Instant Optimization",
      description: "Real-time schedule adjustments based on your energy levels, location, and priorities. Your perfect day, every day."
    },
    {
      icon: Clock,
      title: "Time Blocking",
      description: "Automatic time blocking for deep work, meetings, and personal time. No more context switching or lost productivity."
    },
    {
      icon: Users,
      title: "Team Coordination",
      description: "Effortlessly coordinate with colleagues, friends, and family. Find the perfect time for everyone, automatically."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Intelligent scheduling for
              <span className="bg-gradient-primary bg-clip-text text-transparent"> modern life</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Iris doesn't just manage your calendar—it understands your life and helps you live it better.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group p-8 rounded-3xl bg-gradient-to-br from-white/25 via-white/10 to-white/5 border border-white/30 shadow-glass-crystal hover:shadow-glass-crystal-hover transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-200/15 before:via-transparent before:to-blue-200/8 before:rounded-3xl after:absolute after:inset-[1px] after:bg-gradient-to-t after:from-transparent after:via-white/8 after:to-white/15 after:rounded-3xl after:pointer-events-none"
                >
                  <div className="relative z-10 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/40 via-white/20 to-white/10 border border-white/30 backdrop-blur-lg flex items-center justify-center group-hover:from-white/50 group-hover:via-white/25 group-hover:to-white/15 transition-all duration-500 shadow-glass-subtle">
                      <Icon className="w-7 h-7 text-primary relative z-10" />
                    </div>
                  </div>
                  
                  <h3 className="relative z-10 text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                    {feature.title}
                  </h3>
                  
                  <p className="relative z-10 text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
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