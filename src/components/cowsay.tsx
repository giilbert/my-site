import { Box, Text } from "@chakra-ui/react";
import gsap from "gsap";
import { createRef, useEffect } from "react";

const COWSAY = `
 ____________________________________
/ this site is very cool, would come \\
\\ again                              /
 ------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     |
`;

export const Cowsay: React.FC = () => {
  const containerRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (!containerRef.current) return;

    gsap
      .timeline({ repeat: 999999999999, repeatDelay: 1 })
      .to(containerRef.current, {
        y: "-30",
        duration: 1,
      })
      .to(containerRef.current, {
        y: "0",
        duration: 1,
      });
  }, [containerRef]);

  return (
    <Box ref={containerRef} mt="4rem">
      {COWSAY.split("\n").map((content, i) => (
        <Text
          key={i}
          dangerouslySetInnerHTML={{
            __html: content.replaceAll(" ", "&nbsp;"),
          }}
        />
      ))}
    </Box>
  );
};
