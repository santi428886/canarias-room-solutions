import { BRAND } from "@/lib/constants";
import { Mail, MapPin } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Propietarios", href: "#propietarios" },
  { label: "Inmobiliarias", href: "#inmobiliarias" },
  { label: "Por qué CRS", href: "#por-que-crs" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Zonas", href: "#zonas" },
  { label: "Contacto", href: "#contacto" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white py-14">
      <div className="container-main">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-serif text-2xl text-navy">{BRAND.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              {BRAND.tagline}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-gray-400">
              Gestión profesional de alquiler por habitaciones en Gran Canaria
              para propietarios e inmobiliarias.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Navegación
            </p>
            <ul className="space-y-2.5 text-sm text-gray-600">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Contacto
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{BRAND.location}</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Servicios
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Gestión por habitaciones</li>
              <li>Valoración sin compromiso</li>
              <li>Colaboración con inmobiliarias</li>
              <li>Seguimiento y coordinación</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-8 text-center text-xs text-gray-400">
          © {currentYear} {BRAND.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
