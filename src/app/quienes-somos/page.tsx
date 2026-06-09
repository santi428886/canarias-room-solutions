import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ABOUT_PAGE_PARAGRAPHS, BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "Conoce Canarias Room Solutions: gestión profesional de viviendas por habitaciones en Gran Canaria para propietarios e inmobiliarias.",
};

export default function QuienesSomosPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="container-main">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gold"
            >
              ← Volver al inicio
            </Link>

            <AnimateIn>
              <h1 className="mt-6 font-serif text-3xl text-navy sm:text-4xl lg:text-5xl">
                Quiénes somos
              </h1>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div className="mt-10 space-y-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                {ABOUT_PAGE_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm text-navy">
                  📍 {BRAND.location}
                </p>
                <a
                  href={`tel:${BRAND.phoneTel}`}
                  className="text-sm text-navy transition-colors hover:text-gold"
                >
                  📞 {BRAND.phoneDisplay}
                </a>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-sm text-navy transition-colors hover:text-gold"
                >
                  ✉️ {BRAND.email}
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
