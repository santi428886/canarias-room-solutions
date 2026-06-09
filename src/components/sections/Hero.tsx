import Image from "next/image";
import Link from "next/link";
import {
  HERO_IMAGE,
  HERO_OWNER_HIGHLIGHT,
  HERO_TITLE,
} from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-50 pt-24 pb-10 lg:pt-32 lg:pb-14">
      <div className="container-main">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Gran Canaria · Gestión por habitaciones
            </p>

            <h1 className="animate-fade-up delay-100 font-serif text-4xl leading-[1.12] text-navy sm:text-5xl lg:text-[3.1rem]">
              {HERO_TITLE}
            </h1>

            <p className="animate-fade-up delay-200 mt-5 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              {HERO_OWNER_HIGHLIGHT}
            </p>

            <div className="animate-fade-up delay-300 mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contacto" className="btn-primary">
                Solicitar valoración
              </Link>
              <Link href="/inmobiliarias" className="btn-secondary">
                Soy inmobiliaria
              </Link>
            </div>
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
              <div className="absolute inset-0 bg-gradient-to-t from-navy/25 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
