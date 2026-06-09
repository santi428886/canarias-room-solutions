import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { AgenciesHero } from "@/components/sections/agencies/AgenciesHero";
import { AgencyCollaborationSteps } from "@/components/sections/agencies/AgencyCollaborationSteps";
import { AgencyCollaborationExample } from "@/components/sections/agencies/AgencyCollaborationExample";
import { AgencyWhyWorkWithUs } from "@/components/sections/agencies/AgencyWhyWorkWithUs";
import { AgencyPropertyCriteria } from "@/components/sections/agencies/AgencyPropertyCriteria";
import { AgencyPageBenefits } from "@/components/sections/agencies/AgencyPageBenefits";
import { AgencyFinalCTA } from "@/components/sections/agencies/AgencyFinalCTA";

export const metadata: Metadata = {
  title: {
    absolute:
      "Colaboración para inmobiliarias en Gran Canaria | Canarias Room Solutions",
  },
  description:
    "Colaboramos con inmobiliarias en Gran Canaria para viviendas con potencial de gestión por habitaciones.",
  openGraph: {
    title:
      "Colaboración para inmobiliarias en Gran Canaria | Canarias Room Solutions",
    description:
      "Colaboramos con inmobiliarias en Gran Canaria para viviendas con potencial de gestión por habitaciones.",
  },
};

export default function InmobiliariasPage() {
  return (
    <>
      <Header />
      <main>
        <AgenciesHero />
        <AgencyCollaborationSteps />
        <AgencyCollaborationExample />
        <AgencyWhyWorkWithUs />
        <AgencyPropertyCriteria />
        <AgencyPageBenefits />
        <AgencyFinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
