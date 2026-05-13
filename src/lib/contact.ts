// src/lib/contact.ts
// Contact constants + helpers (no extra deps)
export const SITE_URL = "https://daegon13.github.io";
export const EMAIL = "damgmarin13@gmail.com";

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/diego-marin-34632121b/";
export const GITHUB_URL = "https://github.com/Daegon13";
export const INSTAGRAM_HANDLE = "@marin_dev_";
export const INSTAGRAM_URL = "https://www.instagram.com/marin_dev_/";

export const WHATSAPP_NUMBER_E164 = "59897316092"; // UY (+598) + 97316092
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER_E164}`;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola Diego, quiero saber qué conviene construir primero. Mi rubro es: ___ y mi Instagram/web es: ___.\n\nHoy necesito: más consultas / turnos / pedidos / mostrar una idea / manejar datos.";

export const DEMO_WHATSAPP_MESSAGE =
  "Hola Diego, quiero una demo para mi negocio. Mi rubro es: ___ y hoy atiendo/vendo por: Instagram / WhatsApp / web actual.";

export const AUDIT_WHATSAPP_MESSAGE = DEFAULT_WHATSAPP_MESSAGE;

export const SELECTOR_DEMO_WHATSAPP_MESSAGE =
  "Hola Diego, creo que necesito una demo para mi rubro. Mi negocio es: ___ y mi Instagram/web es: ___";

export const SELECTOR_LANDING_WHATSAPP_MESSAGE =
  "Hola Diego, quiero cotizar una landing. Mi negocio es: ___ y el servicio/oferta principal es: ___";

export const SELECTOR_AGENDA_WHATSAPP_MESSAGE =
  "Hola Diego, quiero revisar un flujo de WhatsApp/agenda. Hoy me escriben por: ___ y necesito que el cliente mande: ___";

export const SELECTOR_PANEL_WHATSAPP_MESSAGE =
  "Hola Diego, quiero consultar por un panel simple. Hoy manejo datos en: ___ y necesito ver/editar: ___";

export function SERVICE_WHATSAPP_MESSAGE(planName: string) {
  return `Hola Diego, quiero consultar por ${planName}.\n\nMi negocio es: ___\nNecesito resolver: ___\nHoy tengo: Instagram / WhatsApp / web actual.`;
}

export function PROJECT_WHATSAPP_MESSAGE(projectName: string) {
  return `Hola Diego, vi el caso de ${projectName}. Quiero algo parecido para mi negocio.\n\nMi rubro es: ___.`;
}

export function VERTICAL_WHATSAPP_MESSAGE(rubro: string) {
  return `Hola Diego, quiero una demo para ${rubro}.\n\nHoy atiendo/vendo por: Instagram / WhatsApp / web actual.`;
}

export function waLink(text?: string) {
  const msg = (text ?? DEFAULT_WHATSAPP_MESSAGE).trim();
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(msg)}`;
}
