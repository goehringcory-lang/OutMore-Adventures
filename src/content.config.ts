import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.enum(['Geology', 'Ecology', 'History', 'Culture', 'Wildlife', 'Seasonal']),
    date: z.date(),
    image: z.string().optional(),
    author: z.string().default('OutMore Adventures'),
  }),
});

export const collections = { journal };
