import { Box, BoxProps, HStack, Image, Link, Text } from "@chakra-ui/react";
import { motion, useAnimation, Variants } from "framer-motion";
import { IFooter } from "queries";
import { Pause } from "windups";
import { WindupOnView } from "./windup-on-view";

const socialLinkVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  shown: {
    opacity: 1,
    y: 0,
  },
};

const MBox = motion<BoxProps>(Box);

export const Footer: React.FC<{ footer: IFooter }> = ({ footer }) => {
  const animation = useAnimation();

  return (
    <>
      {/* this is here to make the scrollTo work, everything else wont be rendered initially */}
      <Box id="get-in-touch" />
      <WindupOnView
        height="60vh"
        onFinished={() => {
          animation.start("shown");
        }}
      >
        <Text color="green.300">Get in touch!</Text>
        <Link
          href={`mailto:${footer.email}`}
          textDecoration="underline"
          fontSize={["1.5rem", "2rem", "3rem"]}
        >
          {footer.email}
        </Link>
        <Pause ms={200} />
        <HStack mt="4" gap="2">
          {footer.socialLinks.map((link) => (
            <MBox
              key={link.link}
              variants={socialLinkVariants}
              initial="hidden"
              animate="shown"
            >
              <Link href={link.link} isExternal>
                <Image
                  src={link.image.url}
                  alt={link.image.alt}
                  width="8"
                  height="8"
                />
              </Link>

              <Pause ms={200} />
            </MBox>
          ))}
        </HStack>
      </WindupOnView>
    </>
  );
};
