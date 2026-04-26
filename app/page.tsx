import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Career } from "@/components/Career";
import { AIWork } from "@/components/AIWork";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <Career />
      <AIWork />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
