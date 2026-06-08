import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Proceso"
          title="Cómo funciona"
          subtitle="Un proceso sencillo y transparente, diseñado para que usted no tenga que preocuparse de nada."
        />

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-8 hidden w-px bg-gold/30 lg:left-1/2 lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {PROCESS_STEPS.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.step}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                    index > 0 ? "lg:mt-16" : ""
                  }`}
                >
                  <div
                    className={`lg:py-8 ${
                      isEven
                        ? "lg:col-start-1 lg:text-right"
                        : "lg:col-start-2 lg:row-start-1"
                    }`}
                  >
                    <div
                      className={`flex items-start gap-6 ${
                        isEven ? "lg:flex-row-reverse lg:items-center" : ""
                      }`}
                    >
                      <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-cream font-serif text-2xl text-gold">
                        {item.step}
                      </div>
                      <div className={isEven ? "lg:text-right" : ""}>
                        <h3 className="font-serif text-2xl text-navy mb-2">
                          {item.title}
                        </h3>
                        <p className="text-navy/60 leading-relaxed max-w-md">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`hidden lg:block ${
                      isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
