const PhilosophySection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-primary/2 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-primary-glow/2 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-sf font-light text-foreground leading-tight tracking-tight">
              Discipline meets{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent font-medium">
                systems
              </span>
              .
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground font-sf font-light leading-relaxed max-w-3xl mx-auto opacity-80">
              90% of mental fatigue can be cured by systems that cater to how you work.
            </p>
            
            <div className="space-y-6 mt-16">
              <p className="text-lg lg:text-xl text-muted-foreground font-sf font-light leading-relaxed max-w-2xl mx-auto opacity-70">
                Iris watches your behavior across tools, learns your rhythm, and builds systems around you.
              </p>
              
              <p className="text-lg lg:text-xl text-muted-foreground font-sf font-light leading-relaxed max-w-2xl mx-auto opacity-70">
                Our goal is to help you stop forcing productivity and just flow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;