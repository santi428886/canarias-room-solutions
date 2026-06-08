import { MapPin } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OPERATING_ZONES, OPERATING_ZONES_NOTE } from "@/lib/constants";

export function OperatingZones() {
  return (
    <section id="zonas" className="section-padding bg-gray-50">
      <div className="container-main">
        <AnimateIn>
          <SectionHeading
            eyebrow="Cobertura"
            title="Zonas donde operamos"
            subtitle="Desarrollamos nuestra actividad principalmente en Las Palmas de Gran Canaria y barrios con demanda consolidada de alquiler por habitaciones."
          />
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
            {OPERATING_ZONES.map((zone) => (
              <span
                key={zone}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-navy shadow-sm transition-colors hover:border-gold/40 hover:bg-beige/30"
              >
                <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                {zone}
              </span>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={180}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-gray-600">
            {OPERATING_ZONES_NOTE}
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
