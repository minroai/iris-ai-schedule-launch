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
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.id}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="space-y-4">
                  <h3 className="text-4xl lg:text-5xl font-light text-foreground">
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
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="aspect-[4/5] rounded-3xl bg-gradient-glass border border-white/10 shadow-glass backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 mx-auto flex items-center justify-center">
                      <div className="w-6 h-6 border-l-2 border-white/60 border-l-white border-t-transparent border-r-transparent border-b-transparent rotate-45 transform translate-x-0.5"></div>
                    </div>
                    <p className="text-sm text-muted-foreground">Demo Video</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;