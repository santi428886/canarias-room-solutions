import Link from "next/link";
import {
  Calendar,
  ChartLine,
  Home,
  Layers,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OWNER_BENEFITS, PRUDENT_NOTE } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  layers: Layers,
  users: Users,
  wrench: Wrench,
  chart: ChartLine,
  home: Home,
  calendar: Calendar,
};

export function Owners() {
  return (
    <section id="propietarios" className="section-padding bg-white">
      <div className="container-main">
        <AnimateIn>
          <SectionHeading
            eyebrow="Propietarios"
            title="Soluciones de alquiler sin complicaciones para propietarios"
            subtitle="Nos encargamos de la gestión diaria de viviendas destinadas al alquiler por habitaciones: captación de inquilinos, coordinación, seguimiento, incidencias y mantenimiento básico."
          />
        </AnimateIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OWNER_BENEFITS.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <AnimateIn key={benefit.title} delay={index * 80}>
                <article className="card-modern h-full">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
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
          <p className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 text-center text-sm leading-relaxed text-gray-600">
            {PRUDENT_NOTE}
          </p>
        </AnimateIn>

        <AnimateIn delay={260}>
          <div className="mt-10 text-center">
            <Link href="#contacto" className="btn-primary">
              Solicitar valoración de mi vivienda
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
