import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Header />
      <HeroSection />
      <FeatureHighlights />
      <Footer />
    </div>
  );
};

export default Index;
