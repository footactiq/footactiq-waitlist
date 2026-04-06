import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import HowItWorks from "@/components/sections/HowItWorks";
import AICoachSection from "@/components/sections/AICoachSection";
import EarlyAccess from "@/components/sections/Earlyaccess";



export default function Home() {
  return (
    <main className="min-h-screen bg-brand-navy">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <HowItWorks />
      <AICoachSection />
      <EarlyAccess />
      <Footer />
    </main>
  );
}
