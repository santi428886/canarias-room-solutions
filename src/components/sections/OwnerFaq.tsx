import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OWNER_FAQ } from "@/lib/constants";

export function OwnerFaq() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-main">
        <AnimateIn>
          <SectionHeading
            eyebrow="Propietarios"
            title="Preguntas frecuentes"
            subtitle="Respuestas claras sobre cómo trabajamos con propietarios en Gran Canaria."
          />
        </AnimateIn>

        <div className="mx-auto max-w-3xl space-y-4">
          {OWNER_FAQ.map((item, index) => (
            <AnimateIn key={item.question} delay={index * 80}>
              <details className="group overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 open:bg-white open:shadow-sm">
                <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-navy marker:content-none sm:px-8">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span className="text-gold transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <div className="border-t border-gray-100 px-6 pb-6 pt-4 sm:px-8">
                  <div className="space-y-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {item.answer.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </details>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
