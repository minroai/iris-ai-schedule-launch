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
                  className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
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