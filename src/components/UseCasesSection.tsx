const useCases = [
  {
    title: "Just woke up?",
    description: "Automatically reschedules missed meetings and sends calendar invites to everyone affected",
    scenario: "I overslept and missed my 9 AM meeting",
    outcome: "Iris reschedules everything, notifies attendees, and finds the next available slot that works for everyone"
  },
  {
    title: "Feeling hungry?",
    description: "Recommends restaurants that fit perfectly into your schedule and location",
    scenario: "I'm starving but have back-to-back meetings",
    outcome: "Iris finds nearby restaurants with delivery times that match your 30-minute lunch break"
  },
  {
    title: "Add friends' calendars",
    description: "Sync calendars with friends and book meetings that automatically appear on both schedules",
    scenario: "Want to grab coffee with Sarah next week",
    outcome: "Iris finds mutual free time, books it on both calendars, and suggests the perfect café location"
  },
  {
    title: "Side project time",
    description: "Analyzes your Linear tickets and automatically schedules focused work sessions",
    scenario: "My side project is falling behind",
    outcome: "Iris reviews open tickets, prioritizes them, and blocks time in your calendar to tackle them systematically"
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
              See Iris in action
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Real scenarios where Iris makes your life easier
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {useCases.map((useCase, index) => (
              <div key={index} className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-light text-foreground">
                    {useCase.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
                
                <div className="bg-muted/30 rounded-2xl p-8 space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      Scenario
                    </h4>
                    <p className="text-foreground italic">
                      "{useCase.scenario}"
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      Iris handles it
                    </h4>
                    <p className="text-foreground">
                      {useCase.outcome}
                    </p>
                  </div>
                </div>
                
                {/* Placeholder for video demo */}
                <div className="aspect-video bg-muted/20 rounded-2xl flex items-center justify-center border-2 border-dashed border-muted">
                  <span className="text-muted-foreground font-light">
                    Demo video placeholder
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;