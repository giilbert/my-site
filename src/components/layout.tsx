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
        <div className="w-96 rounded px-2 py-1 fixed left-1/2 top-4 -translate-x-1/2">
          <Links />
        </div>
      )}

      <div className="flex justify-center pt-16">
        <motion.main
          className="w-[48rem]"
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
