import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: `Aviso legal de ${BRAND.name}. Información del titular, condiciones de uso y responsabilidades del sitio web.`,
};

export default function AvisoLegalPage() {
  return (
    <LegalPageLayout title="Aviso Legal">
      <section>
        <h2 className="font-serif text-xl text-navy">1. Datos identificativos</h2>
        <p className="mt-3">
          En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la
          Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se
          informa a los usuarios de los datos identificativos del titular de
          este sitio web:
        </p>
        <ul className="mt-4 space-y-2 rounded-2xl border border-gray-200 bg-white p-6">
          <li>
            <strong className="text-navy">Titular:</strong> {BRAND.name}
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
            <strong className="text-navy">Teléfono:</strong>{" "}
            <a href={`tel:${BRAND.phoneTel}`} className="text-gold hover:underline">
              {BRAND.phoneDisplay}
            </a>
          </li>
          <li>
            <strong className="text-navy">Ubicación:</strong> {BRAND.locationFull}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-xl text-navy">2. Objeto</h2>
        <p className="mt-3">
          El presente sitio web tiene por objeto facilitar información sobre
          los servicios de gestión de viviendas destinadas al alquiler por
          habitaciones ofrecidos por {BRAND.name} en Gran Canaria, así como
          permitir el contacto con propietarios e inmobiliarias interesados en
          dichos servicios.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl text-navy">
          3. Condiciones de uso
        </h2>
        <p className="mt-3">
          El acceso y uso de este sitio web atribuye la condición de usuario e
          implica la aceptación plena de las presentes condiciones. El usuario
          se compromete a hacer un uso adecuado de los contenidos y servicios
          ofrecidos, absteniéndose de emplearlos para actividades ilícitas,
          contrarias a la buena fe o al orden público.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl text-navy">
          4. Propiedad intelectual e industrial
        </h2>
        <p className="mt-3">
          Los contenidos de este sitio web, incluyendo textos, imágenes, diseño
          y código fuente, son propiedad de {BRAND.name} o de terceros con
          licencia de uso, y están protegidos por la normativa aplicable en
          materia de propiedad intelectual e industrial. Queda prohibida su
          reproducción, distribución o modificación sin autorización expresa.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl text-navy">5. Responsabilidad</h2>
        <p className="mt-3">
          {BRAND.name} no se hace responsable de los daños derivados del uso
          del sitio web, de interrupciones del servicio, virus informáticos o
          contenidos de sitios enlazados de terceros. La información publicada
          tiene carácter orientativo y puede ser modificada sin previo aviso.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl text-navy">6. Enlaces externos</h2>
        <p className="mt-3">
          Este sitio web puede contener enlaces a páginas de terceros.
          {BRAND.name} no asume responsabilidad alguna sobre el contenido,
          políticas o prácticas de dichos sitios externos.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl text-navy">7. Legislación aplicable</h2>
        <p className="mt-3">
          Las presentes condiciones se rigen por la legislación española. Para
          la resolución de cualquier controversia, las partes se someterán a los
          juzgados y tribunales que correspondan conforme a derecho.
        </p>
      </section>
    </LegalPageLayout>
  );
}
