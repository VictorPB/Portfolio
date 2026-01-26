// src/content/config.ts
import { defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content', // Esto indica que procesará Markdown/MDX
});

export const collections = {
  'blog': blog,
};