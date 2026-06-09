import { AnimateIn } from "@/components/ui/AnimateIn";
import { OWNER_SERVICES } from "@/lib/constants";

export function OwnerServices() {
  return (
    <section id="de-que-nos-encargamos" className="section-padding bg-white">
      <div className="container-main">
        <AnimateIn>
          <h2 className="text-center font-serif text-3xl text-navy sm:text-4xl">
            {OWNER_SERVICES.title}
          </h2>
        </AnimateIn>

        <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
          {OWNER_SERVICES.items.map((item, index) => (
            <AnimateIn key={item} delay={index * 60}>
              <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-5 py-4">
                <span className="text-gold" aria-hidden>
                  ✔
                </span>
                <span className="font-medium text-navy">{item}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
