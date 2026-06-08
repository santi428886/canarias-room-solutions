export const BRAND = {
  name: "Canarias Room Solutions",
  shortName: "CRS",
  tagline: "Gestión de viviendas por habitaciones en Gran Canaria",
  email: "contacto@canariasroomsolutions.es",
  phone: "643170374",
  phoneDisplay: "643 170 374",
  phoneTel: "+34643170374",
  location: "Gran Canaria",
} as const;

export const NAV_LINKS = [
  { label: "Propietarios", href: "#propietarios" },
  { label: "Inmobiliarias", href: "#inmobiliarias" },
  { label: "Por qué CRS", href: "#por-que-crs" },
  { label: "Zonas", href: "#zonas" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const WHY_CRS = [
  {
    title: "Gestión especializada",
    description:
      "Enfoque exclusivo en alquiler por habitaciones, con procesos definidos para cada fase de la operativa.",
    icon: "target",
  },
  {
    title: "Conocimiento del mercado local",
    description:
      "Criterio basado en la realidad de Gran Canaria: demanda, zonas, perfiles de inquilino y dinámica del alquiler.",
    icon: "map",
  },
  {
    title: "Comunicación directa",
    description:
      "Trato cercano y claro con propietarios e inmobiliarias, sin intermediarios innecesarios ni mensajes ambiguos.",
    icon: "message",
  },
  {
    title: "Seguimiento continuo",
    description:
      "Supervisión regular de la vivienda, la ocupación y la gestión para mantener control en todo momento.",
    icon: "activity",
  },
  {
    title: "Gestión estructurada",
    description:
      "Metodología ordenada en captación, contratos, cobros, incidencias y mantenimiento básico.",
    icon: "layout",
  },
  {
    title: "Colaboración transparente",
    description:
      "Condiciones definidas desde el inicio, con acuerdos claros y relación profesional a largo plazo.",
    icon: "handshake",
  },
] as const;

export const OPERATING_ZONES = [
  "Las Palmas de Gran Canaria",
  "Siete Palmas",
  "Schamann",
  "Guanarteme",
  "Triana",
  "Vegueta",
  "Tamaraceite",
] as const;

export const OPERATING_ZONES_NOTE =
  "También evaluamos otras zonas de Gran Canaria según las características de la vivienda.";

export const CONTACT_STEPS = [
  {
    step: "01",
    title: "Nos escribes",
    description: "Indícanos ubicación, habitaciones y estado general de la vivienda.",
  },
  {
    step: "02",
    title: "Revisamos el encaje",
    description: "Analizamos si la propiedad encaja con nuestro modelo de gestión.",
  },
  {
    step: "03",
    title: "Te respondemos",
    description: "Te contactamos con una valoración inicial clara y sin compromiso.",
  },
] as const;

export const OWNER_BENEFITS = [
  {
    title: "Gestión integral",
    description:
      "Coordinamos el día a día del alquiler por habitaciones para que el propietario no tenga que intervenir en la operativa.",
    icon: "layers",
  },
  {
    title: "Selección de inquilinos",
    description:
      "Aplicamos criterios claros de solvencia, estabilidad y compatibilidad antes de formalizar cualquier contrato.",
    icon: "users",
  },
  {
    title: "Coordinación de incidencias",
    description:
      "Actuamos como interlocutor único ante imprevistos, averías o necesidades de los inquilinos y del propietario.",
    icon: "wrench",
  },
  {
    title: "Seguimiento continuo",
    description:
      "Mantenemos comunicación regular sobre el estado de la vivienda, la ocupación y la gestión general.",
    icon: "chart",
  },
  {
    title: "Mantenimiento básico",
    description:
      "Organizamos conservación y reparaciones menores para preservar el buen estado del inmueble.",
    icon: "home",
  },
  {
    title: "Optimización de ocupación",
    description:
      "Trabajamos por una ocupación estable y una convivencia ordenada, sin promesas irreales ni presión comercial.",
    icon: "calendar",
  },
] as const;

export const AGENCY_BENEFITS = [
  {
    title: "Nueva vía de negocio",
    description:
      "Amplía tu oferta con un modelo de gestión especializado en alquiler por habitaciones.",
    icon: "briefcase",
  },
  {
    title: "Colaboración transparente",
    description:
      "Condiciones claras desde el inicio, con comunicación directa y sin letra pequeña.",
    icon: "handshake",
  },
  {
    title: "Retribución acordada",
    description:
      "Cuando proceda, condiciones económicas definidas de forma previa y por escrito entre ambas partes.",
    icon: "coins",
  },
  {
    title: "Solución para viviendas difíciles",
    description:
      "Alternativa profesional para inmuebles con potencial por habitaciones que no encajan en alquiler convencional.",
    icon: "key",
  },
  {
    title: "Seguimiento profesional",
    description:
      "Gestión estructurada con la que tu inmobiliaria puede presentar un servicio diferencial a sus clientes.",
    icon: "clipboard",
  },
  {
    title: "Relación a largo plazo",
    description:
      "Buscamos colaboraciones estables, basadas en confianza mutua y resultados sostenibles.",
    icon: "heart",
  },
] as const;

export const AGENCY_INTRO = {
  title: "Un socio operativo para inmobiliarias en Gran Canaria",
  subtitle:
    "Canarias Room Solutions complementa la actividad de las inmobiliarias con una solución especializada en gestión por habitaciones. Cuando una vivienda no encaja en el alquiler convencional o requiere un enfoque más estructurado, aportamos la operativa, el criterio y el seguimiento para resolver el encargo con solvencia.",
  note:
    "La colaboración se articula con criterios profesionales, comunicación directa y acuerdos transparentes. Si procede, puede contemplarse una retribución por vivienda gestionada, siempre definida de forma previa y por escrito.",
} as const;

export const PROPERTY_TYPES = [
  {
    title: "3 habitaciones o más",
    description: "Distribución adecuada para una gestión por habitaciones ordenada.",
    icon: "bed",
  },
  {
    title: "Buenas conexiones de transporte",
    description: "Accesibilidad para perfiles laborales, estudiantes o media estancia.",
    icon: "bus",
  },
  {
    title: "Zonas con demanda",
    description: "Entornos urbanos, universitarios o áreas con interés de alquiler recurrente.",
    icon: "map",
  },
  {
    title: "Amuebladas o con potencial",
    description: "Viviendas listas para habitar o con margen razonable de adecuación.",
    icon: "sofa",
  },
  {
    title: "Propietarios abiertos",
    description: "Perfiles dispuestos a delegar en un modelo de gestión moderno y estructurado.",
    icon: "user-check",
  },
  {
    title: "Distribución funcional",
    description: "Espacios comunes y habitaciones con una organización práctica y habitable.",
    icon: "layout",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Analizamos la vivienda",
    description:
      "Revisamos ubicación, estado, distribución y encaje con nuestro modelo de gestión por habitaciones.",
  },
  {
    step: 2,
    title: "Preparamos la propuesta",
    description:
      "Definimos una estrategia clara, con condiciones transparentes adaptadas a cada propiedad.",
  },
  {
    step: 3,
    title: "Gestionamos todo",
    description:
      "Nos encargamos de captación, visitas, contratos, cobros, incidencias y coordinación diaria.",
  },
  {
    step: 4,
    title: "Seguimiento y estabilidad",
    description:
      "Mantenemos control sobre la ocupación, la convivencia y el buen funcionamiento a largo plazo.",
  },
] as const;

export const PRUDENT_NOTE =
  "Según las características de la vivienda, ubicación y distribución, puede existir una plusvalía o mejora de rentabilidad frente a un alquiler tradicional.";

export const BEFORE_AFTER = {
  before: {
    label: "Antes",
    caption:
      "Espacio sin preparar, con menor capacidad de atraer perfiles adecuados",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop&q=80",
  },
  after: {
    label: "Después",
    caption:
      "Habitación presentada con criterio profesional, lista para una gestión ordenada",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop&q=85",
  },
} as const;

export const BEFORE_AFTER_IMAGE_SIZE = {
  width: 800,
  height: 600,
} as const;

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85";

export const VALUATION_ZONES = [
  ...OPERATING_ZONES,
  "Otra zona de Gran Canaria",
] as const;

export const PROPERTY_CONDITIONS = [
  "Excelente — lista para gestionar",
  "Buen estado — requiere pocos ajustes",
  "Estado aceptable — requiere adecuación",
  "Necesita reforma o acondicionamiento",
] as const;

export const ROOM_OPTIONS = [1, 2, 3, 4, 5, 6] as const;

export const VALUATION_EMAIL_SUBJECT =
  "Solicitud de valoración gratuita — Canarias Room Solutions";
