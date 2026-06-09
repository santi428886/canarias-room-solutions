import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AGENCY_COLLABORATION_EXAMPLE } from "@/lib/constants";

export function AgencyCollaborationExample() {
  const { cases, importantNote, disclaimer, subtitle } =
    AGENCY_COLLABORATION_EXAMPLE;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-main">
        <AnimateIn>
          <SectionHeading
            eyebrow="Referencia"
            title={AGENCY_COLLABORATION_EXAMPLE.title}
            subtitle={subtitle}
          />
        </AnimateIn>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {cases.map((example, index) => (
            <AnimateIn key={example.label} delay={100 + index * 80}>
              <article className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-navy shadow-2xl shadow-navy/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(196,162,101,0.16),transparent_55%)]" />

                <div className="relative flex flex-1 flex-col p-8 lg:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {example.label}
                  </p>
                  <h3 className="mt-4 font-serif text-2xl text-white sm:text-3xl">
                    {example.property}
                  </h3>

                  <dl className="mt-8 space-y-5 border-t border-white/10 pt-8">
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-white/45">
                        {example.ownerRentLabel}
                      </dt>
                      <dd className="mt-1 text-lg font-semibold text-white">
                        {example.ownerRent}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-white/45">
                        {example.agencyFeeLabel}
                      </dt>
                      <dd className="mt-1 text-lg font-semibold text-gold">
                        {example.agencyFee}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-auto border-t border-white/10 pt-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      {example.resultLabel}
                    </p>
                    <p className="mt-4 font-serif text-5xl leading-none text-gold sm:text-6xl">
                      {example.result}
                    </p>
                    <p className="mt-6 text-sm leading-relaxed text-white/65 sm:text-base">
                      {example.footerText}
                    </p>
                  </div>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={250}>
          <div className="mt-8 rounded-2xl border border-gold/25 bg-beige/40 px-6 py-5 sm:px-8 sm:py-6">
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
              {importantNote}
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={300}>
          <p className="mt-6 text-center text-xs leading-relaxed text-gray-500">
            {disclaimer}
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
