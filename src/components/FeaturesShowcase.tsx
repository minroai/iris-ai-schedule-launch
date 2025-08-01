const FeaturesShowcase = () => {
  const features = [
    {
      step: "01",
      title: "Seamless Onboarding",
      description: "Iris learns from your behavior. No setup required."
    },
    {
      step: "02", 
      title: "Smart Context",
      description: "Automatically connects to your tools and understands your workflow."
    },
    {
      step: "03",
      title: "Collaborate",
      description: "Share calendars and coordinate with friends effortlessly."
    },
    {
      step: "04",
      title: "Communicate",
      description: "Natural text and voice interactions that feel intuitive."
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light mb-6 tracking-tight">How Iris Works</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light">
            Four steps to transform your workflow
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-16">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full border border-border/20 bg-background flex items-center justify-center transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/5">
                      <span className="text-sm font-light text-muted-foreground group-hover:text-primary transition-colors duration-300">
                        {feature.step}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 pt-3">
                    <h3 className="text-2xl font-light mb-3 transition-colors duration-300 group-hover:text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {index < features.length - 1 && (
                  <div className="ml-8 mt-8">
                    <div className="w-px h-12 bg-gradient-to-b from-border/40 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;