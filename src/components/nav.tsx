import { HStack, Link, Text } from "@chakra-ui/react";
import { useGsapTween } from "hooks/useGsapTween";
import { useIsUserAgentMobile } from "hooks/useIsUserAgentMobile";
import NextLink from "next/link";

export const Nav: React.FC = () => {
  const ref = useGsapTween<HTMLDivElement>((_) => ({
    from: {
      y: 30,
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
      delay: 2.4,
    },
  }));

  return (
    <HStack
      bg="whiteAlpha.50"
      px="4"
      py="2"
      mb="12"
      gap="6"
      width="100%"
      opacity="0"
      ref={ref}
    >
      <NextLink href="/">
        <Link>Home</Link>
      </NextLink>

      <NextLink href="/projects">
        <Link>Projects</Link>
      </NextLink>

      <NextLink href="/blog">
        <Link>Blog</Link>
      </NextLink>

      <Link
        onClick={() =>
          window.scrollTo({
            behavior: "smooth",
            top: document
              .getElementById("get-in-touch")
              ?.getBoundingClientRect().y,
          })
        }
      >
        Links
      </Link>
    </HStack>
  );
};
