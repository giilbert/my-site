import "../globals.css";
import "@fontsource/inter";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { Ashes } from "@/components/ashes";
import { useEffect, useRef } from "react";
import { PreviousPath } from "@/components/previous-path";

export const BASE_REGEX = /^\/([^/]+)(\/|$)/;

export default function App({ Component, pageProps, router }: AppProps) {
  const previousPath = useRef<{
    previousPath: string;
  }>();

  useEffect(() => {
    const changePreviousPath = () => {
      previousPath.current = {
        previousPath: router.pathname,
      };
    };

    router.events.on("beforeHistoryChange", changePreviousPath);

    return () => {
      console.log("app unmount");
      router.events.off("beforeHistoryChange", changePreviousPath);
    };
  }, [router]);

  return (
    <>
      <Ashes />

      <PreviousPath.Provider value={previousPath.current || null}>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </PreviousPath.Provider>
    </>
  );
}
