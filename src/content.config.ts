import { defineCollection, z } from 'astro:content';

const garden = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
    }).passthrough(),
});

const blog = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.coerce.date().optional(),
        updatedDate: z.coerce.date().optional(),
        heroImage: image().optional(),
    }),
});

export const collections = { blog, garden };
