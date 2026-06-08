import { FileDown } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { CtaContactInfo } from "@/components/ui/ContactDetails";
import { ValuationForm } from "@/components/sections/ValuationForm";
import { CONTACT_STEPS } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section id="contacto" className="section-padding bg-gray-50">
      <div className="container-main">
        <AnimateIn>
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {CONTACT_STEPS.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="font-serif text-2xl text-gold">{item.step}</p>
                <h3 className="mt-2 font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-12 lg:px-12 lg:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(196,162,101,0.12),transparent_50%)]" />

            <div className="relative grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="lg:pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Valoración gratuita
                </p>
                <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
                  ¿Quieres valorar una vivienda?
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/70">
                  Complete el formulario con los datos de la propiedad.
                  Revisaremos si encaja con nuestro modelo de gestión y le
                  contactaremos con una respuesta clara y sin compromiso.
                </p>

                <CtaContactInfo />

                <div className="mt-10 hidden border-t border-white/10 pt-8 lg:block">
                  <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/50">
                    <FileDown className="h-4 w-4 text-gold" />
                    Próximamente: guía descargable para propietarios (PDF)
                  </div>
                </div>
              </div>

              <ValuationForm />
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
