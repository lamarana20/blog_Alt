
import { defineCollection, z } from 'astro:content';

const postCollection = defineCollection({
  schema: z.object({
    author: z.string(),
    date: z.string(),
    title: z.string(),
    image: z.string(), // ✅ tu as bien utilisé une string pour /firts1.avif
  })
});

export const collections = {
  posts: postCollection,
};
