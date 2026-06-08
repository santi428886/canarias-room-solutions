import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function RealEstateAgencies() {
  return (
    <section id="inmobiliarias" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Para inmobiliarias"
              title="Convierte cada captación en ingresos recurrentes"
              subtitle="Colabora con nosotros y genera comisiones mensuales estables por cada vivienda que nos refieras. Sin gestión adicional de tu parte."
              light
              align="left"
            />

            <div className="space-y-4 text-cream/70">
              <p className="leading-relaxed">
                Por cada vivienda gestionada que nos derives, recibes una{" "}
                <strong className="text-gold font-semibold">
                  comisión recurrente del 12%
                </strong>{" "}
                sobre la renta mensual, de forma automática y durante toda la
                duración del contrato de gestión.
              </p>
              <p className="leading-relaxed">
                Transforma captaciones puntuales en una fuente de ingresos
                predecible. Ideal para inmobiliarias en Gran Canaria que buscan
                diferenciarse con un servicio premium.
              </p>
            </div>

            <div className="mt-10">
              <Button href="#contacto" variant="primary">
                Quiero colaborar
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-sm bg-gold/10 blur-xl" />
            <div className="relative border border-gold/20 bg-navy-light p-8 sm:p-10">
              <p className="mb-8 text-xs font-semibold tracking-[0.2em] uppercase text-gold">
                Ejemplo de comisión
              </p>

              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-cream/10 pb-6">
                  <span className="text-cream/60">Renta mensual gestionada</span>
                  <span className="font-serif text-2xl text-cream">1.500 €</span>
                </div>

                <div className="flex items-center justify-between border-b border-cream/10 pb-6">
                  <span className="text-cream/60">Comisión (12%)</span>
                  <span className="font-serif text-2xl text-gold">180 €/mes</span>
                </div>

                <div className="rounded-sm bg-gold/10 p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-cream/80">
                      Ingreso anual recurrente
                    </span>
                    <span className="font-serif text-3xl text-gold">2.160 €/año</span>
                  </div>
                  <p className="mt-3 text-xs text-cream/50">
                    180 €/mes × 12 meses = 2.160 €/año por vivienda
                  </p>
                </div>
              </div>

              <p className="mt-8 text-xs text-cream/40">
                * Cálculo orientativo. La comisión se abona mensualmente mientras
                la vivienda permanezca en gestión activa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
