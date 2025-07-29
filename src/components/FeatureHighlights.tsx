import { Card } from "@/components/ui/card";
import { Brain, Calendar, Zap, Users, Target, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Scheduling",
    description: "Let our intelligent AI analyze your habits and preferences to create the perfect schedule that actually works for your lifestyle."
  },
  {
    icon: Calendar,
    title: "Smart Calendar Integration",
    description: "Seamlessly sync with all your existing calendars while our AI optimizes your time blocks for maximum productivity."
  },
  {
    icon: Zap,
    title: "Instant Task Management",
    description: "Add tasks with natural language and watch Iris automatically schedule them in the perfect time slots."
  },
  {
    icon: Target,
    title: "Goal Achievement",
    description: "Set meaningful goals and let Iris break them down into actionable steps, scheduling progress time automatically."
  },
  {
    icon: Users,
    title: "Team Coordination",
    description: "Coordinate with family, friends, and colleagues effortlessly with shared calendars and intelligent meeting scheduling."
  },
  {
    icon: Sparkles,
    title: "Personalized Insights",
    description: "Get personalized recommendations and insights about your productivity patterns to continuously improve your schedule."
  }
];

const FeatureHighlights = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Iris?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Iris isn't just another calendar app. It's your personal AI assistant that understands your lifestyle and helps you make the most of every moment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/50 backdrop-blur-sm"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-primary-glow rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;