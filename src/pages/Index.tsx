import HeroSection from "@/components/HeroSection";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import EarlyAccessSection from "@/components/EarlyAccessSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesShowcase />
      <EarlyAccessSection />
      <footer className="py-8 text-center">
        <p className="text-sm text-muted-foreground">© 2024 Iris. All rights reserved. Iris is a trademark of Minro Inc.</p>
      </footer>
    </div>
  );
};

export default Index;
