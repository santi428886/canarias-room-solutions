import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { OWNER_FLEX_BAND } from "@/lib/constants";

export function OwnerFlexBand() {
  return (
    <section id="propietarios" className="relative overflow-hidden bg-navy py-14 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(196,162,101,0.14),transparent_50%)]" />

      <div className="container-main relative">
        <AnimateIn>
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Propietarios
              </p>
              <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
                {OWNER_FLEX_BAND.title}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-white/70">
                {OWNER_FLEX_BAND.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <ul className="space-y-3">
                {OWNER_FLEX_BAND.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-sm font-medium text-white/90 sm:text-base"
                  >
                    <span className="text-gold">✔</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link
                href="#contacto"
                className="btn-gold mt-8 inline-flex w-full justify-center sm:w-auto"
              >
                {OWNER_FLEX_BAND.cta}
              </Link>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
