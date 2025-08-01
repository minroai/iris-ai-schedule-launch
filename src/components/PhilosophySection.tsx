const PhilosophySection = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-primary-glow/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-sf font-medium text-black leading-tight tracking-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent font-medium">Iris turns your events into a system.</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg lg:text-xl text-gray-600 font-sf font-light leading-relaxed max-w-2xl mx-auto">
            Iris analyzes your behavior across tools, learns your rhythm, and quietly builds a personalized system in your calendar.
          </p>

          {/* Integrations */}
          <div className="space-y-8">
            <h3 className="text-xl font-medium text-gray-700">Integrates with:</h3>

            <div className="relative w-full max-w-4xl mx-auto py-8 overflow-visible">
              {/* Gradient overlay on left */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
              
              {/* Auto-scrolling logos container */}
              <div className="flex overflow-hidden">
                {/* First set of logos - using marquee animation */}
                <div className="flex animate-marquee whitespace-nowrap py-4">
                  {[
                    { src: "/src/assets/logos/googlecal.png", alt: "Google Calendar" },
                    { src: "/src/assets/logos/applelogo.png", alt: "Apple Calendar" },
                    { src: "/src/assets/logos/slacklogo.png", alt: "Slack" },
                    { src: "/src/assets/logos/gmaillogo.jpg", alt: "Gmail" },
                    { src: "/src/assets/logos/notionlogo.png", alt: "Notion" },
                    { src: "/src/assets/logos/mapslogo.png", alt: "Google Maps" },
                    { src: "/src/assets/logos/linearlogo.png", alt: "Linear" }
                  ].map(({ src, alt }) => (
                    <div key={alt} className="flex items-center justify-center w-24 h-24 mx-6 bg-white/60 backdrop-blur-md rounded-xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 overflow-visible">
                      <div className="relative w-16 h-16 flex items-center justify-center p-2">
                        <div className="absolute inset-0 bg-white/80 rounded-lg"></div>
                        <img src={src} alt={alt} className="relative z-10 w-full h-full object-contain p-1" />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Duplicate set for seamless looping */}
                <div className="flex animate-marquee whitespace-nowrap py-4">
                  {[
                    { src: "/src/assets/logos/googlecal.png", alt: "Google Calendar" },
                    { src: "/src/assets/logos/applelogo.png", alt: "Apple Calendar" },
                    { src: "/src/assets/logos/slack.png", alt: "Slack" },
                    { src: "/src/assets/logos/gmaillogo.png", alt: "Gmail" },
                    { src: "/src/assets/logos/notionlogo.png", alt: "Notion" },
                    { src: "/src/assets/logos/mapslogo.png", alt: "Google Maps" },
                    { src: "/src/assets/logos/linearlogo.png", alt: "Linear" }
                  ].map(({ src, alt }) => (
                    <div key={`${alt}-dup`} className="flex items-center justify-center w-24 h-24 mx-6 bg-white/60 backdrop-blur-md rounded-xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 overflow-visible">
                      <div className="relative w-16 h-16 flex items-center justify-center p-2">
                        <div className="absolute inset-0 bg-white/80 rounded-lg"></div>
                        <img src={src} alt={alt} className="relative z-10 w-full h-full object-contain p-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Gradient overlay on right */}
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
