import Image from "next/image";
import Link from "next/link";
import { AGENCY_PAGE_HERO_IMAGE } from "@/lib/constants";

export function AgenciesHero() {
  return (
    <section className="relative overflow-hidden bg-gray-50 pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="animate-fade-up mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Inmobiliarias · Colaboración profesional
            </p>

            <h1 className="animate-fade-up delay-100 font-serif text-4xl leading-[1.12] text-navy sm:text-5xl lg:text-[3.1rem]">
              Colaboración para inmobiliarias en Gran Canaria
            </h1>

            <div className="animate-fade-up delay-150 mt-6 flex flex-wrap gap-3">
              {[
                "Comunicación directa",
                "Retribución acordada",
                "Respuesta en 24-48 horas",
              ].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-navy shadow-sm"
                >
                  ✓ {label}
                </span>
              ))}
            </div>

            <p className="animate-fade-up delay-200 mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Una colaboración profesional para inmobiliarias que buscan
              soluciones adicionales para determinados propietarios.
            </p>

            <div className="animate-fade-up delay-300 mt-10">
              <Link href="#contacto" className="btn-primary">
                Proponer una vivienda
              </Link>
            </div>
          </div>

          <div className="animate-fade-up delay-200 relative">
            <div className="absolute -inset-4 rounded-3xl bg-gold/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-navy/10">
              <Image
                src={AGENCY_PAGE_HERO_IMAGE}
                alt="Colaboración con inmobiliarias en Gran Canaria"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  Socio operativo
                </p>
                <p className="mt-1 text-sm text-navy">
                  Complementamos tu actividad con gestión especializada por
                  habitaciones, sin asumir tu operativa diaria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
