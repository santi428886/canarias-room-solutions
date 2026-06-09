import {
  Activity,
  BedDouble,
  DoorOpen,
  FileText,
  MessageCircle,
  Sparkles,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OWNER_SERVICES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  wrench: Wrench,
  users: Users,
  door: DoorOpen,
  activity: Activity,
  file: FileText,
  bed: BedDouble,
  message: MessageCircle,
};

export function OwnerServices() {
  return (
    <section id="de-que-nos-encargamos" className="section-padding bg-white">
      <div className="container-main">
        <AnimateIn>
          <SectionHeading
            eyebrow="Propietarios"
            title={OWNER_SERVICES.title}
            subtitle={OWNER_SERVICES.subtitle}
          />
        </AnimateIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OWNER_SERVICES.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <AnimateIn key={item.title} delay={index * 60}>
                <article className="card-modern h-full">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
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

        <AnimateIn delay={500}>
          <p className="mx-auto mt-10 max-w-2xl rounded-2xl border border-gold/25 bg-beige/40 px-6 py-5 text-center text-base font-medium leading-relaxed text-navy sm:text-lg">
            {OWNER_SERVICES.highlight}
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
