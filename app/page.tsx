import { Navbar } from "@/components/layout/Navbar";
import { HeroMain } from "@/components/sections/HeroMain";
import { LogoTicker } from "@/components/sections/LogoTicker";
import { BentoGridFeatures } from "@/components/sections/BentoGridFeatures";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-void selection:bg-ember selection:text-white overflow-hidden">
      <Navbar />
      <HeroMain />
      <LogoTicker />
      <BentoGridFeatures />
      <Testimonials />
      <Footer />
    </main>
  );
}
