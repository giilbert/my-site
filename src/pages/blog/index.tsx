import { BlogCard } from "@/components/blog-card";
import { Layout } from "@/components/layout";
import { NextPage } from "next";
import Link from "next/link";

const BlogPage: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold">Blog</h1>

      <h3 className="text-xl text-white/80 mt-8">March 2023</h3>
      <hr />

      <div className="flex gap-2 flex-col">
        <BlogCard />
        <BlogCard />
      </div>

      <h3 className="text-xl text-white/80 mt-8">May 2023</h3>
      <hr />

      <div className="flex gap-2 flex-col">
        <BlogCard />
        <BlogCard />
      </div>
    </Layout>
  );
};

export default BlogPage;
