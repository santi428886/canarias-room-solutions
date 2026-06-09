import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { OwnerFlexBand } from "@/components/sections/OwnerFlexBand";
import { OwnerValueChange } from "@/components/sections/OwnerValueChange";
import { OwnerServices } from "@/components/sections/OwnerServices";
import { OwnerCaseStudy } from "@/components/sections/OwnerCaseStudy";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PropertyTypes } from "@/components/sections/PropertyTypes";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { AboutUs } from "@/components/sections/AboutUs";
import { OwnerFaq } from "@/components/sections/OwnerFaq";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OwnerFlexBand />
        <OwnerValueChange />
        <OwnerServices />
        <OwnerCaseStudy />
        <HowItWorks />
        <PropertyTypes />
        <BeforeAfter />
        <AboutUs />
        <OwnerFaq />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
