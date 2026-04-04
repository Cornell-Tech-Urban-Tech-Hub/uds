import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    members: z.array(z.string()).min(1),
    image: z.string(),
    url: z.string().url(),
    description: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { projects };
