import { Ashes } from "@/components/ashes";
import { Links } from "@/components/links";
import clsx from "clsx";
import { NextPage } from "next";
import { useWindupString } from "windups";

const IndexPage: NextPage = () => {
  const [hi, hiControl] = useWindupString("Hello, I'm Gilbert.");

  return (
    <>
      <Ashes />
      <div className="flex justify-center mx-4 items-center h-screen">
        <main className="text-center w-[52rem] flex justify-center flex-col">
          <div className="flex justify-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 whitespace-pre">
              {hi}
            </h1>

            <div
              className={clsx(
                "ml-2 bg-neutral-600 w-3 md:w-4 h-[2.5rem] sm:h-[3.75rem] md:h-[4.5rem]",
                hiControl.isFinished && "animate-blink"
              )}
            />
          </div>

          <hr className="border-neutral-700 my-8 mx-[10%] sm:mx-8" />

          <p className="text-lg md:text-xl text-gray-400 italic">
            iter aeternum glacies crepito
          </p>

          <Links />
        </main>
      </div>
    </>
  );
};

export default IndexPage;
