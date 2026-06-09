import { Check, Home } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OWNER_CASE_STUDY, OWNER_COMPARISON } from "@/lib/constants";

const cardClass =
  "overflow-hidden rounded-2xl bg-white shadow-xl shadow-black/10 ring-1 ring-white/10";

export function OwnerCaseStudy() {
  const study = OWNER_CASE_STUDY;
  const comparison = OWNER_COMPARISON;

  return (
    <section id="caso-practico" className="section-padding bg-navy">
      <div className="container-main">
        <AnimateIn>
          <SectionHeading
            eyebrow="Propietarios"
            title={study.title}
            subtitle={study.subtitle}
            dark
          />
        </AnimateIn>

        <div className="space-y-6">
          <AnimateIn delay={80}>
            <div className={cardClass}>
              <div className="border-b border-gray-100 bg-beige/30 px-6 py-4 sm:px-8">
                <p className="flex items-center gap-2 font-serif text-xl text-navy sm:text-2xl">
                  <Home className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  {study.property}
                </p>
              </div>

              <div className="grid lg:grid-cols-2">
                <div className="border-b border-gray-100 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    🏠 {study.ownerReceive.label}
                  </p>
                  <p className="mt-4 font-serif text-5xl leading-none text-navy sm:text-6xl">
                    {study.ownerReceive.amount}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-navy">
                    ✅ {study.ownerReceive.badge}
                  </p>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {study.crsManagementTitle}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {study.crsManagement.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                          strokeWidth={2.5}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={120}>
            <div>
              <p className="mb-2 text-sm font-semibold text-white sm:text-base">
                {study.orientativeTitle}
              </p>
              <p className="mb-5 max-w-3xl text-sm leading-relaxed text-white/60">
                {study.orientativeNote}
              </p>

              <div className="grid gap-6 lg:grid-cols-2">
                {study.orientativeExamples.map((example) => (
                  <article key={example.title} className={cardClass}>
                    <div className="border-b border-gray-100 px-6 py-4 sm:px-8">
                      <p className="font-serif text-xl text-navy sm:text-2xl">
                        {example.title}
                      </p>
                    </div>
                    <div className="space-y-6 p-6 sm:p-8">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-400">
                          Renta acordada
                        </p>
                        <p className="mt-2 font-serif text-4xl text-navy sm:text-5xl">
                          {example.ownerRent}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-400">
                          Participación orientativa
                        </p>
                        <p className="mt-2 font-serif text-2xl text-gold sm:text-3xl">
                          {example.participationRange}
                        </p>
                      </div>
                      <div className="border-t border-gray-100 pt-6">
                        <p className="text-xs uppercase tracking-wider text-gray-400">
                          Resultado orientativo
                        </p>
                        <p className="mt-2 font-serif text-2xl leading-tight text-navy sm:text-3xl">
                          {example.resultRange}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={160}>
            <div className={cardClass}>
              <div className="border-b border-gray-100 bg-beige/30 px-6 py-4 sm:px-8">
                <p className="font-serif text-xl text-navy sm:text-2xl">
                  {study.collaborationOptions.title}
                </p>
              </div>
              <div className="grid lg:grid-cols-2">
                {study.collaborationOptions.options.map((option, index) => (
                  <div
                    key={option.label}
                    className={`px-6 py-6 sm:px-8 sm:py-7 ${
                      index === 0
                        ? "border-b border-gray-100 lg:border-b-0 lg:border-r"
                        : ""
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      {option.label}
                    </p>
                    <p className="mt-3 font-semibold text-navy">{option.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {option.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 bg-gray-50 px-6 py-3 sm:px-8">
                <p className="text-xs text-gray-500 sm:text-sm">
                  {study.collaborationOptions.note}
                </p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={200}>
            <div className={cardClass}>
              <div className="grid grid-cols-2 border-b border-gray-100">
                <div className="bg-gray-50 px-4 py-4 text-center sm:px-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    {comparison.aloneLabel}
                  </p>
                </div>
                <div className="bg-navy px-4 py-4 text-center sm:px-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                    {comparison.crsLabel}
                  </p>
                </div>
              </div>
              {comparison.rows.map((row, index) => (
                <div
                  key={row.alone}
                  className={`grid grid-cols-2 ${
                    index !== comparison.rows.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  <div className="px-4 py-4 text-sm text-gray-500 sm:px-6">
                    {row.alone}
                  </div>
                  <div className="flex items-center border-l border-gray-100 bg-beige/20 px-4 py-4 text-sm font-medium text-navy sm:px-6">
                    <Check
                      className="mr-2 hidden h-4 w-4 shrink-0 text-gold sm:inline"
                      strokeWidth={2.5}
                    />
                    {row.withCrs}
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={240}>
            <div className={cardClass}>
              <div className="border-b border-gray-100 bg-navy px-6 py-4 sm:px-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {study.resultsTitle}
                </p>
              </div>
              <ul className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8">
                {study.results.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-navy sm:text-base"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      ✔
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={280}>
          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-white/45 sm:text-sm">
            {study.disclaimer}
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
