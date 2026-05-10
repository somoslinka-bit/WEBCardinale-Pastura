import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
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
        <NosotrosSection />
        <FilosofiaSection />
        <ProyectosSection />
        <ContactoSection />
      </main>
    </>
  );
}
