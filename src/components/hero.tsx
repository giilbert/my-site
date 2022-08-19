import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import { useGsapTween } from "hooks/useGsapTween";
import { useIsUserAgentMobile } from "hooks/useIsUserAgentMobile";
import { IHero } from "queries";
import { Pause } from "windups";
import { WindupOnView } from "./windup-on-view";

export const Hero: React.FC<{ hero: IHero }> = ({ hero }) => {
  const isMobile = useIsUserAgentMobile();
  const ref = useGsapTween<HTMLDivElement>((el) => ({
    to: {
      y: 300,
      scrollTrigger: {
        trigger: el,
        start: 0,
        // make less jittery on mobile
        scrub: isMobile ? 1 : true,
      },
    },
  }));
  const { title, description } = hero;

  return (
    <Box h="100vh" ref={ref} mt="4" mb="64">
      <WindupOnView height="100px">
        <Heading>{title}</Heading>
        <Pause ms={800} />
        <Text mt="2rem">{description}</Text>
      </WindupOnView>

      <HStack justifyContent="right">
        <Text
          lineHeight="1.1"
          fontSize={["2xl", "4xl"]}
          mt="24"
          color="#bbb"
          w="min-content"
        >
          \&nbsp;&nbsp;&nbsp;^__^
          <br />
          &nbsp;\&nbsp; (oo)\_______
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;(__)\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)\/\
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||----w |<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||
          <br />
        </Text>
      </HStack>
    </Box>
  );
};
