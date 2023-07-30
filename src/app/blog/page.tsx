import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default async function BlogPage() {
  const allPosts = await getAllPosts();

  return (
    <>
      <h1 className="text-3xl font-medium mb-4">Welcome to the Blog!</h1>

      <div className="flex gap-2 flex-col">
        {allPosts.map((post) => (
          <Link href={`/blog/${post.meta.slug}`} key={post.meta.slug}>
            <div className="border px-3 py-2">
              <h2 className="text-lg font-medium">{post.meta.title}</h2>
              <p>{post.meta.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
