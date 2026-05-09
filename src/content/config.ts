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
