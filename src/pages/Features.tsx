import { Brain, Calendar, Mic, Zap, Sprout, Utensils } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Understands how you work — without needing a setup",
      description: "Connects to Gmail, Notion, Linear, Slack, and more to learn your habits, behavior, and patterns — with almost zero manual input.",
      gradient: "from-blue-500/20 to-purple-500/20",
      iconColor: "text-blue-400",
      glowColor: "shadow-blue-500/20"
    },
    {
      icon: Calendar,
      title: "Makes scheduling feel effortless",
      description: "Syncs calendars with friends, teammates, or clients. Finds ideal times, handles the back-and-forth, and books things instantly.",
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
      glowColor: "shadow-green-500/20"
    },
    {
      icon: Mic,
      title: "Text or talk to Iris on the go",
      description: "Message or voice command Iris anytime — whether you're walking, commuting, or too lazy to type.",
      gradient: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-400",
      glowColor: "shadow-orange-500/20"
    },
    {
      icon: Zap,
      title: "Reschedules things when life shifts",
      description: "If your day changes, Iris adapts in real time. Meetings move. Focus blocks shift. Nothing falls through the cracks.",
      gradient: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-400",
      glowColor: "shadow-yellow-500/20"
    },
    {
      icon: Sprout,
      title: "Builds a system around your side projects and life goals",
      description: "Blocks time for what matters — like your startup, writing, workouts, or actual downtime — and protects it.",
      gradient: "from-teal-500/20 to-cyan-500/20",
      iconColor: "text-teal-400",
      glowColor: "shadow-teal-500/20"
    },
    {
      icon: Utensils,
      title: "Even suggests meals based on your day and diet",
      description: "Pulls from Maps and your habits to suggest nearby food spots that fit your schedule and vibe.",
      gradient: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-400",
      glowColor: "shadow-pink-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold font-sf mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Everything Iris Can Do
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground font-sf font-light max-w-3xl mx-auto leading-relaxed">
            Discover how Iris transforms your productivity by learning your habits and building systems around the way you actually work.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group relative"
                >
                  <div className={`
                    relative p-8 lg:p-12 rounded-3xl border border-border/50 backdrop-blur-sm
                    bg-gradient-to-br ${feature.gradient}
                    hover:border-border transition-all duration-700 hover:scale-[1.02]
                    ${feature.glowColor} hover:shadow-2xl
                  `}>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
                      {/* Icon */}
                      <div className={`
                        p-4 rounded-2xl bg-background/10 backdrop-blur border border-border/20
                        ${feature.glowColor} shadow-lg group-hover:scale-110 transition-transform duration-300
                      `}>
                        <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl lg:text-3xl font-bold font-sf mb-4 text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-lg lg:text-xl text-muted-foreground font-sf font-light leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Subtle background pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                      <div className="w-full h-full rounded-full border border-current"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <div className="relative p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <h2 className="text-3xl lg:text-4xl font-bold font-sf mb-6 text-foreground">
              Ready to work with Iris?
            </h2>
            <p className="text-xl text-muted-foreground font-sf font-light mb-8 max-w-2xl mx-auto">
              Stop fighting with productivity systems. Let Iris build one around you.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-sf font-medium text-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Get Early Access
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;