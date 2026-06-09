import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { OwnerMainMessage } from "@/components/sections/OwnerMainMessage";
import { OwnerCaseStudy } from "@/components/sections/OwnerCaseStudy";
import { OwnerChangeComparison } from "@/components/sections/OwnerChangeComparison";
import { OwnerServices } from "@/components/sections/OwnerServices";
import { OwnerFaq } from "@/components/sections/OwnerFaq";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OwnerMainMessage />
        <OwnerCaseStudy />
        <OwnerChangeComparison />
        <OwnerServices />
        <OwnerFaq />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
