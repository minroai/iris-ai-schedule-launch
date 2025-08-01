import { Brain, Calendar, Mic, Zap, Sprout, Utensils, RefreshCw } from "lucide-react";
const FeaturesSection = () => {
  const features = [{
    icon: Brain,
    title: "Understands how you work",
    description: "Learns your patterns from Gmail, Notion, Slack and past events with minimal setup or onboarding",
    iconBg: "bg-primary/10",
    iconColor: "text-primary"
  }, {
    icon: Calendar,
    title: "Schedules with friends",
    description: "No back-and-forth. Iris finds the best time across calendars and books it for everyone",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary"
  }, {
    icon: Mic,
    title: "Talk or text anytime",
    description: "Reschedule, adjust or check in with a quick voice note or message",
    iconBg: "bg-accent/10",
    iconColor: "text-accent"
  }, {
    icon: Zap,
    title: "Protects your priorities",
    description: "Blocks time for what matters and turns Linear tasks into focus blocks",
    iconBg: "bg-primary-glow/10",
    iconColor: "text-primary-glow"
  }, {
    icon: Utensils,
    title: "Plans your day around your life",
    description: "Recommends nearby meals and adjusts your schedule based on your energy, habits and real-world flow",
    iconBg: "bg-muted/20",
    iconColor: "text-foreground"
  }, {
    icon: RefreshCw,
    title: "Plans for you when you don't",
    description: "Missed a meeting? Overslept? Got distracted? Iris reshuffles priorities and rebooks what matters",
    iconBg: "bg-accent/10",
    iconColor: "text-accent"
  }];
  return <section id="features" className="pt-16 pb-32 px-6 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/2 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-primary-glow/2 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-sf font-light text-foreground mb-8 leading-tight">
            At its{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent font-medium">
              core
            </span>,
          </h2>
          
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => {
            const Icon = feature.icon;
            return <div key={index} className="group relative">
                  <div className="relative p-8 lg:p-10 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm hover:border-border/60 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-elegant">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${feature.iconColor}`} strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-sf font-medium text-foreground leading-tight">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-base lg:text-lg text-muted-foreground font-sf font-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Subtle hover indicator */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-subtle opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                  </div>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default FeaturesSection;