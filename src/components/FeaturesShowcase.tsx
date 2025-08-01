const FeaturesShowcase = () => {
  const features = [
    {
      step: "01",
      title: "Seamless Onboarding",
      description: "No lengthy setup required. Iris learns your workflow through behavioral analysis as you use it naturally.",
      highlights: [
        "Zero configuration needed",
        "Learns from your behavior patterns", 
        "Gets smarter with every interaction"
      ]
    },
    {
      step: "02", 
      title: "Smart Context",
      description: "Automatically connects to your existing tools and understands your work patterns without manual configuration.",
      highlights: [
        "Integrates with 50+ popular apps",
        "Understands your tech stack automatically",
        "Pulls relevant context from your workflow"
      ]
    },
    {
      step: "03",
      title: "Collaborate",
      description: "Share calendars and coordinate with friends and colleagues through seamless app connections.",
      highlights: [
        "Add friends by email instantly",
        "Real-time calendar synchronization", 
        "Privacy controls for shared data"
      ]
    },
    {
      step: "04",
      title: "Communicate",
      description: "Interact naturally through text and voice, making your workflow feel conversational and intuitive.",
      highlights: [
        "Natural text conversations",
        "Voice command support",
        "Context-aware responses"
      ]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">How Iris Transforms Your Workflow</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the seamless journey from setup to collaboration
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Progress Line */}
          <div className="relative mb-16">
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-muted"></div>
            <div className="absolute top-6 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-primary to-primary/30"></div>
            
            <div className="relative flex justify-between">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mb-4 relative z-10">
                    {feature.step}
                  </div>
                  <h3 className="font-semibold text-center text-sm">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid lg:grid-cols-2 gap-16">
            {features.map((feature, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {feature.step}
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6">
                  {feature.description}
                </p>

                <ul className="space-y-3">
                  {feature.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Placeholder for feature visuals */}
                <div className="relative mt-8">
                  <div className="aspect-[4/3] bg-muted/20 rounded-2xl border border-border/50 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-2">{feature.title} Preview</p>
                      <p className="text-sm text-muted-foreground/70">Interactive demo coming soon</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-5 scale-105" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;