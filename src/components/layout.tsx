import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Ashes } from "./ashes";
import { Links } from "./links";

export const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      {router.pathname === "/" && <Ashes />}

      {router.pathname !== "/" && (
        <div className="rounded px-4 py-2 fixed left-1/2 top-4 -translate-x-1/2 bg-neutral-900 z-40">
          <Links />
        </div>
      )}

      <div className="flex justify-center pt-20">
        <motion.main
          className="w-[48rem] mx-4 mt-2 mb-16"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.main>
      </div>
    </>
  );
};
