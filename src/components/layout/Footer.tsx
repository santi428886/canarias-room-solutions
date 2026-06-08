import { BRAND } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl text-cream">Canarias Room</p>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold">
              Solutions
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Gestión premium de viviendas en Gran Canaria. Rentabilidad sin
              complicaciones para propietarios e inmobiliarias.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              Contacto
            </p>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  WhatsApp: {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {BRAND.email}
                </a>
              </li>
              <li>Gran Canaria, Islas Canarias</li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              Servicios
            </p>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>Gestión integral de viviendas</li>
              <li>Alquiler por habitaciones</li>
              <li>Colaboración con inmobiliarias</li>
              <li>Valoración gratuita</li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-12 mb-8" />

        <p className="text-center text-xs text-cream/40">
          © {currentYear} {BRAND.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
