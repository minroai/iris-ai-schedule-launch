import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import EarlyAccessSection from "@/components/EarlyAccessSection";

const Index = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="snap-start snap-always">
        <HeroSection />
      </div>
      <div className="snap-start snap-always">
        <PhilosophySection />
      </div>
      <div className="snap-start snap-always">
        <EarlyAccessSection />
      </div>
    </div>
  );
};

export default Index;
