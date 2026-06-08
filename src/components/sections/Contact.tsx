"use client";

import { useState, type FormEvent } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BRAND, ZONES } from "@/lib/constants";

interface FormData {
  name: string;
  phone: string;
  email: string;
  zone: string;
  rooms: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  zone: "",
  rooms: "",
};

export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `Hola, me gustaría solicitar una valoración gratuita.\n\n` +
        `Nombre: ${form.name}\n` +
        `Teléfono: ${form.phone}\n` +
        `Email: ${form.email}\n` +
        `Zona: ${form.zone}\n` +
        `Habitaciones: ${form.rooms}`
    );

    window.open(`${BRAND.whatsappUrl}?text=${message}`, "_blank");
    setSubmitted(true);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const inputClasses =
    "w-full border border-navy/10 bg-white px-4 py-3.5 text-navy placeholder:text-navy/30 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

  return (
    <section id="contacto" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="Contacto"
              title="Solicite su valoración gratuita"
              subtitle="Cuéntenos sobre su vivienda y le contactaremos en menos de 24 horas con una propuesta personalizada."
              light
              align="left"
            />

            <div className="space-y-6 text-cream/70">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-cream">Teléfono / WhatsApp</p>
                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    {BRAND.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-cream">Zona de actuación</p>
                  <p>Gran Canaria, Islas Canarias</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="border border-gold/30 bg-navy-light p-10 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-cream mb-3">
                  ¡Gracias por contactarnos!
                </h3>
                <p className="text-cream/60">
                  Le hemos redirigido a WhatsApp. Si no se abrió automáticamente,{" "}
                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    haga clic aquí
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-semibold tracking-wider uppercase text-cream/60">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="Su nombre completo"
                    className={inputClasses}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-xs font-semibold tracking-wider uppercase text-cream/60">
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="600 000 000"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-semibold tracking-wider uppercase text-cream/60">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="correo@ejemplo.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="zone" className="mb-2 block text-xs font-semibold tracking-wider uppercase text-cream/60">
                      Zona
                    </label>
                    <select
                      id="zone"
                      required
                      value={form.zone}
                      onChange={(e) => updateField("zone", e.target.value)}
                      className={`${inputClasses} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>
                        Seleccione zona
                      </option>
                      {ZONES.map((zone) => (
                        <option key={zone} value={zone}>
                          {zone}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="rooms" className="mb-2 block text-xs font-semibold tracking-wider uppercase text-cream/60">
                      Nº habitaciones
                    </label>
                    <select
                      id="rooms"
                      required
                      value={form.rooms}
                      onChange={(e) => updateField("rooms", e.target.value)}
                      className={`${inputClasses} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>
                        Seleccione
                      </option>
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={String(n)}>
                          {n} {n === 1 ? "habitación" : "habitaciones"}
                        </option>
                      ))}
                      <option value="7+">7 o más</option>
                    </select>
                  </div>
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Enviar solicitud
                </Button>

                <p className="text-center text-xs text-cream/40">
                  Al enviar, será redirigido a WhatsApp para completar su consulta.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
