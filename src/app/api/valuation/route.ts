import { NextResponse } from "next/server";
import { Resend } from "resend";
import { BRAND, VALUATION_EMAIL_SUBJECT } from "@/lib/constants";
import {
  buildValuationEmailHtml,
  buildValuationEmailText,
  validateValuationPayload,
} from "@/lib/valuation-email";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "El servicio de envío no está configurado." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const validated = validateValuationPayload(body);

    if (!validated.ok) {
      return NextResponse.json({ error: validated.error }, { status: 400 });
    }

    const { data } = validated;
    const resend = new Resend(apiKey);
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ??
      "Canarias Room Solutions <onboarding@resend.dev>";
    const toEmail = process.env.CONTACT_TO_EMAIL ?? BRAND.email;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: data.email,
      subject: `${VALUATION_EMAIL_SUBJECT} — ${data.name}`,
      text: buildValuationEmailText(data),
      html: buildValuationEmailHtml(data),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "No se pudo enviar la solicitud. Inténtelo de nuevo." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Error interno. Inténtelo de nuevo más tarde." },
      { status: 500 }
    );
  }
}
