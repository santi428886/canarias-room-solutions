import Link from "next/link";
import { FileDown, Mail } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import {
  BRAND,
  CONTACT_STEPS,
  EMAIL_BODY_AGENCY,
  EMAIL_BODY_OWNER,
  EMAIL_SUBJECT_AGENCY,
  EMAIL_SUBJECT_OWNER,
} from "@/lib/constants";

export function FinalCTA() {
  const mailtoOwner = `mailto:${BRAND.email}?subject=${encodeURIComponent(EMAIL_SUBJECT_OWNER)}&body=${EMAIL_BODY_OWNER}`;
  const mailtoAgency = `mailto:${BRAND.email}?subject=${encodeURIComponent(EMAIL_SUBJECT_AGENCY)}&body=${EMAIL_BODY_AGENCY}`;

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
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-16 text-center lg:px-16 lg:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(196,162,101,0.12),transparent_50%)]" />

            <div className="relative mx-auto max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Contacto
              </p>
              <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl lg:text-5xl">
                ¿Quieres valorar una vivienda?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
                Envíanos la ubicación, número de habitaciones y estado actual de
                la propiedad. Revisaremos si encaja con nuestro modelo de
                gestión y te responderemos con claridad.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href={mailtoOwner} className="btn-gold w-full sm:w-auto">
                  <Mail className="h-4 w-4" />
                  Soy propietario
                </Link>
                <Link
                  href={mailtoAgency}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 sm:w-auto"
                >
                  <Mail className="h-4 w-4" />
                  Soy inmobiliaria
                </Link>
              </div>

              <p className="mt-6 text-sm text-white/50">
                {BRAND.email} · Sin compromiso en la consulta inicial
              </p>

              <div className="mt-10 border-t border-white/10 pt-8">
                <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/50">
                  <FileDown className="h-4 w-4 text-gold" />
                  Próximamente: guía descargable para propietarios (PDF)
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
