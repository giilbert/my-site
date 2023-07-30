import { z } from "zod";
import { readdir } from "fs/promises";

export const blogPostMetaSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()).default([]),
  written: z.string().transform((s) => new Date(s)),
  readTime: z.string(),
});

export interface BlogPostMeta extends z.infer<typeof blogPostMetaSchema> {
  slug: string;
}

export const getPost = async (slug: string) => {
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
    slugs.map((slug) => getPost(slug.replace(".mdx", "")))
  );
  return posts;
};
