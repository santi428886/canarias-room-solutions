import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Owners } from "@/components/sections/Owners";
import { RealEstateAgencies } from "@/components/sections/RealEstateAgencies";
import { WhyCanarias } from "@/components/sections/WhyCanarias";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PropertyTypes } from "@/components/sections/PropertyTypes";
import { OperatingZones } from "@/components/sections/OperatingZones";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Owners />
        <RealEstateAgencies />
        <WhyCanarias />
        <HowItWorks />
        <PropertyTypes />
        <OperatingZones />
        <BeforeAfter />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
