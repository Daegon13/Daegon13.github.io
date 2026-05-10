export const VISUAL_TONES = [
  "cyan",
  "violet",
  "emerald",
  "amber",
  "rose",
  "neutral",
] as const;

export type ProjectVisualTone = (typeof VISUAL_TONES)[number];

export type ProjectVisualInput = {
  title?: string;
  category?: string;
  businessType?: string;
  visualTone?: string;
  badges?: string[];
  features?: string[];
  stack?: string[];
  sector?: string;
  tipo?: string;
  resumen?: string;
};

export const toneStyles: Record<
  ProjectVisualTone,
  {
    gradient: string;
    glowPrimary: string;
    glowSecondary: string;
    iconShell: string;
    accentText: string;
    chip: string;
    line: string;
  }
> = {
  cyan: {
    gradient:
      "bg-gradient-to-br from-cyan-electric/25 via-blue-electric/15 to-ink",
    glowPrimary: "bg-cyan-electric/30",
    glowSecondary: "bg-blue-electric/25",
    iconShell:
      "border-cyan-electric/30 bg-cyan-electric/10 text-cyan-100 shadow-[0_0_34px_rgba(34,211,238,0.20)]",
    accentText: "text-cyan-electric",
    chip: "border-cyan-electric/20 bg-cyan-electric/10 text-cyan-100",
    line: "bg-cyan-electric/70",
  },
  violet: {
    gradient:
      "bg-gradient-to-br from-brand-violet/25 via-blue-electric/10 to-ink",
    glowPrimary: "bg-brand-violet/30",
    glowSecondary: "bg-cyan-electric/20",
    iconShell:
      "border-brand-violet/30 bg-brand-violet/10 text-violet-100 shadow-[0_0_34px_rgba(139,92,246,0.22)]",
    accentText: "text-violet-200",
    chip: "border-brand-violet/20 bg-brand-violet/10 text-violet-100",
    line: "bg-brand-violet/70",
  },
  emerald: {
    gradient:
      "bg-gradient-to-br from-brand-success/20 via-cyan-electric/10 to-ink",
    glowPrimary: "bg-brand-success/25",
    glowSecondary: "bg-cyan-electric/20",
    iconShell:
      "border-brand-success/30 bg-brand-success/10 text-emerald-100 shadow-[0_0_34px_rgba(52,211,153,0.20)]",
    accentText: "text-emerald-200",
    chip: "border-brand-success/20 bg-brand-success/10 text-emerald-100",
    line: "bg-brand-success/70",
  },
  amber: {
    gradient:
      "bg-gradient-to-br from-brand-warning/20 via-orange-500/10 to-ink",
    glowPrimary: "bg-brand-warning/25",
    glowSecondary: "bg-orange-500/20",
    iconShell:
      "border-brand-warning/30 bg-brand-warning/10 text-amber-100 shadow-[0_0_34px_rgba(251,191,36,0.18)]",
    accentText: "text-amber-200",
    chip: "border-brand-warning/20 bg-brand-warning/10 text-amber-100",
    line: "bg-brand-warning/70",
  },
  rose: {
    gradient: "bg-gradient-to-br from-rose-500/20 via-brand-violet/10 to-ink",
    glowPrimary: "bg-rose-500/25",
    glowSecondary: "bg-brand-violet/20",
    iconShell:
      "border-rose-400/30 bg-rose-500/10 text-rose-100 shadow-[0_0_34px_rgba(244,63,94,0.18)]",
    accentText: "text-rose-200",
    chip: "border-rose-400/20 bg-rose-500/10 text-rose-100",
    line: "bg-rose-400/70",
  },
  neutral: {
    gradient: "bg-gradient-to-br from-slate-500/20 via-slate-700/15 to-ink",
    glowPrimary: "bg-slate-400/20",
    glowSecondary: "bg-cyan-electric/10",
    iconShell:
      "border-slate-400/25 bg-slate-400/10 text-slate-100 shadow-[0_0_34px_rgba(148,163,184,0.15)]",
    accentText: "text-muted-bright",
    chip: "border-line bg-surface-glass text-muted-bright",
    line: "bg-slate-400/70",
  },
};

export const categoryVisuals = [
  {
    key: "veterinaria",
    label: "Veterinaria",
    icon: "✚",
    tone: "emerald",
    defaultBadges: ["Agenda", "Urgencias", "WhatsApp"],
    terms: ["veterinaria", "vet", "mascota", "urgencia"],
  },
  {
    key: "barberia",
    label: "Barbería",
    icon: "✂",
    tone: "violet",
    defaultBadges: ["Reservas", "Servicios", "Mobile"],
    terms: ["barber", "barbería", "barberia", "estética", "estetica"],
  },
  {
    key: "gastronomia",
    label: "Gastronomía",
    icon: "◆",
    tone: "amber",
    defaultBadges: ["Carta", "Reserva", "Pedido"],
    terms: [
      "restaurante",
      "gastronomía",
      "gastronomia",
      "carta",
      "parrilla",
      "cafetería",
      "cafeteria",
    ],
  },
  {
    key: "sistema",
    label: "Sistema / panel",
    icon: "▦",
    tone: "cyan",
    defaultBadges: ["Dashboard", "Operación", "Datos"],
    terms: [
      "sistema",
      "panel",
      "dashboard",
      "stock",
      "inventario",
      "gestión",
      "gestion",
      "admin",
    ],
  },
  {
    key: "bienestar",
    label: "Bienestar",
    icon: "✦",
    tone: "rose",
    defaultBadges: ["Confianza", "Servicios", "Consultas"],
    terms: ["bienestar", "tarot", "servicios personales", "consultas"],
  },
  {
    key: "corporativo",
    label: "Corporativo",
    icon: "▰",
    tone: "neutral",
    defaultBadges: ["Empresa", "Servicios", "Contacto"],
    terms: [
      "corporativa",
      "corporativo",
      "logística",
      "logistica",
      "empresa",
      "transporte",
    ],
  },
  {
    key: "landing",
    label: "Landing comercial",
    icon: "↗",
    tone: "cyan",
    defaultBadges: ["CTA", "SEO", "WhatsApp"],
    terms: [
      "landing",
      "web",
      "demo comercial",
      "consulta",
      "conversión",
      "conversion",
    ],
  },
] as const;

function normalizeText(value?: string) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function getProjectInitials(title = "MD") {
  return (
    title
      .split(/[\s–-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase())
      .join("") || "MD"
  );
}

export function getVisualTone(tone?: string): ProjectVisualTone {
  return VISUAL_TONES.includes(tone as ProjectVisualTone)
    ? (tone as ProjectVisualTone)
    : "cyan";
}

export function getProjectCategory(input: ProjectVisualInput) {
  const explicitCategory = normalizeText(input.category);

  if (explicitCategory) {
    const exactMatch = categoryVisuals.find(
      (category) =>
        normalizeText(category.key) === explicitCategory ||
        normalizeText(category.label) === explicitCategory,
    );

    if (exactMatch) return exactMatch;
  }

  const haystack = [
    input.category,
    input.businessType,
    input.sector,
    input.tipo,
    input.resumen,
    ...(input.features ?? []),
    ...(input.stack ?? []),
  ]
    .map(normalizeText)
    .join(" ");

  return (
    categoryVisuals.find((category) =>
      category.terms.some((term) => haystack.includes(normalizeText(term))),
    ) ?? categoryVisuals[categoryVisuals.length - 1]
  );
}

export function getProjectVisual(input: ProjectVisualInput) {
  const category = getProjectCategory(input);
  const tone = getVisualTone(input.visualTone ?? category.tone);
  const explicitBadges = Array.isArray(input.badges) ? input.badges : [];
  const badges = [
    ...explicitBadges,
    ...(input.features ?? []),
    ...category.defaultBadges,
    ...(input.stack ?? []),
  ]
    .filter(Boolean)
    .filter((item, index, array) => array.indexOf(item) === index)
    .slice(0, 4);

  return {
    category,
    tone,
    styles: toneStyles[tone],
    badges,
    initials: getProjectInitials(input.title),
  };
}
