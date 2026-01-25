import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    hasDetail: z.boolean().default(false), // Para saber si enlazarlo o no
  }),
});

export const collections = { projects };