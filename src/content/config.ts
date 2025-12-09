import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    // Hero image for the post (optional)
    heroImage: z.string().optional(),
    // Featured/pinned posts
    featured: z.boolean().default(false),
  }),
});

export const collections = { posts };
