import Link from "next/link";

const links = [
  {
    text: "About Me",
    to: "/about",
  },
  {
    text: "Socials",
    to: "/socials",
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
  return (
    <div className="flex gap-8 mt-8 w-full justify-center flex-wrap text-lg">
      {links.map((link, i) => (
        <Link
          key={i}
          href={link.to}
          className="text-blue-400 transform hover:scale-105 hover:underline transition-all cursor-pointer"
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
};
