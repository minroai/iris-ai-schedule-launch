import HeroSection from "@/components/HeroSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import FeaturesSection from "@/components/FeaturesSection";
import EarlyAccessSection from "@/components/EarlyAccessSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntegrationsSection />
      <FeaturesSection />
      <EarlyAccessSection />
      <footer className="py-8 text-center">
        <p className="text-sm text-muted-foreground">© 2024 Iris. All rights reserved. Iris is a trademark of Minro Inc.</p>
      </footer>
    </div>
  );
};

export default Index;
