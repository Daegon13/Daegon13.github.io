// src/lib/contact.ts
// Contact constants + helpers (no extra deps)
export const SITE_URL = "https://daegon13.github.io";
export const EMAIL = "damgmarin13@gmail.com";

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/diego-marin-34632121b/";
export const GITHUB_URL = "https://github.com/Daegon13";

export const WHATSAPP_NUMBER_E164 = "59897316092"; // UY (+598) + 97316092
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER_E164}`;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola Diego, quiero una web/demo para mi negocio.\n\nRubro: [rubro]\nObjetivo: [más consultas / reservas / ventas]\nHoy tengo: [Instagram / web / nada]\nMe interesa: [landing / demo / agenda / panel / no sé todavía]\nLink de referencia: [Instagram o web]";

export const DEMO_WHATSAPP_MESSAGE =
  "Hola Diego, quiero una demo/web para mi negocio.\n\nRubro: [rubro]\nObjetivo: [más consultas / reservas / ventas]\nHoy tengo: [Instagram / web / nada]\nMe interesa: [landing / demo / agenda / panel / no sé todavía]\nLink de referencia: [Instagram o web]";

export const AUDIT_WHATSAPP_MESSAGE =
  "Hola Diego, quiero que revises mi web o Instagram.\n\nLink: [pegá acá tu web o Instagram]\nRubro: [rubro]\nObjetivo: [más consultas / reservas / ventas]\nPrincipal problema hoy: [breve]";

export function SERVICE_WHATSAPP_MESSAGE(planName: string) {
  return `Hola Diego, quiero consultar por ${planName}.\n\nRubro: [rubro]\nObjetivo: [más consultas / reservas / ventas]\nHoy tengo: [Instagram / web / nada]\nLink de referencia: [Instagram o web]`;
}

export function waLink(text?: string) {
  const msg = (text ?? DEFAULT_WHATSAPP_MESSAGE).trim();
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(msg)}`;
}
