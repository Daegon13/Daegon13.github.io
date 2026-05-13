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

const cleanContext = (value: string) => value.trim().replace(/\s+/g, " ");

export function makeWhatsAppUrl(message = getGlobalLeadMessage()) {
  const text = cleanContext(message);
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;
}

export function getGlobalLeadMessage() {
  return "Hola Diego, quiero saber qué conviene construir primero. Mi rubro es: ___ y mi Instagram/web es: ___";
}

export function getServiceLeadMessage(serviceName: string) {
  const service = cleanContext(serviceName || "este paquete");
  return `Hola Diego, quiero consultar por ${service}. Mi negocio es: ___ y hoy necesito resolver: ___`;
}

export function getVerticalLeadMessage(verticalName: string) {
  const vertical = cleanContext(verticalName || "mi rubro");
  return `Hola Diego, quiero una demo para ${vertical}. Mi Instagram/web es: ___`;
}

export function getProjectLeadMessage(projectName: string) {
  const project = cleanContext(projectName || "un caso del portfolio");
  return `Hola Diego, vi el caso ${project} y quiero algo parecido para mi negocio. Mi rubro es: ___`;
}

export const DEFAULT_WHATSAPP_MESSAGE = getGlobalLeadMessage();
export const DEMO_WHATSAPP_MESSAGE = getGlobalLeadMessage();
export const AUDIT_WHATSAPP_MESSAGE = getGlobalLeadMessage();

export const SELECTOR_DEMO_WHATSAPP_MESSAGE = getServiceLeadMessage(
  "Demo Comercial Express",
);
export const SELECTOR_LANDING_WHATSAPP_MESSAGE = getServiceLeadMessage(
  "Landing de Conversión",
);
export const SELECTOR_AGENDA_WHATSAPP_MESSAGE = getServiceLeadMessage(
  "Web con WhatsApp / Agenda",
);
export const SELECTOR_PANEL_WHATSAPP_MESSAGE = getServiceLeadMessage(
  "Sistema simple / Panel Admin",
);

export function SERVICE_WHATSAPP_MESSAGE(planName: string) {
  return getServiceLeadMessage(planName);
}

export function PROJECT_WHATSAPP_MESSAGE(projectName: string) {
  return getProjectLeadMessage(projectName);
}

export function VERTICAL_WHATSAPP_MESSAGE(rubro: string) {
  return getVerticalLeadMessage(rubro);
}

export const waLink = makeWhatsAppUrl;
