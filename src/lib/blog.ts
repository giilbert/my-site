import { z } from "zod";
import { readdir } from "fs/promises";

export const blogPostMetaSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()).default([]),
});

export type BlogPostMeta = z.infer<typeof blogPostMetaSchema>;

export const getComponent = async (slug: string) => {
  const exported = await import(`../../content/blog/${slug}.mdx`);
  const meta = blogPostMetaSchema.parse(exported.meta);

  return {
    Component: exported.default as React.ComponentType,
    meta: {
      slug,
      ...meta,
    },
  };
};

export const getAllPosts = async () => {
  const slugs = await readdir("./content/blog");
  const posts = await Promise.all(
    slugs.map((slug) => getComponent(slug.replace(".mdx", "")))
  );
  return posts;
};
