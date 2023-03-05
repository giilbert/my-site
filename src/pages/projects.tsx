import { Layout } from "@/components/layout";
import { ProjectCard } from "@/components/project-card";
import { NextPage } from "next";

const ProjectsPage: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Stuff I Made</h1>

      <div className="grid-cols-1 grid sm:grid-cols-2 gap-2">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </Layout>
  );
};

export default ProjectsPage;
