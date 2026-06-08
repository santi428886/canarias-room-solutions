import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Owners } from "@/components/sections/Owners";
import { RealEstateAgencies } from "@/components/sections/RealEstateAgencies";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Owners />
        <RealEstateAgencies />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
