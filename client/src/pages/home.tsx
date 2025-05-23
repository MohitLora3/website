
import HeroSection from "@/components/home/hero-section";
import MeetDialio from "@/components/home/meet-dialio";
import SolutionsSection from "@/components/home/solutions-section";
import FeaturesPreview from "@/components/home/features-preview";
import HowItWorksPreview from "@/components/home/how-it-works-preview";
import PricingSection from "@/components/home/pricing-section";
import ComparisonSection from "@/components/home/comparison-section";
import FAQSection from "@/components/home/faq-section";
import CTASection from "@/components/shared/cta-section";
import { useEffect } from "react";

export default function Home() {
  // Update document title
  useEffect(() => {
    document.title = "Dialio - Comprehensive AI-Powered Call Management Platform";
  }, []);

  return (
    <div className="overflow-hidden">
      <HeroSection />
      <div className="-mt-16">
        <MeetDialio />
      </div>
      <SolutionsSection />
      <FeaturesPreview />
      <HowItWorksPreview />
      <PricingSection />
      <ComparisonSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
