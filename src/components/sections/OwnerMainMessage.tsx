import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { OWNER_MAIN_MESSAGE } from "@/lib/constants";

export function OwnerMainMessage() {
  const message = OWNER_MAIN_MESSAGE;

  return (
    <section
      id="propietarios"
      className="relative overflow-hidden bg-[#06152d] section-padding"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,162,101,0.14),transparent_55%)]" />

      <div className="container-main relative">
        <AnimateIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              {message.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75 sm:text-xl">
              {message.subtitle}
            </p>
            <Link
              href="#contacto"
              className="btn-gold mt-8 inline-flex px-8 py-4 text-base"
            >
              {message.cta}
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
