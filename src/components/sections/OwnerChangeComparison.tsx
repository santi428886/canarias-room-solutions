import { AnimateIn } from "@/components/ui/AnimateIn";
import { OWNER_CHANGE_COMPARISON } from "@/lib/constants";

type ColumnKey = "before" | "after";

function ChangeColumn({ columnKey, delay }: { columnKey: ColumnKey; delay: number }) {
  const content = OWNER_CHANGE_COMPARISON[columnKey];
  const isAfter = columnKey === "after";

  return (
    <AnimateIn delay={delay}>
      <article
        className={`flex h-full flex-col overflow-hidden rounded-2xl border ${
          isAfter
            ? "dark-card shadow-2xl shadow-black/40"
            : "border-white/8 bg-white/3 shadow-lg shadow-black/20"
        }`}
      >
        <div className={`px-6 py-4 ${isAfter ? "bg-navy" : "border-b border-white/10"}`}>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
              isAfter ? "text-gold" : "text-white/45"
            }`}
          >
            {content.label}
          </p>
        </div>

        <ul className="flex flex-1 flex-col gap-3.5 p-6 sm:p-7">
          {content.items.map((item) => (
            <li
              key={item}
              className={`flex items-center gap-3 text-sm font-medium sm:text-base ${
                isAfter ? "text-white/90" : "text-white/65"
              }`}
            >
              <span className="shrink-0 text-base" aria-hidden>
                {isAfter ? "✅" : "❌"}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </article>
    </AnimateIn>
  );
}

export function OwnerChangeComparison() {
  return (
    <section id="que-cambia" className="section-dark relative overflow-hidden section-padding">
      <div className="absolute inset-x-0 top-0 gold-separator-faint" />
      <div className="absolute inset-x-0 bottom-0 gold-separator-faint" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(201,168,76,0.06),transparent_60%)]" />

      <div className="container-main relative">
        <AnimateIn>
          <h2 className="text-center font-serif text-3xl text-white sm:text-4xl">
            {OWNER_CHANGE_COMPARISON.title}
          </h2>
        </AnimateIn>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6">
          <ChangeColumn columnKey="before" delay={80} />
          <ChangeColumn columnKey="after" delay={160} />
        </div>
      </div>
    </section>
  );
}
