import { Box, Heading } from "@chakra-ui/react";
import { IProject } from "queries";
import { ProjectCard } from "./project-card";
import { WindupOnView } from "./windup-on-view";

export const Projects: React.FC<{ projects: IProject[] }> = ({ projects }) => {
  return (
    <Box mb="60vh">
      <WindupOnView height="100px">
        <Heading mb="4">Featured Projects</Heading>
      </WindupOnView>
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </Box>
  );
};
