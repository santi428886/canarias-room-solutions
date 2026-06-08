import { BRAND, VALUATION_EMAIL_SUBJECT } from "@/lib/constants";

export interface ValuationPayload {
  name: string;
  phone: string;
  email: string;
  zone: string;
  rooms: string;
  condition: string;
  comments: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildValuationEmailText(data: ValuationPayload): string {
  return [
    VALUATION_EMAIL_SUBJECT,
    "",
    `Nombre: ${data.name}`,
    `Teléfono: ${data.phone}`,
    `Email: ${data.email}`,
    `Zona de la vivienda: ${data.zone}`,
    `Número de habitaciones: ${data.rooms}`,
    `Estado de la vivienda: ${data.condition}`,
    "",
    "Comentarios:",
    data.comments || "—",
    "",
    `— Enviado desde ${BRAND.name}`,
  ].join("\n");
}

export function buildValuationEmailHtml(data: ValuationPayload): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#64748b;font-size:14px;width:180px;">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#0a1628;font-size:14px;">${escapeHtml(value)}</td></tr>`;

  return `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#0a1628;font-size:20px;margin-bottom:16px;">${VALUATION_EMAIL_SUBJECT}</h2>
      <table style="width:100%;border-collapse:collapse;">
        ${row("Nombre", data.name)}
        ${row("Teléfono", data.phone)}
        ${row("Email", data.email)}
        ${row("Zona", data.zone)}
        ${row("Habitaciones", data.rooms)}
        ${row("Estado", data.condition)}
      </table>
      <p style="color:#64748b;font-size:14px;margin-top:20px;">Comentarios:</p>
      <p style="color:#0a1628;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.comments || "—")}</p>
      <p style="color:#94a3b8;font-size:12px;margin-top:24px;">— ${BRAND.name}</p>
    </div>
  `;
}

export function validateValuationPayload(
  body: unknown
): { ok: true; data: ValuationPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Datos no válidos." };
  }

  const fields = body as Record<string, unknown>;

  if (fields.website) {
    return { ok: false, error: "Solicitud no válida." };
  }

  const name = String(fields.name ?? "").trim();
  const phone = String(fields.phone ?? "").trim();
  const email = String(fields.email ?? "").trim();
  const zone = String(fields.zone ?? "").trim();
  const rooms = String(fields.rooms ?? "").trim();
  const condition = String(fields.condition ?? "").trim();
  const comments = String(fields.comments ?? "").trim();

  if (!name || name.length < 2) {
    return { ok: false, error: "Indique un nombre válido." };
  }
  if (!phone || phone.length < 9) {
    return { ok: false, error: "Indique un teléfono válido." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Indique un email válido." };
  }
  if (!zone) {
    return { ok: false, error: "Seleccione la zona de la vivienda." };
  }
  if (!rooms) {
    return { ok: false, error: "Seleccione el número de habitaciones." };
  }
  if (!condition) {
    return { ok: false, error: "Seleccione el estado de la vivienda." };
  }

  return {
    ok: true,
    data: { name, phone, email, zone, rooms, condition, comments },
  };
}
