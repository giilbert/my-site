import {
  Box,
  BoxProps,
  HStack,
  Image,
  Link,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { motion, useAnimation, Variants } from "framer-motion";
import { IFooter } from "queries";
import { Pause } from "windups";
import { WindupOnView } from "./windup-on-view";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  shown: {
    opacity: 1,
  },
};

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
const MHStack = motion<StackProps>(HStack);

export const Footer: React.FC<{ footer: IFooter }> = ({ footer }) => {
  const animation = useAnimation();

  return (
    <>
      <WindupOnView
        height="60vh"
        onFinished={() => {
          animation.start("shown");
        }}
      >
        <Text color="green.300">Contact me!</Text>
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
              <Image
                src={link.image.url}
                alt={link.image.alt}
                width="8"
                height="8"
              />
              <Pause ms={200} />
            </MBox>
          ))}
        </HStack>
      </WindupOnView>
    </>
  );
};
