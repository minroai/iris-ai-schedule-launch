const PhilosophySection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Heading */}
          <h2 className="text-3xl lg:text-5xl font-sf font-light text-foreground leading-tight tracking-tight">
            <span className="text-white font-medium">This isn't a new system.</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent font-medium">
              It's the first one that fits you.
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-lg lg:text-xl text-muted-foreground font-sf font-light leading-relaxed max-w-2xl mx-auto">
            Iris analyzes your behavior across tools, learns your rhythm, and quietly builds a personalized system in your calendar.
          </p>

          {/* Integrations */}
          <div className="space-y-8">
            <h3 className="text-xl font-medium text-muted-foreground">Iris integrates with:</h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center items-center max-w-3xl mx-auto">
              {/* Repeat this block for each integration */}
              {[
                { src: "/src/assets/logos/googlecal.png", alt: "Google Calendar" },
                { src: "/src/assets/logos/applelogo.png", alt: "Apple Calendar" },
                { src: "/src/assets/logos/slack.png", alt: "Slack" },
                { src: "/src/assets/logos/gmaillogo.png", alt: "Gmail" },
                { src: "/src/assets/logos/notionlogo.png", alt: "Notion" },
                { src: "/src/assets/logos/mapslogo.png", alt: "Google Maps" },
                { src: "/src/assets/logos/linearlogo.png", alt: "Linear" }
              ].map(({ src, alt }) => (
                <div key={alt} className="flex items-center justify-center w-14 h-14 bg-white/5 rounded-lg">
                  <img src={src} alt={alt} className="w-8 h-8" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
