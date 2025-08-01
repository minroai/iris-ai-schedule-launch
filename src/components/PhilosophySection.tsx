const PhilosophySection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-primary/2 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-primary-glow/2 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-12">
            <h2 className="text-3xl lg:text-5xl font-sf font-light text-foreground leading-tight tracking-tight animate-fade-in">
              <span className="text-white font-medium">
                This isn't a new system.
              </span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent font-medium">
                It's the first one that fits you
              </span>
              .
            </h2>
            
            <div className="space-y-4 animate-fade-in [animation-delay:0.5s] [animation-fill-mode:forwards] opacity-0">
              <p className="text-xl lg:text-2xl text-foreground font-sf font-light leading-relaxed max-w-3xl mx-auto">
                The problem isn't your discipline.
              </p>
              <p className="text-xl lg:text-2xl text-foreground font-sf font-light leading-relaxed max-w-3xl mx-auto">
                It's that your systems weren't designed for how you work.
              </p>
            </div>
            
            <div className="space-y-6 mt-16">
              <p className="text-lg lg:text-xl text-muted-foreground font-sf font-light leading-relaxed max-w-2xl mx-auto animate-fade-in [animation-delay:1s] [animation-fill-mode:forwards] opacity-0">
                Iris watches your behavior across tools, learns your rhythm, and quietly builds systems around you.
              </p>
              
              <p className="text-lg lg:text-xl text-muted-foreground font-sf font-light leading-relaxed max-w-2xl mx-auto animate-fade-in [animation-delay:1.5s] [animation-fill-mode:forwards] opacity-0">
                So you can stop testing productivity hacks — and actually get things done.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;