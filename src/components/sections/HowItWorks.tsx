import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding bg-navy">
      <div className="container-main">
        <AnimateIn>
          <SectionHeading
            eyebrow="Proceso"
            title="Cómo funciona"
            subtitle="Un proceso estructurado para propietarios e inmobiliarias que buscan delegar la gestión del alquiler por habitaciones con claridad y seguimiento."
            dark
          />
        </AnimateIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <AnimateIn key={step.step} delay={index * 100}>
              <article className="group h-full rounded-2xl border border-white/10 bg-navy-light p-6 transition-all duration-300 hover:border-gold/30 lg:p-8">
                <span className="font-serif text-5xl text-white/10 transition-colors group-hover:text-gold/20">
                  0{step.step}
                </span>
                <h3 className="mt-4 font-serif text-xl text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {step.description}
                </p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
