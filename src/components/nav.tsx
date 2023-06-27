"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const items = [
  {
    name: "Home",
    href: "/",
    matches: (pathname: string) => pathname === "/",
  },
  {
    name: "Projects",
    href: "/projects",
    matches: (pathname: string) => pathname.startsWith("/projects"),
  },
  {
    name: "Blog",
    href: "/blog",
    matches: (pathname: string) => pathname.startsWith("/blog"),
  },
] as const;

export const Nav: React.FC = () => {
  const router = usePathname();

  return (
    <nav className="flex gap-4 text-muted-foreground mt-4 mb-2 items-center">
      {items.map((item) => (
        <Fragment key={item.name}>
          <div className="flex items-center">
            <Link
              href={item.href}
              className={cn(
                "hover:text-foreground transition-colors",
                item.matches(router) && "text-foreground"
              )}
            >
              {item.name}
            </Link>
          </div>
        </Fragment>
      ))}
    </nav>
  );
};
