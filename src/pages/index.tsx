import { Ashes } from "@/components/ashes";
import { Boot } from "@/components/boot";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <>
      <Ashes />
      <div className="flex justify-center mx-4 items-center h-screen">
        <main className="text-center w-[52rem] flex justify-center flex-col">
          <div className="flex justify-center">
            <h1 className="text-4xl sm:text-7xl md:text-8xl font-extrabold mb-4 whitespace-pre">
              Hello, I&apos;m Gilbert.
            </h1>

            <div className="animate-blink ml-2 bg-neutral-600 w-3 md:w-96 h-[2.5rem] sm:h-[3.75rem] md:h-[6rem]" />
          </div>

          <hr className="border-neutral-700 my-8" />

          <p className="text-xl text-gray-400">
            [Insert some long profound text here]
          </p>

          <div className="flex gap-8 mt-8 w-full justify-center flex-wrap">
            <p className="text-blue-400 text-xl">About Me</p>
            <p className="text-blue-400 text-xl">Socials</p>
            <p className="text-blue-400 text-xl">Projects</p>
            <p className="text-blue-400 text-xl">Blog</p>
          </div>
        </main>
      </div>
    </>
  );
};

export default IndexPage;
