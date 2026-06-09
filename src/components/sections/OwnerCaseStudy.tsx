import Link from "next/link";
import { Plus } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { OWNER_CASE_FUNNEL } from "@/lib/constants";

export function OwnerCaseStudy() {
  const example = OWNER_CASE_FUNNEL;

  return (
    <section id="caso-practico" className="section-deep relative overflow-hidden py-28 lg:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_65%,rgba(201,168,76,0.11),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_0%_0%,rgba(201,168,76,0.04),transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 gold-separator" />
      <div className="absolute inset-x-0 bottom-0 gold-separator-faint" />

      <div className="container-main relative">
        <AnimateIn>
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-full border border-gold/25 bg-gold/8 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Caso práctico orientativo
            </span>
          </div>
          <h2 className="mt-6 text-center font-serif text-3xl text-white sm:text-4xl lg:text-5xl">
            {example.title}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-sm text-white/50 lg:text-base">
            {example.subtitle}
          </p>
        </AnimateIn>

        <AnimateIn delay={100}>
          <article className="dark-card mx-auto mt-14 max-w-2xl overflow-hidden">
            <div className="space-y-0 px-7 py-8 sm:px-10 sm:py-10">
              <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-6">
                <p className="max-w-[14rem] text-sm leading-snug text-white/55 sm:text-base">
                  {example.agreedRent.label}
                </p>
                <p className="shrink-0 font-serif text-3xl text-white sm:text-4xl">
                  {example.agreedRent.amount}
                </p>
              </div>

              <div className="flex items-center justify-center py-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                  <Plus className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                </div>
              </div>

              <div className="flex items-end justify-between gap-4 rounded-xl border border-gold/25 bg-gold/8 px-5 py-5">
                <p className="max-w-[14rem] text-sm font-medium leading-snug text-gold/90 sm:text-base">
                  {example.additionalParticipation.label}
                </p>
                <p className="shrink-0 font-serif text-3xl text-gold sm:text-4xl">
                  {example.additionalParticipation.amount}
                </p>
              </div>

              <div className="my-8 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold/70">
                  {example.total.label}
                </p>
                <p
                  className="mt-4 font-serif leading-none text-gold"
                  style={{ fontSize: "clamp(3.5rem, 10vw, 6.5rem)" }}
                >
                  {example.total.amount}
                </p>
              </div>

              <div className="mt-8 flex items-end justify-between gap-4 border-t border-white/10 pt-6">
                <p className="max-w-[14rem] text-sm leading-snug text-white/45 sm:text-base">
                  {example.yearlyDifference.label}
                </p>
                <p className="shrink-0 font-serif text-2xl text-gold/90 sm:text-3xl">
                  {example.yearlyDifference.amount}
                </p>
              </div>
            </div>
          </article>
        </AnimateIn>

        <AnimateIn delay={200}>
          <div className="mt-10 flex flex-col items-center gap-5">
            <Link href="#contacto" className="btn-gold px-10 py-4 text-base font-semibold">
              Solicitar valoración gratuita
            </Link>
            <p className="max-w-xl text-center text-sm leading-relaxed text-white/45">
              {example.note}
            </p>
            <p className="max-w-xl text-center text-xs text-white/25">
              {example.disclaimer}
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
