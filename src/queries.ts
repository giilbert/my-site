import { GraphQLClient } from "graphql-request";

const HYGRAPH_ENDPOINT =
  "https://api-us-east-1.hygraph.com/v2/ckygda5ep1bzt01xg791dbsmo/master";
export const client = new GraphQLClient(HYGRAPH_ENDPOINT);

export interface HomePageQuery {
  homePage: {
    heroTitle: string;
    heroDescription: string;
  };
}
