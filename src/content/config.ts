import { defineCollection, z } from "astro:content";

const proyectos = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    sector: z.string(),
    rol: z.string(),
    stack: z.array(z.string()),
    fecha: z.string(), // "YYYY-MM"
    resumen: z.string(),
    problema: z.string(),
    solucion: z.string(),
    resultado: z.string().optional(),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    cover: z.string().optional(),
    thumbnail: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    businessType: z.string().optional(),
    resultLabel: z.string().optional(),
    highlight: z.string().optional(),
    capacidad: z.string().optional(),
    visualTone: z
      .enum(["cyan", "violet", "emerald", "amber", "rose", "neutral"])
      .optional(),
    badges: z.array(z.string()).optional(),
    caseUrl: z.string().optional(),
    tipo: z.string().optional(),
    idealPara: z.string().optional(),
    features: z.array(z.string()).optional(),
    impacto: z.string().optional(),
    status: z.enum(["real", "demo", "concepto"]).optional(),
    featured: z.boolean().optional(),
    priority: z.number().optional(),
    ctaLabel: z.string().optional(),
  }),
});

export const collections = { proyectos };
