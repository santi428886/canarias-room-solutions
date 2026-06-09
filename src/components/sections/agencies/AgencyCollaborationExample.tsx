import { AnimateIn } from "@/components/ui/AnimateIn";
import { AGENCY_COLLABORATION_EXAMPLE } from "@/lib/constants";

function GrowthScale({
  steps,
}: {
  steps: readonly { homes: number }[];
}) {
  const maxHomes = steps[steps.length - 1]?.homes ?? 10;

  return (
    <div className="mx-auto mb-10 max-w-5xl px-2">
      <div className="relative h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-gold/40 to-gold"
          style={{ width: "100%" }}
        />
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {steps.map((step) => (
          <div key={step.homes} className="flex flex-col items-center text-center">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 bg-navy-light text-xs font-bold text-gold">
              {step.homes}
            </span>
            <span className="mt-2 hidden text-[10px] uppercase tracking-wider text-white/35 sm:block">
              viviendas
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-white/30">
        Crecimiento orientativo de {steps[0]?.homes} a {maxHomes} viviendas captadas
      </p>
    </div>
  );
}

export function AgencyCollaborationExample() {
  const { title, subtitle, cards, footnote } = AGENCY_COLLABORATION_EXAMPLE;

  return (
    <section className="section-deep relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(201,168,76,0.08),transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 gold-separator" />

      <div className="container-main relative">
        <AnimateIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Referencia financiera
            </p>
            <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
              {subtitle}
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={80}>
          <GrowthScale steps={cards} />
        </AnimateIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {cards.map((card, index) => (
            <AnimateIn key={card.homes} delay={120 + index * 70}>
              <article className="dark-card flex h-full flex-col px-5 py-7 sm:px-6 sm:py-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-serif text-lg text-gold">
                    {card.homes}
                  </span>
                  <p className="text-sm font-medium leading-snug text-white/70">
                    {card.homesLabel}
                  </p>
                </div>

                <div className="mt-6 flex flex-1 flex-col justify-end border-t border-white/10 pt-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    {card.monthlyCommissionLabel}
                  </p>
                  <p className="mt-2 font-serif text-3xl leading-none text-white sm:text-4xl">
                    {card.monthlyCommission}
                  </p>

                  <div className="mt-5 border-t border-white/10 pt-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/70">
                      {card.yearlyIncomeLabel}
                    </p>
                    <p className="mt-2 font-serif text-xl text-gold sm:text-2xl">
                      {card.yearlyIncome}
                    </p>
                  </div>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={400}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-white/35 sm:text-sm">
            {footnote}
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
