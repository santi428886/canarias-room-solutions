import { Handshake, Key, Shield, TrendingUp, type LucideIcon } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AGENCY_WHY_WORK_WITH_US } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  trending: TrendingUp,
  shield: Shield,
  key: Key,
  handshake: Handshake,
};

export function AgencyWhyWorkWithUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <AnimateIn>
          <SectionHeading
            eyebrow="Colaboración"
            title={AGENCY_WHY_WORK_WITH_US.title}
            subtitle="Muchos propietarios buscan soluciones diferentes al alquiler tradicional. Canarias Room Solutions puede convertirse en una alternativa adicional para determinados perfiles de vivienda."
          />
        </AnimateIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AGENCY_WHY_WORK_WITH_US.blocks.map((block, index) => {
            const Icon = iconMap[block.icon];
            return (
              <AnimateIn key={block.title} delay={index * 80}>
                <article className="card-modern h-full">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-navy">{block.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {block.description}
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
