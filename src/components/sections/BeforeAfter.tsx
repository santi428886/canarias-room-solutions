import Image from "next/image";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BEFORE_AFTER, BEFORE_AFTER_IMAGE_SIZE } from "@/lib/constants";

type BeforeAfterKey = keyof typeof BEFORE_AFTER;

function ComparisonCard({
  itemKey,
  delay,
}: {
  itemKey: BeforeAfterKey;
  delay: number;
}) {
  const item = BEFORE_AFTER[itemKey];
  const isAfter = itemKey === "after";

  return (
    <AnimateIn delay={delay}>
      <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-navy/5">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
          <Image
            src={item.image}
            alt={`${item.label}: ${item.caption}`}
            width={BEFORE_AFTER_IMAGE_SIZE.width}
            height={BEFORE_AFTER_IMAGE_SIZE.height}
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span
            className={`absolute left-4 top-4 z-10 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${
              isAfter ? "bg-gold text-white" : "bg-white/95 text-gray-600"
            }`}
          >
            {item.label}
          </span>
        </div>
        <div className="flex flex-1 items-start p-6">
          <p className="text-sm leading-relaxed text-gray-600">{item.caption}</p>
        </div>
      </article>
    </AnimateIn>
  );
}

export function BeforeAfter() {
  return (
    <section className="section-padding bg-beige/40">
      <div className="container-main">
        <AnimateIn>
          <SectionHeading
            eyebrow="Presentación"
            title="La presentación también forma parte de la gestión"
            subtitle="Un espacio bien presentado facilita una convivencia ordenada, atrae perfiles adecuados y refuerza la imagen profesional del inmueble."
          />
        </AnimateIn>

        <div className="grid items-stretch gap-8 md:grid-cols-2">
          <ComparisonCard itemKey="before" delay={0} />
          <ComparisonCard itemKey="after" delay={120} />
        </div>
      </div>
    </section>
  );
}
