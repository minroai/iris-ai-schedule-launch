import gmailLogo from "@/assets/logos/gmail.svg";
import mapsLogo from "@/assets/logos/maps.svg";
import notionLogo from "@/assets/logos/notion.png";
import linearLogo from "@/assets/logos/linear.png";
import slackLogo from "@/assets/logos/slack.svg";
import githubLogo from "@/assets/logos/github.svg";
import trelloLogo from "@/assets/logos/trello.svg";
import calendarLogo from "@/assets/logos/calendar.png";

const IntegrationsSection = () => {
  const integrations = [
    { name: "Gmail", logo: gmailLogo },
    { name: "Maps", logo: mapsLogo },
    { name: "Notion", logo: notionLogo },
    { name: "Linear", logo: linearLogo },
    { name: "Slack", logo: slackLogo },
    { name: "GitHub", logo: githubLogo },
    { name: "Trello", logo: trelloLogo },
    { name: "Calendar", logo: calendarLogo },
  ];

  // Duplicate the array for seamless scrolling
  const allIntegrations = [...integrations, ...integrations];

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground">
            Integrates with your stack
          </h2>
          
          <div className="relative">
            <div className="flex animate-marquee">
              {allIntegrations.map((integration, index) => (
                <div
                  key={`${integration.name}-${index}`}
                  className="flex flex-col items-center space-y-2 p-6 mx-8 min-w-[120px] hover:scale-110 transition-transform"
                >
                  <img 
                    src={integration.logo} 
                    alt={`${integration.name} logo`}
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {integration.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;