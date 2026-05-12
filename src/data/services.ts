export const servicePlans = [
  {
    name: "Demo Comercial Express",
    tag: "Validar rubro",
    badge: "Validar rápido",
    price: "USD 150–290",
    time: "3–5 días hábiles",
    bestFor:
      "Negocios que tienen Instagram, una idea o un rubro definido y necesitan una demo navegable antes de invertir en algo grande.",
    description:
      "Una página/demo navegable con hero, servicios o módulos principales, CTA a WhatsApp, visual mobile y deploy publicado.",
    positioning:
      "Para pasar de Instagram, idea o rubro a una demo navegable que puedas mostrar por link.",
    solves:
      "Sirve cuando todavía falta ver cómo se presenta la oferta, qué pantallas hacen falta y qué mensaje abre WhatsApp.",
    includes: [
      "Una página/demo navegable",
      "Hero con promesa y rubro",
      "Servicios o módulos principales",
      "CTA a WhatsApp con mensaje prearmado",
      "Visual mobile revisado",
      "Deploy publicado",
    ],
    notIncluded: [
      "Backend real",
      "Pagos online",
      "Panel admin completo",
      "Carga masiva de productos",
    ],
    clientInput: [
      "Instagram o web actual",
      "Rubro y servicios principales",
      "Logo/colores si existen",
      "Referencias visuales opcionales",
    ],
    finalDeliverable:
      "Link publicado con una demo one-page lista para revisar, enviar por WhatsApp o usar como base de cotización.",
    wrongFit:
      "No conviene si ya necesitás pagos, usuarios, panel completo o catálogo grande desde el primer día.",
    comparison: "Demo navegable por rubro",
    cta: "Pedir demo para mi rubro",
    icon: "rocket",
    tone: "cyan",
    chooser: "Idea",
    attributes: [
      { label: "3–5 días", icon: "speed" },
      { label: "One-page", icon: "layout" },
      { label: "WhatsApp", icon: "message" },
      { label: "Deploy", icon: "external" },
    ],
  },
  {
    name: "Landing de Conversión",
    tag: "Oferta definida",
    badge: "Recomendado",
    price: "USD 390–690",
    time: "7–12 días hábiles",
    bestFor:
      "Una oferta definida, campaña, link de bio, Google Business o servicio principal que necesita pedir cotizaciones con mejor contexto.",
    description:
      "Una landing con hero, oferta, prueba/confianza, FAQ, CTA a WhatsApp o formulario, metadata SEO/share y deploy.",
    positioning:
      "Para presentar una oferta concreta con precios, servicios, prueba y camino de cotización en una sola página.",
    solves:
      "Reduce dudas antes del mensaje: qué incluye el servicio, para quién es, qué datos mandar y cómo pedir cotización.",
    includes: [
      "Hero con oferta y CTA principal",
      "Sección de servicios o propuesta",
      "Bloques de prueba, confianza y objeciones",
      "FAQ compacta",
      "WhatsApp, formulario o link de reserva",
      "Metadata SEO/share y deploy",
    ],
    notIncluded: [
      "E-commerce completo",
      "Campañas pagas",
      "Blog extenso",
      "Integraciones avanzadas",
    ],
    clientInput: [
      "Oferta o servicio principal",
      "Precios o rangos si querés mostrarlos",
      "Fotos/testimonios si existen",
      "Datos necesarios para cotizar",
    ],
    finalDeliverable:
      "Landing publicada con URL, preview para compartir y CTAs preparados para recibir pedidos de cotización.",
    wrongFit:
      "No conviene si todavía no sabés qué vendés; en ese caso es mejor empezar con una demo por rubro.",
    comparison: "Oferta + cotización",
    cta: "Cotizar landing",
    featured: true,
    icon: "target",
    tone: "emerald",
    chooser: "Oferta",
    attributes: [
      { label: "CTA", icon: "message" },
      { label: "FAQ", icon: "shield" },
      { label: "OpenGraph", icon: "external" },
      { label: "Performance", icon: "zap" },
    ],
  },
  {
    name: "Web con WhatsApp / Agenda",
    tag: "Turnos guiados",
    badge: "Mensajes completos",
    price: "USD 590–990",
    time: "10–15 días hábiles",
    bestFor:
      "Barberías, clínicas, gimnasios, restaurantes o servicios que reciben mensajes incompletos sobre horarios, precios o disponibilidad.",
    description:
      "Una web con selección de servicio, agenda externa si aplica, WhatsApp prearmado y páginas de confianza para pedir turno con datos mínimos.",
    positioning:
      "Para que la persona elija servicio, vea datos clave y llegue a WhatsApp con el mensaje ya armado.",
    solves:
      "Ordena turnos y pedidos repetidos: servicio elegido, horario preferido, sucursal o datos que necesitás antes de responder.",
    includes: [
      "Servicios o planes con CTA específico",
      "WhatsApp prearmado por servicio",
      "Link o embed de agenda externa si ya existe",
      "Instrucciones de datos a enviar",
      "Páginas/secciones de confianza",
      "Guía para mantener links y textos",
    ],
    notIncluded: [
      "Agenda propia compleja",
      "Pagos reales",
      "CRM avanzado",
      "Automatizaciones grandes",
    ],
    clientInput: [
      "Servicios, precios o rangos",
      "Horarios y zonas de atención",
      "Link de agenda actual si existe",
      "Datos mínimos que debe mandar el cliente",
    ],
    finalDeliverable:
      "Web publicada con botones por servicio y mensajes de WhatsApp listos para copiar datos útiles al chat.",
    wrongFit:
      "No conviene si necesitás un sistema de reservas propio con usuarios, pagos y reglas complejas.",
    comparison: "Turnos y mensajes guiados",
    cta: "Consultar flujo de turnos",
    icon: "briefcase",
    tone: "violet",
    chooser: "Turnos",
    attributes: [
      { label: "Servicios", icon: "layout" },
      { label: "Agenda", icon: "flow" },
      { label: "WhatsApp", icon: "message" },
      { label: "Datos", icon: "database" },
    ],
  },
  {
    name: "Sistema simple / Panel Admin",
    tag: "Datos editables",
    badge: "Panel acotado",
    price: "USD 790–1.490+",
    time: "15–25 días hábiles",
    bestFor:
      "Negocios que ya tienen un flujo manual y necesitan ver o editar datos básicos sin construir una plataforma enorme.",
    description:
      "Un panel acotado con tabla o dashboard, formularios, estados simples, filtros, deploy/repo y documentación breve.",
    positioning:
      "Para reemplazar una planilla o flujo manual por un panel pequeño con módulos y límites definidos.",
    solves:
      "Centraliza datos básicos como stock, leads, reservas o contenidos editables con formularios y estados simples.",
    includes: [
      "Tabla o dashboard inicial",
      "CRUD básico cuando está en alcance",
      "Estados simples y filtros",
      "Formularios para cargar o editar datos",
      "Deploy/repo del proyecto",
      "Documentación breve de uso",
    ],
    notIncluded: [
      "ERP",
      "SaaS multiempresa",
      "App móvil nativa",
      "Permisos complejos salvo alcance específico",
      "Automatizaciones grandes",
    ],
    clientInput: [
      "Flujo manual actual",
      "Campos que se deben guardar",
      "Estados necesarios",
      "Quién usa el panel y para qué",
    ],
    finalDeliverable:
      "Panel publicado o entregado por repo/deploy, con módulos acordados y una guía breve para usarlo.",
    wrongFit:
      "No conviene si buscás un ERP completo, app nativa o producto SaaS con múltiples empresas desde el inicio.",
    comparison: "Panel simple de datos",
    cta: "Consultar panel simple",
    icon: "database",
    tone: "amber",
    chooser: "Interno",
    attributes: [
      { label: "Panel", icon: "settings" },
      { label: "CRUD", icon: "layout" },
      { label: "Filtros", icon: "flow" },
      { label: "Repo", icon: "external" },
    ],
  },
];

export const productizedServices = servicePlans;
