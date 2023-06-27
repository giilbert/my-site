import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <p className="mt-2 text-lg leading-7">
        Hi, I&apos;m Gilbert, a high school student and self-taught software
        developer. I&apos;m interested in system design, web development, and
        machine learning. I love exploring new technologies and building random
        doodads in my free time.
      </p>

      <hr className="my-6" />

      <section>
        <div className="flex flex-wrap justify-between gap-2">
          <div>
            <h2 className="text-xl font-medium">Projects</h2>
            <p className="text-muted-foreground">
              Some of the things I&apos;ve worked on
            </p>
          </div>

          <Link
            href="/projects"
            className="md:ml-auto text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronRightIcon className="inline-block sm:hidden" size={18} />
            View all projects
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
        </div>
      </section>
    </>
  );
}
