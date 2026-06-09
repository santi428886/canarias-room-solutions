export const BRAND = {
  name: "Canarias Room Solutions",
  shortName: "CRS",
  tagline: "Gestión de viviendas por habitaciones en Gran Canaria",
  email: "contacto@canariasroomsolutions.es",
  phone: "643170374",
  phoneDisplay: "643 170 374",
  phoneTel: "+34643170374",
  location: "Gran Canaria",
  locationFull: "Gran Canaria, España",
  whatsappUrl: "https://wa.me/34643170374",
  whatsappMessage:
    "Hola, he visto vuestra web y me gustaría recibir información.",
  whatsappAgencyMessage:
    "Hola, soy una inmobiliaria y me gustaría proponer una vivienda para colaborar con Canarias Room Solutions.",
} as const;

export const NAV_LINKS = [
  { label: "Propietarios", href: "/#propietarios" },
  { label: "Caso práctico", href: "/#caso-practico" },
  { label: "Inmobiliarias", href: "/inmobiliarias" },
  { label: "Quiénes somos", href: "/#quienes-somos" },
  { label: "Contacto", href: "/#contacto" },
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
  {
    title: "Participación adicional en determinados casos",
    description:
      "En determinadas viviendas podemos estudiar modelos de colaboración que combinen una renta acordada con una participación adicional vinculada al rendimiento de la gestión.",
    icon: "trending",
  },
  {
    title: "Modelos adaptados a cada vivienda",
    description:
      "No todas las viviendas son iguales. Estudiamos cada caso para proponer la fórmula de colaboración más adecuada.",
    icon: "sliders",
  },
] as const;

export const HERO_TITLE = "Gestión profesional de viviendas en Gran Canaria";

export const HERO_OWNER_HIGHLIGHT =
  "Además de una renta acordada, estudiamos modelos de colaboración flexibles para determinados propietarios.";

export const HERO_OWNER_BADGES = [
  "Renta acordada",
  "Participación adicional en determinados casos",
  "Gestión profesional",
  "Respuesta en 24-48 horas",
] as const;

export const OWNER_FLEX_BAND = {
  title: "Modelos de colaboración flexibles",
  paragraphs: [
    "Además de una renta acordada, determinadas viviendas pueden optar a fórmulas de colaboración que incluyan una participación adicional para el propietario.",
    "Cada inmueble se estudia individualmente según ubicación, características y viabilidad operativa.",
  ],
  benefits: [
    "Renta acordada",
    "Participación adicional en determinados casos",
    "Gestión profesional",
    "Estudio individual de cada vivienda",
  ],
  cta: "Solicitar valoración gratuita",
} as const;

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
  {
    title: "Modelo flexible de colaboración",
    description:
      "Cada vivienda es diferente. En determinados inmuebles podemos estudiar fórmulas de colaboración que combinen una renta acordada con el propietario y una participación adicional vinculada al rendimiento de la gestión.",
    note:
      "Las condiciones se analizan individualmente según ubicación, características del inmueble y viabilidad operativa.",
    icon: "flexible",
  },
] as const;

export const OWNER_CASE_STUDY = {
  title: "Caso práctico de gestión",
  subtitle:
    "Un ejemplo orientativo que resume el modelo de colaboración, las opciones disponibles y el resultado para el propietario.",
  property: "Vivienda de 3 habitaciones",
  ownerReceive: {
    label: "Propietario recibe",
    amount: "900 €/mes",
    badge: "Renta acordada · Ejemplo orientativo",
  },
  crsManagementTitle: "Gestión CRS",
  crsManagement: [
    "Selección de inquilinos",
    "Coordinación de entradas y salidas",
    "Seguimiento operativo",
    "Comunicación centralizada",
  ],
  orientativeTitle: "Niveles orientativos de colaboración",
  orientativeNote:
    "Cada vivienda es diferente. Las condiciones finales dependen de ubicación, estado, distribución, demanda y viabilidad operativa.",
  orientativeExamples: [
    {
      title: "Vivienda de 3 habitaciones",
      ownerRent: "900 €/mes",
      participationRange: "5% - 8%",
      resultRange: "945 €/mes a 972 €/mes",
    },
    {
      title: "Vivienda de 4 habitaciones",
      ownerRent: "1.200 €/mes",
      participationRange: "10% - 12%",
      resultRange: "1.320 €/mes a 1.344 €/mes",
    },
  ],
  collaborationOptions: {
    title: "Opciones de colaboración",
    options: [
      {
        label: "Opción A",
        title: "Renta mensual acordada",
        description:
          "Para propietarios que buscan estabilidad, previsibilidad y menos carga diaria.",
      },
      {
        label: "Opción B",
        title: "Renta mensual acordada + posible participación adicional",
        description:
          "Disponible en determinadas viviendas y siempre sujeta a valoración previa.",
      },
    ],
    note:
      "Las condiciones se estudian individualmente según las características de cada inmueble.",
  },
  resultsTitle: "Resultado",
  results: [
    "Menos gestión diaria",
    "Un único interlocutor",
    "Vivienda supervisada",
    "Posibilidad de colaboración flexible según el inmueble",
  ],
  disclaimer:
    "Los ejemplos mostrados son únicamente orientativos y no constituyen una oferta vinculante. Las condiciones finales se analizan individualmente para cada vivienda.",
} as const;

export const OWNER_COMPARISON = {
  title: "Comparativa visual",
  subtitle:
    "Menos trabajo, renta acordada y posibilidad de participación adicional — sin promesas de rentabilidad.",
  aloneLabel: "Propietario por su cuenta",
  crsLabel: "Con CRS",
  rows: [
    { alone: "Atiende llamadas", withCrs: "CRS lo coordina" },
    { alone: "Gestiona incidencias", withCrs: "CRS las canaliza" },
    { alone: "Busca inquilinos", withCrs: "CRS ayuda en el proceso" },
    { alone: "Varias conversaciones", withCrs: "Un único contacto" },
    { alone: "Más tiempo invertido", withCrs: "Menos carga operativa" },
  ],
} as const;

export const OWNER_VALUE_CHANGES = {
  title: "¿Qué cambia para el propietario?",
  subtitle:
    "Nuestro objetivo es reducir la carga operativa del propietario manteniendo una gestión organizada y transparente.",
  blocks: [
    {
      emoji: "🕒",
      title: "Menos tiempo de gestión",
      description:
        "Reducimos la necesidad de coordinar incidencias y tareas diarias.",
    },
    {
      emoji: "📞",
      title: "Un único punto de contacto",
      description:
        "Centralizamos la comunicación relacionada con la vivienda.",
    },
    {
      emoji: "🏠",
      title: "Seguimiento continuo",
      description:
        "Supervisión y coordinación operativa de la gestión.",
    },
    {
      emoji: "💰",
      title: "Modelos flexibles",
      description:
        "Cada inmueble puede estudiarse bajo distintas fórmulas de colaboración.",
    },
  ],
} as const;

export const OWNER_SERVICES = {
  title: "¿De qué nos encargamos?",
  subtitle:
    "Nuestro objetivo es que el propietario no tenga que ocuparse de la gestión diaria de la vivienda.",
  highlight:
    "Menos llamadas, menos incidencias directas y una gestión más ordenada.",
  items: [
    {
      title: "Limpieza y mantenimiento",
      description:
        "Coordinamos la limpieza de zonas comunes y el mantenimiento básico de la vivienda.",
      icon: "sparkles",
    },
    {
      title: "Reparaciones e incidencias",
      description:
        "Gestionamos la comunicación con profesionales y el seguimiento de averías o incidencias.",
      icon: "wrench",
    },
    {
      title: "Atención a inquilinos",
      description:
        "Centralizamos consultas, avisos y necesidades del día a día.",
      icon: "users",
    },
    {
      title: "Entradas y salidas",
      description:
        "Organizamos altas, bajas y cambios de ocupantes cuando sea necesario.",
      icon: "door",
    },
    {
      title: "Seguimiento continuo",
      description:
        "Supervisamos el funcionamiento general de la vivienda y la ocupación.",
      icon: "activity",
    },
    {
      title: "Gestión documental",
      description:
        "Coordinamos la documentación operativa y los acuerdos necesarios.",
      icon: "file",
    },
    {
      title: "Presentación de habitaciones",
      description:
        "Cuidamos la imagen de las habitaciones para mejorar su presentación y atractivo.",
      icon: "bed",
    },
    {
      title: "Comunicación con el propietario",
      description:
        "Mantenemos una comunicación clara y actualizaciones periódicas.",
      icon: "message",
    },
  ],
} as const;

export const OWNER_FAQ = [
  {
    question: "¿Cómo funciona?",
    answer: [
      "Nos indica los datos básicos de su vivienda.",
      "Analizamos ubicación, distribución y viabilidad operativa.",
      "Le respondemos con una valoración inicial clara y sin compromiso.",
    ],
  },
  {
    question: "¿Siempre existe una renta acordada?",
    answer: [
      "Sí. El modelo principal se basa en una renta acordada previamente con el propietario.",
    ],
  },
  {
    question: "¿Puede existir participación adicional?",
    answer: [
      "En determinados inmuebles pueden estudiarse fórmulas de colaboración que incluyan una participación adicional vinculada al modelo de gestión.",
      "Cada caso se analiza individualmente.",
    ],
  },
  {
    question: "¿Todas las viviendas encajan?",
    answer: [
      "No necesariamente. Analizamos ubicación, distribución, demanda y viabilidad operativa antes de realizar una propuesta.",
    ],
  },
  {
    question: "¿Cuánto tarda la valoración?",
    answer: [
      "Solemos responder en un plazo aproximado de 24-48 horas laborables tras recibir la información de la vivienda.",
    ],
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
      "Habitación funcional pero anticuada, con margen de mejora en presentación y atractivo para el alquiler.",
    image:
      "https://images.unsplash.com/photo-1775595224297-a98f8fd7927a?w=800&h=600&fit=crop&q=80",
    fallbackImage:
      "https://images.unsplash.com/photo-1747227798754-c7bd3ad01319?w=800&h=600&fit=crop&q=80",
  },
  after: {
    label: "Después",
    caption:
      "Habitación preparada profesionalmente, con mejor presentación, imagen y atractivo para los inquilinos.",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop&q=85",
    fallbackImage:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop&q=80",
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

export const LEGAL_LINKS = [
  { label: "Aviso Legal", href: "/aviso-legal" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Cookies", href: "/cookies" },
] as const;

export const ABOUT_PAGE_PARAGRAPHS = [
  "Canarias Room Solutions es un proyecto especializado en la gestión profesional de viviendas destinadas al alquiler por habitaciones en Gran Canaria.",
  "Nuestro objetivo es ofrecer a propietarios e inmobiliarias una solución organizada, transparente y eficiente para la gestión diaria de inmuebles.",
  "Trabajamos con un enfoque basado en la comunicación, la responsabilidad y las relaciones a largo plazo.",
  "Cada vivienda se estudia de forma individual para adaptarnos a las necesidades del propietario y a las características específicas del inmueble.",
] as const;

export const AGENCY_PAGE_HERO_IMAGE =
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=85";

export const AGENCY_COLLABORATION_STEPS = [
  {
    step: 1,
    title: "La inmobiliaria detecta una vivienda",
  },
  {
    step: 2,
    title: "CRS analiza el encaje",
  },
  {
    step: 3,
    title: "Se presenta una propuesta",
  },
  {
    step: 4,
    title: "Se establece una colaboración transparente",
  },
] as const;

export const AGENCY_PROPERTY_CRITERIA = [
  "3 habitaciones o más",
  "Buena ubicación",
  "Propietarios abiertos a delegar gestión",
  "Distribución funcional",
  "Estado adecuado o mejorable",
  "Potencial para alquiler por habitaciones",
] as const;

export const AGENCY_PAGE_BENEFITS = [
  "Nueva vía de colaboración",
  "Solución adicional para determinados propietarios",
  "Comunicación directa",
  "Relación a largo plazo",
  "Modelo complementario a su actividad",
  "Sin asumir la gestión operativa diaria",
] as const;

export const AGENCY_COLLABORATION_EXAMPLE = {
  title: "Ejemplo de colaboración",
  subtitle:
    "Dos situaciones orientativas para entender cómo puede articularse una colaboración recurrente, sin comprometer la confidencialidad del modelo operativo.",
  cases: [
    {
      label: "Ejemplo 1",
      property: "Vivienda de 3 habitaciones",
      ownerRentLabel: "Renta acordada con propietario",
      ownerRent: "900 €/mes",
      agencyFeeLabel: "Retribución inmobiliaria",
      agencyFee: "12%",
      resultLabel: "Resultado orientativo",
      result: "108 €/mes",
      footerText:
        "La inmobiliaria mantiene su actividad habitual y puede recibir una retribución recurrente por viviendas que encajen en este modelo.",
    },
    {
      label: "Ejemplo 2",
      property: "Vivienda de 4 habitaciones",
      ownerRentLabel: "Renta acordada con propietario",
      ownerRent: "1.200 €/mes",
      agencyFeeLabel: "Retribución inmobiliaria",
      agencyFee: "12%",
      resultLabel: "Resultado orientativo",
      result: "144 €/mes",
      footerText:
        "Cada colaboración se estudia individualmente según la vivienda, ubicación y condiciones acordadas.",
    },
  ],
  importantNote:
    "En algunos casos, también puede establecerse una participación acordada para el propietario vinculada al rendimiento de la vivienda. Las condiciones finales se analizan individualmente en cada colaboración.",
  disclaimer:
    "Los ejemplos mostrados son orientativos y no constituyen una oferta vinculante ni una garantía de ingresos. Las condiciones pueden variar según cada inmueble y acuerdo alcanzado.",
} as const;

export const AGENCY_WHY_WORK_WITH_US = {
  title: "¿Por qué una inmobiliaria trabaja con nosotros?",
  blocks: [
    {
      title: "Nueva fuente de ingresos",
      description:
        "Amplía tu cartera con retribuciones recurrentes por viviendas que encajen en el modelo de gestión por habitaciones.",
      icon: "trending",
    },
    {
      title: "Sin gestión operativa diaria",
      description:
        "Canarias Room Solutions asume la operativa; tu inmobiliaria no carga con captación, incidencias ni coordinación diaria.",
      icon: "shield",
    },
    {
      title: "Solución para propietarios específicos",
      description:
        "Alternativa profesional cuando el alquiler tradicional no encaja con ciertos perfiles de vivienda o propietario.",
      icon: "key",
    },
    {
      title: "Colaboración profesional a largo plazo",
      description:
        "Relación basada en transparencia, comunicación directa y acuerdos claros desde el primer contacto.",
      icon: "handshake",
    },
  ],
} as const;
