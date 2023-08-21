import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    date: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    images: z.array(z.string()),
  }),
});

export const collections = { blog, projects };
