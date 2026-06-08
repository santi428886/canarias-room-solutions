import {
  Briefcase,
  ClipboardList,
  Coins,
  Handshake,
  Heart,
  Key,
  type LucideIcon,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AGENCY_BENEFITS, AGENCY_INTRO } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  handshake: Handshake,
  coins: Coins,
  key: Key,
  clipboard: ClipboardList,
  heart: Heart,
};

export function RealEstateAgencies() {
  return (
    <section id="inmobiliarias" className="section-padding bg-gray-50">
      <div className="container-main">
        <AnimateIn>
          <SectionHeading
            eyebrow="Inmobiliarias"
            title={AGENCY_INTRO.title}
            subtitle={AGENCY_INTRO.subtitle}
          />
        </AnimateIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AGENCY_BENEFITS.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <AnimateIn key={benefit.title} delay={index * 80}>
                <article className="card-modern h-full">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-navy">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {benefit.description}
                  </p>
                </article>
              </AnimateIn>
            );
          })}
        </div>

        <AnimateIn delay={200}>
          <p className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gold/20 bg-beige/30 px-6 py-5 text-center text-sm leading-relaxed text-gray-600">
            {AGENCY_INTRO.note}
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
