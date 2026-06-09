import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: `Política de cookies de ${BRAND.name}. Información sobre el uso de cookies en el sitio web.`,
};

export default function CookiesPage() {
  return (
    <LegalPageLayout title="Política de Cookies">
      <section>
        <h2 className="font-serif text-xl text-navy">1. ¿Qué son las cookies?</h2>
        <p className="mt-3">
          Las cookies son pequeños archivos de texto que se almacenan en su
          dispositivo cuando visita un sitio web. Permiten que la página
          recuerde información sobre su visita, como preferencias o datos
          técnicos, para mejorar la experiencia de navegación.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl text-navy">2. Cookies que utilizamos</h2>

        <h3 className="mt-6 font-semibold text-navy">Cookies técnicas (necesarias)</h3>
        <p className="mt-3">
          Son imprescindibles para el funcionamiento básico del sitio web.
          Permiten la navegación, el acceso a áreas seguras y el uso de
          funcionalidades esenciales. No requieren consentimiento previo.
        </p>

        <h3 className="mt-6 font-semibold text-navy">Cookies analíticas (futuras)</h3>
        <p className="mt-3">
          En el futuro, este sitio web podría utilizar cookies analíticas para
          medir el tráfico y analizar el comportamiento de los usuarios de forma
          agregada (por ejemplo, Google Analytics u herramientas similares).
          En caso de implementarse, se solicitará el consentimiento previo del
          usuario mediante un banner informativo.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl text-navy">3. Cookies de terceros</h2>
        <p className="mt-3">
          Actualmente, este sitio web no utiliza cookies de publicidad ni de
          seguimiento de terceros. Si en el futuro se integraran servicios
          externos que instalen cookies, esta política será actualizada
          oportunamente.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl text-navy">4. Cómo desactivar las cookies</h2>
        <p className="mt-3">
          Puede configurar su navegador para bloquear o eliminar las cookies.
          Tenga en cuenta que desactivar las cookies técnicas puede afectar al
          correcto funcionamiento de algunas partes del sitio web.
        </p>
        <p className="mt-4">Instrucciones en los navegadores más comunes:</p>
        <ul className="mt-4 list-inside list-disc space-y-2">
          <li>
            <strong className="text-navy">Chrome:</strong> Configuración →
            Privacidad y seguridad → Cookies
          </li>
          <li>
            <strong className="text-navy">Firefox:</strong> Opciones →
            Privacidad y seguridad → Cookies
          </li>
          <li>
            <strong className="text-navy">Safari:</strong> Preferencias →
            Privacidad → Cookies
          </li>
          <li>
            <strong className="text-navy">Edge:</strong> Configuración →
            Cookies y permisos del sitio
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-xl text-navy">5. Más información</h2>
        <p className="mt-3">
          Para cualquier consulta sobre el uso de cookies, puede contactar en{" "}
          <a
            href={`mailto:${BRAND.email}`}
            className="text-gold hover:underline"
          >
            {BRAND.email}
          </a>
          . Para información sobre el tratamiento de datos personales, consulte
          nuestra{" "}
          <a href="/privacidad" className="text-gold hover:underline">
            Política de Privacidad
          </a>
          .
        </p>
      </section>
    </LegalPageLayout>
  );
}
