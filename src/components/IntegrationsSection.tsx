import { Mail, Map, BookOpen, Zap, MessageSquare, Calendar, Github, Trello } from "lucide-react";

const IntegrationsSection = () => {
  const integrations = [
    { name: "Gmail", icon: Mail },
    { name: "Maps", icon: Map },
    { name: "Notion", icon: BookOpen },
    { name: "Linear", icon: Zap },
    { name: "Slack", icon: MessageSquare },
    { name: "Calendar", icon: Calendar },
    { name: "GitHub", icon: Github },
    { name: "Trello", icon: Trello },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground">
            Integrates with your stack
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center max-w-4xl mx-auto">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <integration.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;