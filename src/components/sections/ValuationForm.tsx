"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  BRAND,
  PROPERTY_CONDITIONS,
  ROOM_OPTIONS,
  VALUATION_ZONES,
} from "@/lib/constants";

interface FormState {
  name: string;
  phone: string;
  email: string;
  zone: string;
  rooms: string;
  condition: string;
  comments: string;
  website: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  zone: "",
  rooms: "",
  condition: "",
  comments: "",
  website: "",
};

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-navy placeholder:text-gray-400 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20";

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500";

export function ValuationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/valuation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          result.error ??
            `No se pudo enviar la solicitud. Escríbanos a ${BRAND.email}`
        );
        return;
      }

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
      setErrorMessage(
        `Error de conexión. Escríbanos directamente a ${BRAND.email}`
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow-xl shadow-navy/10">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-serif text-2xl text-navy">
          Solicitud enviada correctamente
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          Hemos recibido sus datos. Revisaremos la información de la vivienda y
          le contactaremos en un plazo aproximado de 24–48 horas laborables.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-8"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-xl shadow-navy/10 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className={labelClass}>
            Nombre
          </label>
          <input
            id="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Su nombre completo"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Teléfono
          </label>
          <input
            id="phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="600 000 000"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="correo@ejemplo.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="zone" className={labelClass}>
            Zona de la vivienda
          </label>
          <select
            id="zone"
            required
            value={form.zone}
            onChange={(e) => update("zone", e.target.value)}
            className={`${inputClass} cursor-pointer appearance-none`}
          >
            <option value="" disabled>
              Seleccione zona
            </option>
            {VALUATION_ZONES.map((zone) => (
              <option key={zone} value={zone}>
                {zone}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="rooms" className={labelClass}>
            Número de habitaciones
          </label>
          <select
            id="rooms"
            required
            value={form.rooms}
            onChange={(e) => update("rooms", e.target.value)}
            className={`${inputClass} cursor-pointer appearance-none`}
          >
            <option value="" disabled>
              Seleccione
            </option>
            {ROOM_OPTIONS.map((n) => (
              <option key={n} value={String(n)}>
                {n} {n === 1 ? "habitación" : "habitaciones"}
              </option>
            ))}
            <option value="7+">7 o más</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="condition" className={labelClass}>
            Estado de la vivienda
          </label>
          <select
            id="condition"
            required
            value={form.condition}
            onChange={(e) => update("condition", e.target.value)}
            className={`${inputClass} cursor-pointer appearance-none`}
          >
            <option value="" disabled>
              Seleccione estado
            </option>
            {PROPERTY_CONDITIONS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="comments" className={labelClass}>
            Comentarios
          </label>
          <textarea
            id="comments"
            rows={4}
            value={form.comments}
            onChange={(e) => update("comments", e.target.value)}
            placeholder="Cuéntenos cualquier detalle relevante sobre la vivienda..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <div className="hidden" aria-hidden="true">
          <input
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
            name="website"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-gold mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando solicitud...
          </>
        ) : (
          "Solicitar valoración gratuita"
        )}
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-gray-500">
        Te responderemos en un plazo aproximado de 24–48 horas laborables.
      </p>
    </form>
  );
}
