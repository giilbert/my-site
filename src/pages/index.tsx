import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { Cowsay } from "@components/cowsay";
import { withMountOnFirstView } from "@utils/withMountOnFirstView";
import type { NextPage } from "next";
import { Pause, WindupChildren } from "windups";

const Windup = withMountOnFirstView(WindupChildren);

const Home: NextPage = () => {
  return (
    <Center>
      <Box w="700px" m="2rem">
        <Windup>
          <Heading>Hello, I&apos;m Gilbert</Heading>
          <Pause ms={800} />
          <Text mt="2rem">
            This site is just a placeholder until I set up a CMS and a bunch of
            other things <Pause ms={200} /> :<Pause ms={200} />)
          </Text>

          <Pause ms={500} />

          <Cowsay />
        </Windup>
      </Box>
    </Center>
  );
};

export default Home;
