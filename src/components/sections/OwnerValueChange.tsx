import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OWNER_VALUE_CHANGES } from "@/lib/constants";

export function OwnerValueChange() {
  return (
    <section id="que-cambia" className="section-padding bg-navy">
      <div className="container-main">
        <AnimateIn>
          <SectionHeading
            eyebrow="Propietarios"
            title={OWNER_VALUE_CHANGES.title}
            subtitle={OWNER_VALUE_CHANGES.subtitle}
            dark
          />
        </AnimateIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OWNER_VALUE_CHANGES.blocks.map((block, index) => (
            <AnimateIn key={block.title} delay={index * 80}>
              <article className="group h-full rounded-2xl border border-white/10 bg-navy-light p-8 transition-all duration-300 hover:border-gold/30">
                <span className="text-3xl" aria-hidden="true">
                  {block.emoji}
                </span>
                <h3 className="mt-6 font-serif text-xl text-white">
                  {block.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {block.description}
                </p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
