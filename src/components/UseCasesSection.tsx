const UseCasesSection = () => {
  const useCases = [
    {
      id: "woke-up",
      title: "I just woke up",
      description: "Iris automatically reschedules early meetings and sends updates to attendees.",
      detail: "Running late? Iris analyzes your morning routine, reschedules conflicting meetings, and notifies all participants with a single tap.",
    },
    {
      id: "starving",
      title: "I'm starving",
      description: "Suggests restaurants that fit your calendar and are nearby.",
      detail: "Iris finds restaurants near your next meeting, checks your dietary preferences, and books reservations that work with your schedule.",
    },
    {
      id: "add-friends",
      title: "Add friends",
      description: "Sync calendars with friends and schedule together seamlessly.",
      detail: "Connect with friends' calendars to find mutual free time, plan group activities, and coordinate schedules without endless back-and-forth.",
    },
    {
      id: "side-project",
      title: "Work on side project",
      description: "Parses Linear tickets and finds the best time to focus.",
      detail: "Iris analyzes your Linear tickets, estimates time needed, and automatically blocks focused work sessions when you're most productive.",
    },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,hsl(0_0%_0%/0.02),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,hsl(0_0%_0%/0.02),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-24">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.id}
              className={`grid lg:grid-cols-2 gap-16 items-center opacity-0 animate-fade-in [animation-fill-mode:forwards] ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              style={{ animationDelay: `${index * 200 + 400}ms` }}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="space-y-4">
                  <h3 className="text-4xl lg:text-5xl font-light text-foreground hover:text-primary transition-colors duration-500">
                    "{useCase.title}"
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                  <p className="text-lg text-muted-foreground/80 leading-relaxed">
                    {useCase.detail}
                  </p>
                </div>
              </div>
              
              {/* Video placeholder */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} group`}>
                <div className="relative">
                  <div className="aspect-[4/5] rounded-3xl bg-gradient-glass border border-border/20 shadow-glass-subtle backdrop-blur-sm flex items-center justify-center group-hover:shadow-glass-crystal group-hover:border-border/40 transition-all duration-700 group-hover:scale-[1.02] overflow-hidden">
                    <div className="text-center space-y-4 relative z-10">
                      <div className="w-16 h-16 rounded-full bg-foreground/10 border border-border/20 mx-auto flex items-center justify-center group-hover:bg-foreground/20 group-hover:border-border/40 transition-all duration-500 group-hover:scale-110">
                        <div className="w-0 h-0 border-l-[8px] border-l-foreground/60 border-y-[6px] border-y-transparent ml-1 group-hover:border-l-foreground/80 transition-colors duration-500" />
                      </div>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-500">Demo Video</p>
                    </div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl scale-110" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-gradient-radial from-primary/3 to-transparent rounded-full animate-glass-float opacity-40" />
      <div className="absolute bottom-1/3 left-10 w-16 h-16 bg-gradient-radial from-accent/3 to-transparent rounded-full animate-glass-float [animation-delay:2s] opacity-30" />
    </section>
  );
};

export default UseCasesSection;