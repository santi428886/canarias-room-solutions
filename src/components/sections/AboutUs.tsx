import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BRAND, HOME_ABOUT_TRUST } from "@/lib/constants";

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
  const trust = HOME_ABOUT_TRUST;

  return (
    <section id="quienes-somos" className="section-dark relative overflow-hidden section-padding">
      <div className="absolute inset-x-0 top-0 gold-separator-faint" />
      <div className="absolute inset-x-0 bottom-0 gold-separator-faint" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_50%_0%,rgba(201,168,76,0.07),transparent_65%)]" />

      <div className="container-main relative">
        <AnimateIn>
          <SectionHeading
            eyebrow="Confianza"
            title={trust.title}
            subtitle={trust.text}
            dark
          />
        </AnimateIn>

        <AnimateIn delay={100}>
          <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {trust.points.map((point) => (
              <li
                key={point}
                className="dark-card-subtle flex items-center gap-3 px-5 py-4 text-sm font-medium text-white/80 sm:text-base"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold text-sm">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </AnimateIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {CONTACT_CARDS.map((card, index) => (
            <AnimateIn key={card.title} delay={150 + index * 80}>
              <article className="dark-card h-full p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/25 lg:p-8">
                <span className="text-2xl" aria-hidden="true">
                  {card.emoji}
                </span>
                <h3 className="mt-4 text-xs font-semibold uppercase tracking-wider text-gold">
                  {card.title}
                </h3>
                {card.href ? (
                  <a
                    href={card.href}
                    className="mt-2 inline-block text-sm font-medium text-white/80 transition-colors hover:text-gold sm:text-base"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm font-medium text-white/80 sm:text-base">
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
