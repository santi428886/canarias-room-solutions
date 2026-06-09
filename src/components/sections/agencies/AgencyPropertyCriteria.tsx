import { Check } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AGENCY_PROPERTY_CRITERIA } from "@/lib/constants";

export function AgencyPropertyCriteria() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-main">
        <AnimateIn>
          <SectionHeading
            eyebrow="Perfil de vivienda"
            title="Qué viviendas nos interesan"
            subtitle="Priorizamos inmuebles con encaje real en un modelo de gestión por habitaciones, bien ubicados y con condiciones adecuadas para una operativa estable."
          />
        </AnimateIn>

        <AnimateIn delay={100}>
          <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {AGENCY_PROPERTY_CRITERIA.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-navy shadow-sm"
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
