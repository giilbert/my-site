import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { useGsapTween } from "hooks/useGsapTween";
import { IProject } from "queries";

export const ProjectCard: React.FC<{
  project: IProject;
}> = ({ project }) => {
  const { name, description, image } = project;
  const ref = useGsapTween<HTMLDivElement>((el) => ({
    from: {
      y: 70,
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,

      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        scrub: 1,
      },
    },
  }));

  return (
    <Box ref={ref} opacity="0" my="16">
      <Image src={image.url} alt={image.alt} mb="4" w="100%" />

      <Heading>{name}</Heading>
      <Text>{description}</Text>
    </Box>
  );
};
