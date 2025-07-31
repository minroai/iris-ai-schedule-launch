import { Mail, MapPin, Calendar, FileText, GitBranch, MessageSquare } from "lucide-react";

const ConnectedAppsSection = () => {
  const apps = [
    { name: "Gmail", icon: Mail, color: "text-white" },
    { name: "Maps", icon: MapPin, color: "text-white" },
    { name: "Calendar", icon: Calendar, color: "text-white" },
    { name: "Notion", icon: FileText, color: "text-white" },
    { name: "Linear", icon: GitBranch, color: "text-white" },
    { name: "Slack", icon: MessageSquare, color: "text-white" },
  ];

  return (
    <section className="py-20 bg-background border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
            {apps.map((app) => (
              <div
                key={app.name}
                className="flex flex-col items-center space-y-3 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-glass border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-all duration-300 shadow-glass backdrop-blur-sm">
                  <app.icon className={`w-8 h-8 ${app.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
                  {app.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectedAppsSection;