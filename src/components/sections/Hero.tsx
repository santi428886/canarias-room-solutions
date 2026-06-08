import Image from "next/image";
import Link from "next/link";
import { HERO_IMAGE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-50 pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="animate-fade-up mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Gran Canaria · Gestión por habitaciones
            </p>

            <h1 className="animate-fade-up delay-100 font-serif text-4xl leading-[1.12] text-navy sm:text-5xl lg:text-[3.1rem]">
              Gestión profesional de viviendas por habitaciones en Gran Canaria
            </h1>

            <p className="animate-fade-up delay-200 mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Canarias Room Solutions ayuda a propietarios e inmobiliarias a
              gestionar viviendas destinadas al alquiler por habitaciones, con
              un modelo ordenado, transparente y enfocado en la estabilidad.
            </p>

            <div className="animate-fade-up delay-300 mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="#propietarios" className="btn-primary">
                Soy propietario
              </Link>
              <Link href="#inmobiliarias" className="btn-secondary">
                Soy inmobiliaria
              </Link>
            </div>

            <p className="animate-fade-up delay-300 mt-5 text-sm text-gray-500">
              Valoración inicial sin compromiso · Respuesta en 24–48 horas
              laborables
            </p>
          </div>

          <div className="animate-fade-up delay-200 relative">
            <div className="absolute -inset-4 rounded-3xl bg-gold/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-navy/10">
              <Image
                src={HERO_IMAGE}
                alt="Vivienda gestionada profesionalmente en Gran Canaria"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  Modelo de gestión especializado
                </p>
                <p className="mt-1 text-sm text-navy">
                  Mayor control, seguimiento continuo y coordinación profesional
                  del alquiler por habitaciones.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-up delay-400 mt-14 flex flex-wrap items-center justify-center gap-3 border-t border-gray-200 pt-10 lg:mt-16">
          {[
            "Gran Canaria",
            "Gestión especializada",
            "Modelo transparente",
            "Seguimiento continuo",
          ].map((label) => (
            <span
              key={label}
              className="inline-flex items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-navy shadow-sm"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
