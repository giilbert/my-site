import { Box, Heading, Text } from "@chakra-ui/react";
import { IHero } from "queries";
import { Pause, WindupChildren } from "windups";
import { WindupOnView } from "./windup-on-view";

export const Hero: React.FC<{ hero: IHero }> = ({ hero }) => {
  const { title, description } = hero;

  return (
    <Box h="100vh">
      <WindupOnView height="100px">
        <Heading>{title}</Heading>
        <Pause ms={800} />
        <Text mt="2rem">{description}</Text>
      </WindupOnView>
    </Box>
  );
};
