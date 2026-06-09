import { AnimateIn } from "@/components/ui/AnimateIn";
import { CtaContactInfo } from "@/components/ui/ContactDetails";
import { ValuationForm } from "@/components/sections/ValuationForm";

export function FinalCTA() {
  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container-main">
        <AnimateIn>
          <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-12 lg:px-12 lg:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(196,162,101,0.12),transparent_50%)]" />

            <div className="relative grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="lg:pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Valoración gratuita
                </p>
                <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
                  ¿Quieres valorar tu vivienda?
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/70">
                  Complete el formulario con los datos de la propiedad.
                  Revisaremos si encaja con nuestro modelo y le contactaremos
                  en 24-48 horas laborables, sin compromiso.
                </p>

                <CtaContactInfo />
              </div>

              <ValuationForm />
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
