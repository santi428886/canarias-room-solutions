import { Check } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AGENCY_PAGE_BENEFITS } from "@/lib/constants";

export function AgencyPageBenefits() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <AnimateIn>
          <SectionHeading
            eyebrow="Ventajas"
            title="Beneficios para la inmobiliaria"
            subtitle="Una colaboración pensada para aportar valor a tu cartera, sin complejidad operativa ni compromisos agresivos."
          />
        </AnimateIn>

        <AnimateIn delay={100}>
          <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {AGENCY_PAGE_BENEFITS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium text-navy"
              >
                <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </AnimateIn>
      </div>
    </section>
  );
}
