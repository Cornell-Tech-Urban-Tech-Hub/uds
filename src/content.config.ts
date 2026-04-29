import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      members: z.array(z.string()).min(1),
      image: image(),
      url: z.string().url(),
      description: z.string().optional(),
      year: z.number(),
      topics: z.array(z.string()).min(1),
      order: z.number().optional(),
    }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string().optional(),
    mentors: z
      .array(
        z.object({
          name: z.string(),
          bio: z.string(),
        }),
      )
      .optional(),
    order: z.number().optional(),
  }),
});

const bidspec = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bidspec' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      bidName: z.string().optional(),
      borough: z.string().optional(),
      image: image(),
      url: z.string().url(),
      description: z.string().optional(),
      year: z.number(),
      topics: z.array(z.string()).min(1),
      order: z.number().optional(),
    }),
});

export const collections = { projects, team, bidspec };
