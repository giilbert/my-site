import { Layout } from "@/components/layout";
import { ProjectCard } from "@/components/project-card";
import { motion } from "framer-motion";
import { NextPage } from "next";

const ProjectsPage: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Stuff I Made</h1>

      <motion.div
        className="grid-cols-1 grid sm:grid-cols-2 gap-2"
        variants={{
          hidden: {
            opacity: 0,
          },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </motion.div>
    </Layout>
  );
};

export default ProjectsPage;
