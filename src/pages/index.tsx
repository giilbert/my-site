import { Layout } from "@/components/layout";
import { Links } from "@/components/links";
import clsx from "clsx";
import { NextPage } from "next";
import { useWindupString } from "windups";
import { motion, useAnimationControls } from "framer-motion";
import { useCallback } from "react";

const IndexPage: NextPage = () => {
  const controls = useAnimationControls();
  const onFinished = useCallback(() => {
    controls.start({
      opacity: 1,
      y: 0,
    });
  }, [controls]);

  const [hi, hiControl] = useWindupString("Hello, I'm Gilbert.", {
    onFinished,
  });

  return (
    <Layout>
      <div className="flex justify-center px-4 items-center h-screen w-screen fixed top-0 left-0">
        <main className="text-center w-[52rem] flex justify-center flex-col">
          <div className="flex justify-center h-16 sm:h-24">
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 whitespace-pre"
              exit={{
                y: 30,
              }}
            >
              {hi}
            </motion.h1>

            <div
              className={clsx(
                "ml-2 bg-neutral-600 w-3 md:w-4 h-[2.5rem] sm:h-[3.75rem] md:h-[4.5rem]",
                hiControl.isFinished && "animate-blink"
              )}
            />
          </div>

          <motion.div
            animate={controls}
            exit={{
              y: 50,
            }}
            initial={{
              opacity: 0,
              y: 50,
            }}
          >
            <hr className="border-neutral-700 mt-2 mb-8 mx-8" />

            <p className="text-lg md:text-xl text-gray-400 italic mb-6">
              iter aeternum glacies crepito
            </p>

            <Links />
          </motion.div>
        </main>
      </div>
    </Layout>
  );
};

export default IndexPage;
