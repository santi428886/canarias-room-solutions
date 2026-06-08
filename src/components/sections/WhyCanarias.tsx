import {
  Activity,
  Handshake,
  LayoutGrid,
  MapPin,
  MessageCircle,
  Target,
  type LucideIcon,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_CRS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  target: Target,
  map: MapPin,
  message: MessageCircle,
  activity: Activity,
  layout: LayoutGrid,
  handshake: Handshake,
};

export function WhyCanarias() {
  return (
    <section id="por-que-crs" className="section-padding bg-white">
      <div className="container-main">
        <AnimateIn>
          <SectionHeading
            eyebrow="Confianza"
            title="¿Por qué Canarias Room Solutions?"
            subtitle="Un partner local con enfoque especializado, pensado para propietarios que buscan delegar con tranquilidad e inmobiliarias que necesitan una solución operativa fiable."
          />
        </AnimateIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CRS.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <AnimateIn key={item.title} delay={index * 70}>
                <article className="card-modern h-full border-navy/5">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
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
