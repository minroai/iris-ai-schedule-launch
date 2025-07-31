import { Calendar, Mail, MapPin, FileText, GitBranch } from "lucide-react";

const apps = [
  { name: "Google Maps", icon: MapPin },
  { name: "Gmail", icon: Mail },
  { name: "Apple Calendar", icon: Calendar },
  { name: "Notion", icon: FileText },
  { name: "Linear", icon: GitBranch },
];

const ConnectedAppsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-light text-center text-muted-foreground mb-16">
            Seamlessly integrates with your favorite tools
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {apps.map((app) => (
              <div 
                key={app.name} 
                className="flex flex-col items-center space-y-4 p-6 rounded-2xl hover:bg-muted/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center">
                  <app.icon className="w-6 h-6 text-foreground/70" />
                </div>
                <span className="text-sm font-medium text-muted-foreground text-center">
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