import { Mail, MessageCircle } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { BRAND } from "@/lib/constants";

export function AgencyFinalCTA() {
  const whatsappHref = `${BRAND.whatsappUrl}?text=${encodeURIComponent(BRAND.whatsappAgencyMessage)}`;

  return (
    <section id="contacto" className="section-padding bg-gray-50">
      <div className="container-main">
        <AnimateIn>
          <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-12 text-center lg:px-12 lg:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,162,101,0.12),transparent_60%)]" />

            <div className="relative mx-auto max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Contacto para inmobiliarias
              </p>
              <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
                ¿Tienes una vivienda que podría encajar?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70">
                Envíanos la ubicación, número de habitaciones y situación del
                propietario. Revisaremos el caso y responderemos en un plazo
                aproximado de 24-48 horas laborables.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center gap-2 !px-8"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href={`mailto:${BRAND.email}?subject=${encodeURIComponent("Propuesta de vivienda — Colaboración inmobiliaria")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-gold/40 hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" />
                  {BRAND.email}
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
