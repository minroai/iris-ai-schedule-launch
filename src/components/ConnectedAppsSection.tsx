import { Mail, MapPin, Calendar, FileText, GitBranch, MessageSquare } from "lucide-react";

const ConnectedAppsSection = () => {
  const apps = [
    { name: "Gmail", icon: Mail, color: "text-foreground" },
    { name: "Maps", icon: MapPin, color: "text-foreground" },
    { name: "Calendar", icon: Calendar, color: "text-foreground" },
    { name: "Notion", icon: FileText, color: "text-foreground" },
    { name: "Linear", icon: GitBranch, color: "text-foreground" },
    { name: "Slack", icon: MessageSquare, color: "text-foreground" },
  ];

  return (
    <section className="py-20 bg-background border-t border-border/10 relative overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
            {apps.map((app, index) => (
              <div
                key={app.name}
                className="flex flex-col items-center space-y-3 group cursor-pointer animate-fade-in opacity-0 [animation-fill-mode:forwards]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-glass border border-border/20 flex items-center justify-center group-hover:border-border/40 transition-all duration-500 shadow-glass-subtle backdrop-blur-sm group-hover:shadow-glass-crystal group-hover:scale-110 group-hover:-translate-y-1">
                    <app.icon className={`w-8 h-8 ${app.color} opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110`} />
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-150" />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-all duration-500 font-medium group-hover:scale-105">
                  {app.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating background elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-radial from-primary/5 to-transparent rounded-full animate-glass-float opacity-50" />
      <div className="absolute bottom-10 left-20 w-24 h-24 bg-gradient-radial from-accent/5 to-transparent rounded-full animate-glass-float [animation-delay:3s] opacity-30" />
    </section>
  );
};

export default ConnectedAppsSection;