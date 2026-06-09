import { BRAND } from "@/lib/constants";

const linkClass =
  "text-sm font-medium text-navy transition-colors hover:text-gold";

export function HeroContactBar() {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
      <a href={`tel:${BRAND.phoneTel}`} className={linkClass}>
        📞 {BRAND.phoneDisplay}
      </a>
      <a href={`mailto:${BRAND.email}`} className={linkClass}>
        ✉️ {BRAND.email}
      </a>
      <span className="text-sm font-medium text-gray-600">
        📍 {BRAND.location}
      </span>
    </div>
  );
}

export function CtaContactInfo() {
  return (
    <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gold">
          Teléfono
        </p>
        <a
          href={`tel:${BRAND.phoneTel}`}
          className="mt-1 inline-block text-lg font-medium text-white transition-colors hover:text-gold"
        >
          {BRAND.phoneDisplay}
        </a>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gold">
          Email
        </p>
        <a
          href={`mailto:${BRAND.email}`}
          className="mt-1 inline-block text-sm text-white/80 transition-colors hover:text-gold"
        >
          {BRAND.email}
        </a>
      </div>
    </div>
  );
}

export function FooterContactInfo() {
  return (
    <ul className="space-y-3 text-sm text-gray-600">
      <li>
        <a
          href={`tel:${BRAND.phoneTel}`}
          className="inline-flex items-center gap-2 transition-colors hover:text-gold"
        >
          📞 {BRAND.phoneDisplay}
        </a>
      </li>
      <li>
        <a
          href={`mailto:${BRAND.email}`}
          className="inline-flex items-center gap-2 transition-colors hover:text-gold"
        >
          📧 {BRAND.email}
        </a>
      </li>
      <li className="flex items-start gap-2">
        <span aria-hidden="true">📍</span>
        <span>{BRAND.location}</span>
      </li>
    </ul>
  );
}
