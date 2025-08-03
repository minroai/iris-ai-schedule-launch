import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import EarlyAccessSection from "@/components/EarlyAccessSection";

const Index = () => {
  return (
    <div className="h-screen overflow-y-scroll">
      <div>
        <HeroSection />
      </div>
      <div>
        <PhilosophySection />
      </div>
      <div>
        <EarlyAccessSection />
      </div>
    </div>
  );
};

export default Index;
