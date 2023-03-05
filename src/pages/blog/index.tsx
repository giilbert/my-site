import { Layout } from "@/components/layout";
import { NextPage } from "next";
import Link from "next/link";

const BlogPage: NextPage = () => {
  return (
    <Layout>
      <p className="font-mono text-6xl m-8">TODO: /blog</p>

      <Link href="/blog/asd">asd</Link>
    </Layout>
  );
};

export default BlogPage;
