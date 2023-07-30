import { BlogPostCard } from "@/components/blog-post-card";
import { getAllPosts } from "@/lib/blog";

export default async function BlogPage() {
  const allPosts = await getAllPosts();

  return (
    <>
      <h1 className="text-3xl font-medium mb-4">Welcome to the Blog!</h1>

      <div className="flex gap-2 flex-col">
        {allPosts.map((post) => (
          <BlogPostCard meta={post.meta} key={post.meta.slug} />
        ))}
      </div>
    </>
  );
}
