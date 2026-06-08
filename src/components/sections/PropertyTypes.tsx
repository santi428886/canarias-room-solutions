import {
  BedDouble,
  Bus,
  LayoutGrid,
  MapPin,
  Sofa,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROPERTY_TYPES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  bed: BedDouble,
  bus: Bus,
  map: MapPin,
  sofa: Sofa,
  "user-check": UserCheck,
  layout: LayoutGrid,
};

export function PropertyTypes() {
  return (
    <section id="viviendas" className="section-padding bg-white">
      <div className="container-main">
        <AnimateIn>
          <SectionHeading
            eyebrow="Perfil de vivienda"
            title="¿Qué tipo de viviendas buscamos?"
            subtitle="Priorizamos inmuebles con encaje real en un modelo de gestión por habitaciones, bien ubicados y con condiciones adecuadas para una operativa estable."
          />
        </AnimateIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTY_TYPES.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <AnimateIn key={item.title} delay={index * 80}>
                <article className="card-modern h-full">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-navy">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </article>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
