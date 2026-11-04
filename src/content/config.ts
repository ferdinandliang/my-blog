import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

const commons = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.string(),
    sourceType: z.string().default("播客精读"),
    sourceName: z.string(),
    author: z.string().optional(),
    audioUrl: z.string().optional(),
    duration: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, commons };
