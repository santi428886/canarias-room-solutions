import { Check } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

const TRUST_POINTS = [
  "Comunicación clara",
  "Gestión organizada",
  "Atención continua",
  "Trato profesional",
] as const;

export function TrustBand() {
  return (
    <AnimateIn>
      <div className="mb-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h3 className="text-center font-serif text-xl text-navy sm:text-2xl">
          ¿Por qué confiar en nosotros?
        </h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_POINTS.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 text-sm font-medium text-gray-600"
            >
              <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </AnimateIn>
  );
}
