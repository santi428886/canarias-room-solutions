import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AGENCY_COLLABORATION_STEPS } from "@/lib/constants";

export function AgencyCollaborationSteps() {
  return (
    <section className="section-padding bg-navy">
      <div className="container-main">
        <AnimateIn>
          <SectionHeading
            eyebrow="Proceso"
            title="Cómo funciona"
            subtitle="Un flujo claro desde la detección de la vivienda hasta una colaboración transparente."
            dark
          />
        </AnimateIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AGENCY_COLLABORATION_STEPS.map((step, index) => (
            <AnimateIn key={step.step} delay={index * 100}>
              <article className="group h-full rounded-2xl border border-white/10 bg-navy-light p-6 transition-all duration-300 hover:border-gold/30 lg:p-8">
                <span className="font-serif text-5xl text-white/10 transition-colors group-hover:text-gold/20">
                  0{step.step}
                </span>
                <h3 className="mt-4 font-serif text-xl text-white">
                  {step.title}
                </h3>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
