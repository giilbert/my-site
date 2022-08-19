import { Box, Center } from "@chakra-ui/react";
import { Footer } from "@components/footer";
import { Hero } from "@components/hero";
import { Nav } from "@components/nav";
import { Projects } from "@components/projects";
import { ScrollDown } from "@components/scroll-down";
import { gql } from "graphql-request";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { client, IHomePageQuery } from "queries";

const Home: NextPage<PageQuery> = ({ hero, projects, footer }) => {
  return (
    <Center>
      <Box w="700px" my="2" mx="8">
        <Nav />
        <Hero hero={hero} />
        <Projects projects={projects} />
        <Footer footer={footer} />
        <ScrollDown />
      </Box>
    </Center>
  );
};

type PageQuery = InferGetStaticPropsType<typeof getStaticProps>;
export const getStaticProps: GetStaticProps<
  IHomePageQuery["homePage"]
> = async () => {
  const data = await client.request<IHomePageQuery>(gql`
    query HomePageQuery {
      homePage(where: { id: "cl6mu7k6321qp0ditbczcwpp1" }) {
        hero {
          title
          description
        }
        projects {
          id
          name
          link
          description
          image {
            url
            alt
          }
        }
        footer {
          email
          socialLinks {
            name
            link
            image {
              url
              alt
            }
          }
        }
      }
    }
  `);

  return {
    props: data.homePage,
  };
};

export default Home;
