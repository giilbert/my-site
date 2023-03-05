import { BASE_REGEX } from "@/pages/_app";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useContext, useMemo } from "react";
import { Links } from "./links";
import { PreviousPath } from "./previous-path";

const ORDER: Record<string, number> = {
  "": 0,
  about: 1,
  projects: 2,
  blog: 3,
};

const ENTER = {
  left: -100,
  right: 100,
  center: 0,
} as const;

const EXIT = {
  left: 100,
  right: -100,
  center: 0,
} as const;

const calculateExitAndEnter = (previousPath: string, currentPath: string) => {
  const previousUrl = previousPath;
  const nextUrl = currentPath;

  const previous = BASE_REGEX.exec(previousUrl || "-")?.at(1) || "";
  const next = BASE_REGEX.exec(nextUrl)?.at(1) || "";

  const currentNumber = ORDER[previous] || -1;
  const nextNumber = ORDER[next] || -1;

  const direction = (() => {
    if (nextNumber === currentNumber) {
      return "center";
    } else if (nextNumber > currentNumber) {
      return "right";
    }
    return "left";
  })();

  const isFromHome = previousPath === "/";

  if (isFromHome)
    return {
      xEnter: 0,
      xExit: 0,
    };

  const xEnter = ENTER[direction];
  const xExit = EXIT[direction];

  return { xEnter, xExit };
};

export const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const router = useRouter();
  const pathData = useContext(PreviousPath);

  const { xEnter, xExit } = useMemo(
    () => calculateExitAndEnter(pathData?.previousPath || "", router.pathname),
    [router.pathname, pathData?.previousPath]
  );

  return (
    <>
      {router.pathname !== "/" && (
        <div className="rounded px-4 py-2 fixed left-1/2 top-4 -translate-x-1/2 bg-neutral-900 z-40">
          <Links />
        </div>
      )}

      <div className="flex justify-center pt-20">
        <motion.main
          className="w-[50rem] mx-4 mt-2 mb-16"
          initial={
            router.pathname !== "/"
              ? {
                  opacity: 0,
                  x: xEnter,
                }
              : undefined
          }
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: xExit,
          }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.main>
      </div>
    </>
  );
};
