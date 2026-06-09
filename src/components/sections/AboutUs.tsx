import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_PAGE_PARAGRAPHS, BRAND } from "@/lib/constants";

const CONTACT_CARDS = [
  {
    emoji: "📍",
    title: "Ubicación",
    value: BRAND.location,
    href: undefined,
  },
  {
    emoji: "📞",
    title: "Contacto",
    value: BRAND.phoneDisplay,
    href: `tel:${BRAND.phoneTel}`,
  },
  {
    emoji: "✉️",
    title: "Email",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
] as const;

export function AboutUs() {
  return (
    <section id="quienes-somos" className="section-padding bg-white">
      <div className="container-main">
        <AnimateIn>
          <SectionHeading
            eyebrow="Empresa"
            title="Quiénes somos"
            subtitle="Gestión profesional y transparente de viviendas en Gran Canaria"
          />
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="mx-auto max-w-3xl space-y-5 text-center">
            {ABOUT_PAGE_PARAGRAPHS.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-gray-600 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </AnimateIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {CONTACT_CARDS.map((card, index) => (
            <AnimateIn key={card.title} delay={150 + index * 80}>
              <article className="card-modern h-full text-center">
                <span className="text-2xl" aria-hidden="true">
                  {card.emoji}
                </span>
                <h3 className="mt-4 text-xs font-semibold uppercase tracking-wider text-gold">
                  {card.title}
                </h3>
                {card.href ? (
                  <a
                    href={card.href}
                    className="mt-2 inline-block text-sm font-medium text-navy transition-colors hover:text-gold sm:text-base"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm font-medium text-navy sm:text-base">
                    {card.value}
                  </p>
                )}
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
