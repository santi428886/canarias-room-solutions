import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: `Política de privacidad y protección de datos de ${BRAND.name}. Información sobre el tratamiento de datos personales conforme al RGPD.`,
};

export default function PrivacidadPage() {
  return (
    <LegalPageLayout title="Política de Privacidad">
      <section>
        <h2 className="font-serif text-xl text-navy">1. Responsable del tratamiento</h2>
        <p className="mt-3">
          El responsable del tratamiento de los datos personales recogidos a
          través de este sitio web es:
        </p>
        <ul className="mt-4 space-y-2 rounded-2xl border border-gray-200 bg-white p-6">
          <li>
            <strong className="text-navy">Responsable:</strong> {BRAND.name}
          </li>
          <li>
            <strong className="text-navy">Email:</strong>{" "}
            <a
              href={`mailto:${BRAND.email}`}
              className="text-gold hover:underline"
            >
              {BRAND.email}
            </a>
          </li>
          <li>
            <strong className="text-navy">Teléfono:</strong> {BRAND.phoneDisplay}
          </li>
          <li>
            <strong className="text-navy">Ubicación:</strong> {BRAND.locationFull}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-xl text-navy">2. Datos que recogemos</h2>
        <p className="mt-3">
          A través del formulario de contacto y valoración de vivienda,
          recogemos los siguientes datos personales:
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2">
          <li>Nombre</li>
          <li>Teléfono</li>
          <li>Correo electrónico</li>
          <li>Zona de la vivienda</li>
          <li>Número de habitaciones</li>
          <li>Estado de la vivienda</li>
          <li>Comentarios adicionales</li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-xl text-navy">3. Finalidad del tratamiento</h2>
        <p className="mt-3">Los datos personales facilitados serán tratados con las siguientes finalidades:</p>
        <ul className="mt-4 list-inside list-disc space-y-2">
          <li>Gestionar solicitudes de información y valoración de viviendas.</li>
          <li>Mantener comunicación con propietarios e inmobiliarias interesados.</li>
          <li>Evaluar el encaje de inmuebles con nuestro modelo de gestión.</li>
          <li>Atender consultas y prestación de servicios solicitados.</li>
        </ul>
        <p className="mt-4">
          La base legal para el tratamiento es el consentimiento del interesado
          al enviar el formulario, así como la ejecución de medidas precontractuales
          a petición del usuario.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl text-navy">4. Conservación de los datos</h2>
        <p className="mt-3">
          Los datos personales se conservarán durante el tiempo necesario para
          atender la solicitud del usuario y, en su caso, mientras exista una
          relación comercial o de prestación de servicios. Transcurrido dicho
          plazo, los datos serán suprimidos o anonimizados, salvo obligación
          legal de conservación.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl text-navy">5. Destinatarios</h2>
        <p className="mt-3">
          Los datos no se cederán a terceros, salvo obligación legal o cuando
          sea necesario para la prestación del servicio (por ejemplo, proveedores
          de hosting o servicios de correo electrónico), siempre bajo contratos
          que garanticen la confidencialidad y seguridad de la información.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl text-navy">6. Derechos del usuario (RGPD)</h2>
        <p className="mt-3">
          Conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018
          de Protección de Datos, usted tiene derecho a:
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2">
          <li>Acceder a sus datos personales.</li>
          <li>Rectificar datos inexactos o incompletos.</li>
          <li>Solicitar la supresión de sus datos.</li>
          <li>Solicitar la limitación del tratamiento.</li>
          <li>Oponerse al tratamiento de sus datos.</li>
          <li>Solicitar la portabilidad de sus datos.</li>
        </ul>
        <p className="mt-4">
          Para ejercer estos derechos, puede contactar en{" "}
          <a
            href={`mailto:${BRAND.email}`}
            className="text-gold hover:underline"
          >
            {BRAND.email}
          </a>
          , indicando su solicitud y acreditando su identidad. Asimismo, tiene
          derecho a presentar una reclamación ante la Agencia Española de
          Protección de Datos (www.aepd.es).
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl text-navy">7. Seguridad</h2>
        <p className="mt-3">
          {BRAND.name} adopta las medidas técnicas y organizativas necesarias
          para garantizar la seguridad de los datos personales y evitar su
          alteración, pérdida, tratamiento o acceso no autorizado.
        </p>
      </section>
    </LegalPageLayout>
  );
}
