import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { withMountOnFirstView } from "@utils/withMountOnFirstView";
import { gql } from "graphql-request";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { client, HomePageQuery } from "queries";
import { Pause, WindupChildren } from "windups";

const Windup = withMountOnFirstView(WindupChildren);

const Home: NextPage<PageQuery> = ({ heroTitle, heroDescription }) => {
  return (
    <Center>
      <Box w="700px" m="4rem">
        <Windup>
          <Heading>{heroTitle}</Heading>
          <Pause ms={800} />
          <Text mt="2rem">{heroDescription}</Text>
        </Windup>
        <span>asd</span>
      </Box>
    </Center>
  );
};

type PageQuery = InferGetStaticPropsType<typeof getStaticProps>;
export const getStaticProps: GetStaticProps<
  HomePageQuery["homePage"]
> = async () => {
  const data = await client.request<HomePageQuery>(gql`
    query HomePageQuery {
      homePage(where: { id: "cl6mu7k6321qp0ditbczcwpp1" }) {
        heroTitle
        heroDescription
      }
    }
  `);

  return {
    props: data.homePage,
  };
};

export default Home;
