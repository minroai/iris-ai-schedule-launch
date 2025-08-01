const PhilosophySection = () => {
  return <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-primary/2 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-primary-glow/2 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-12">
            <h2 className="text-3xl lg:text-5xl font-sf font-light text-foreground leading-tight tracking-tight">
              <span className="text-white font-medium">
                This isn't a new system.
              </span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent font-medium">
                It's the first one that fits you
              </span>
              .
            </h2>
            
            
            
            <div className="space-y-6 mt-16">
              <p className="text-lg lg:text-xl text-muted-foreground font-sf font-light leading-relaxed max-w-2xl mx-auto">Iris analyzes your behavior across tools, learns your rhythm, and quietly builds systems in your calendar.</p>
              
              <p className="text-lg lg:text-xl text-muted-foreground font-sf font-light leading-relaxed max-w-2xl mx-auto mb-12">
                So you can stop testing productivity hacks — and actually get things done.
              </p>
              
              {/* Integration Logos */}
              <div className="flex flex-col items-center space-y-8 mt-16">
                {/* First Block - Calendar Apps */}
                <div className="flex items-center justify-center space-x-8 border border-white/20 rounded-xl px-8 py-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/5 rounded-lg">
                    <img src="/src/assets/logos/calendar.png" alt="Apple Calendar" className="w-8 h-8" />
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 bg-white/5 rounded-lg">
                    <img src="/src/assets/logos/calendar.png" alt="Google Calendar" className="w-8 h-8" />
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 bg-white/5 rounded-lg">
                    <img src="/src/assets/logos/calendar.png" alt="Outlook" className="w-8 h-8" />
                  </div>
                </div>
                
                {/* Plus Sign */}
                <div className="text-primary text-2xl font-light">+</div>
                
                {/* Second Block - Productivity Apps */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PhilosophySection;