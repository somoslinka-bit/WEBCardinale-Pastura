import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhyFindSection } from "@/components/WhyFindSection";
import { ArrowsSection } from "@/components/ArrowsSection";
import { StepsSection } from "@/components/StepsSection";
import { AgentsEquitySection } from "@/components/AgentsEquitySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { LatestPostsSection } from "@/components/LatestPostsSection";
import { OutroSection } from "@/components/OutroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyFindSection />
        <ArrowsSection />
        <StepsSection />
        <AgentsEquitySection />
        <TestimonialsSection />
        <ServicesSection />
        <FeaturesSection />
        <LatestPostsSection />
        <OutroSection />
      </main>
    </>
  );
}
