import { AnimateIn } from "@/components/ui/AnimateIn";
import { CtaContactInfo } from "@/components/ui/ContactDetails";
import { ValuationForm } from "@/components/sections/ValuationForm";

export function FinalCTA() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden section-padding"
      style={{ background: "linear-gradient(170deg, #071A38 0%, #040E1C 50%, #071A38 100%)" }}
    >
      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 gold-separator" />
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_30%_30%,rgba(201,168,76,0.09),transparent_65%)]" />

      <div className="container-main relative">
        <AnimateIn>
          <div className="relative grid items-start gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Left — copy */}
            <div className="lg:pt-4">
              <span className="inline-flex items-center rounded-full border border-gold/25 bg-gold/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Valoración gratuita
              </span>
              <h2 className="mt-5 font-serif text-3xl text-white sm:text-4xl lg:text-5xl">
                ¿Quieres valorar tu vivienda?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/60 lg:text-lg">
                Complete el formulario y le contactaremos en 24–48 horas,
                sin compromiso.
              </p>

              {/* Divider */}
              <div className="mt-8 h-px w-24 bg-gradient-to-r from-gold/40 to-transparent" />

              <CtaContactInfo />
            </div>

            {/* Right — form */}
            <ValuationForm />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
