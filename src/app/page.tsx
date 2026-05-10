import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ParallaxSection } from "@/components/ui/parallax-scrolling";
import { NosotrosSection } from "@/components/WhyFindSection";
import { FilosofiaSection } from "@/components/StepsSection";
import { ProyectosSection } from "@/components/ServicesSection";
import { ContactoSection } from "@/components/OutroSection";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <HeroSection />
        <ParallaxSection />
        <NosotrosSection />
        <FilosofiaSection />
        <ProyectosSection />
        <ContactoSection />
      </main>
    </>
  );
}
