import { BlogPostCard } from "@/components/blog-post-card";
import { getAllPosts } from "@/lib/blog";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <p className="mt-2 text-lg leading-7">
        Hi, I&apos;m Gilbert, a high school student and self-taught software
        developer. I&apos;m interested in system design, web development, and
        machine learning. I love exploring new technologies and building random
        doodads in my free time.
      </p>

      <hr className="my-6" />

      <section className="mb-4">
        <div className="flex flex-col md:flex-row justify-between gap-1">
          <div>
            <h2 className="text-xl font-medium">Projects</h2>
            <p className="text-muted-foreground">
              Some of the things I&apos;ve worked on
            </p>
          </div>

          <Link
            href="/projects"
            className="sm:ml-auto text-muted-foreground hover:text-foreground transition-colors underline"
          >
            <ChevronRightIcon
              className="inline-block sm:hidden mr-1"
              size={18}
            />
            View all
          </Link>
        </div>

        <div className="flex gap-2 mt-4 flex-col">
          <Link href="/projects/a" className="w-full">
            <div className="py-3 px-4 border rounded-md w-full hover:bg-slate-800/10 transition-colors">
              <div>
                <h3 className="text-lg font-medium">Project A</h3>
                <p className="text-muted-foreground">
                  Next.js, x86 Assembly, COBOL, Microsoft Excel
                </p>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </Link>

          <Link href="/projects/b" className="w-full">
            <div className="py-3 px-4 border rounded-md w-full hover:bg-slate-800/10 transition-colors">
              <div>
                <h3 className="text-lg font-medium">Project B</h3>
                <p className="text-muted-foreground">
                  Binary, Python, Google Slides, Brainfuck
                </p>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </Link>

          <Link href="/projects/c" className="w-full">
            <div className="py-3 px-4 border rounded-md w-full hover:bg-slate-800/10 transition-colors">
              <div>
                <h3 className="text-lg font-medium">Project C</h3>
                <p className="text-muted-foreground">
                  Technology 1, Technology 2, Technology 3
                </p>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </Link>
        </div>
      </section>

      <hr className="my-6" />

      <section className="mb-4">
        <div className="flex flex-col md:flex-row justify-between gap-1">
          <div>
            <h2 className="text-xl font-medium">Blog</h2>
            <p className="text-muted-foreground">Stuff on my mind</p>
          </div>

          <Link
            href="/blog"
            className="sm:ml-auto text-muted-foreground hover:text-foreground transition-colors underline"
          >
            <ChevronRightIcon
              className="inline-block sm:hidden mr-1"
              size={18}
            />
            View all
          </Link>
        </div>

        <div className="flex gap-2 mt-4 flex-col">
          {posts.slice(0, 3).map((post) => (
            <BlogPostCard meta={post.meta} key={post.meta.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
