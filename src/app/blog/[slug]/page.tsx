import { getAllPosts, getPost } from "@/lib/blog";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { Component } = await getPost(params.slug);

  return <Component />;
}

export async function generateStaticParams() {
  const allPosts = await getAllPosts();
  return allPosts.map((p) => ({
    slug: p.meta.slug,
  }));
}
