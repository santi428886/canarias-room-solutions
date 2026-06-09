import Link from "next/link";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

interface LegalPageLayoutProps {
  title: string;
  children: ReactNode;
}

export function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
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
            <h1 className="mt-6 font-serif text-3xl text-navy sm:text-4xl">
              {title}
            </h1>
            <article className="prose-legal mt-10 space-y-6 text-sm leading-relaxed text-gray-600 sm:text-base">
              {children}
            </article>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
