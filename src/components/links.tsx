import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "About",
    to: "/about",
  },
  {
    text: "Projects",
    to: "/projects",
  },
  {
    text: "Blog",
    to: "/blog",
  },
] as const;

export const Links: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex gap-8 w-full justify-center text-lg">
      {links.map((link, i) => (
        <Link
          key={i}
          href={link.to}
          className={clsx(
            "text-lg md:text-xl text-blue-400 transition-all",
            router.pathname === link.to ? "underline" : "hover:underline"
          )}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
};
