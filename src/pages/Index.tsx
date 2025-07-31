import HeroSection from "@/components/HeroSection";
import ConnectedAppsSection from "@/components/ConnectedAppsSection";
import UseCasesSection from "@/components/UseCasesSection";
import EarlyAccessSection from "@/components/EarlyAccessSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ConnectedAppsSection />
      <UseCasesSection />
      <EarlyAccessSection />
      <Footer />
    </div>
  );
};

export default Index;
