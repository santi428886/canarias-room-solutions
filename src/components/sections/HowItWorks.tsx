import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section-dark relative overflow-hidden section-padding">
      <div className="absolute inset-x-0 top-0 gold-separator-faint" />
      <div className="absolute inset-x-0 bottom-0 gold-separator-faint" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(201,168,76,0.07),transparent_65%)]" />

      <div className="container-main relative">
        <AnimateIn>
          <SectionHeading
            eyebrow="Proceso"
            title="Cómo funciona"
            subtitle="Un proceso estructurado para propietarios e inmobiliarias que buscan delegar la gestión del alquiler por habitaciones con claridad y seguimiento."
            dark
          />
        </AnimateIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <AnimateIn key={step.step} delay={index * 100}>
              <article className="group dark-card h-full p-6 transition-all duration-300 hover:border-gold/30 hover:-translate-y-1 lg:p-8"
                style={{ background: "linear-gradient(160deg, #0B1D3A 0%, #07162D 100%)" }}
              >
                <span className="font-serif text-5xl font-bold text-gold/15 transition-colors group-hover:text-gold/30">
                  0{step.step}
                </span>
                <h3 className="mt-4 font-serif text-xl text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
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
