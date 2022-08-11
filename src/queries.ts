import { GraphQLClient } from "graphql-request";

const HYGRAPH_ENDPOINT =
  "https://api-us-east-1.hygraph.com/v2/ckygda5ep1bzt01xg791dbsmo/master";
export const client = new GraphQLClient(HYGRAPH_ENDPOINT);

export interface IImage {
  url: string;
  alt: string;
}

export interface IHero {
  title: string;
  description: string;
}

export interface ISocialLink {
  name: string;
  link: string;
  image: IImage;
}

export interface IFooter {
  email: string;
  socialLinks: ISocialLink[];
}

export interface IProject {
  id: string;
  name: string;
  link: string;
  description: string;
  image: IImage;
}

export interface IHomePageQuery {
  homePage: {
    hero: IHero;
    projects: IProject[];
    footer: IFooter;
  };
}
