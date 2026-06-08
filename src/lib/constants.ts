export const BRAND = {
  name: "Canarias Room Solutions",
  tagline: "Gestión premium de viviendas en Gran Canaria",
  phone: "643170374",
  phoneDisplay: "643 170 374",
  whatsappUrl: "https://wa.me/34643170374",
  email: "info@canariasroomsolutions.com",
} as const;

export const NAV_LINKS = [
  { label: "Propietarios", href: "#propietarios" },
  { label: "Inmobiliarias", href: "#inmobiliarias" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const OWNER_BENEFITS = [
  {
    title: "Renta estable",
    description:
      "Ingresos mensuales predecibles con contratos de media estancia y gestión profesional.",
    icon: "chart",
  },
  {
    title: "Cero gestión",
    description:
      "Nos encargamos de inquilinos, contratos, limpieza y coordinación. Usted solo cobra.",
    icon: "key",
  },
  {
    title: "Vivienda supervisada",
    description:
      "Inspecciones periódicas y mantenimiento preventivo para preservar el valor de su propiedad.",
    icon: "home",
  },
  {
    title: "Atención a incidencias",
    description:
      "Respuesta ágil las 24 horas ante cualquier imprevisto. Su tranquilidad es nuestra prioridad.",
    icon: "shield",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Valoración",
    description:
      "Analizamos su vivienda y el mercado local para determinar el potencial de renta óptimo.",
  },
  {
    step: 2,
    title: "Acuerdo",
    description:
      "Formalizamos un contrato transparente adaptado a sus necesidades y expectativas.",
  },
  {
    step: 3,
    title: "Preparación",
    description:
      "Acondicionamos y equipamos la propiedad para maximizar su atractivo y rentabilidad.",
  },
  {
    step: 4,
    title: "Gestión",
    description:
      "Gestionamos reservas, inquilinos, limpieza y mantenimiento de principio a fin.",
  },
  {
    step: 5,
    title: "Cobro",
    description:
      "Recibe su renta puntualmente cada mes, con informes claros del rendimiento.",
  },
] as const;

export const ZONES = [
  "Las Palmas de Gran Canaria",
  "Telde",
  "Maspalomas / San Bartolomé",
  "Arguineguín / Mogán",
  "Agaete / Norte",
  "Otra zona",
] as const;
