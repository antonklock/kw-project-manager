import React from "react";
import ProjectItem from "./ProjectItem";
import { Project } from "../../types/types";

type ProjectItemsProps = {
  projectItems: Project[];
  handleDeleteProject: (projectToDelete: string) => void;
};

const ProjectItems = (props: ProjectItemsProps) => {
  const { projectItems, handleDeleteProject } = props;

  return (
    <>
      {projectItems.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          handleDeleteProject={handleDeleteProject}
          path={project.path}
          name={project.name}
          client={project.client}
          starred={project.starred}
        />
      ))}
    </>
  );
};

export default ProjectItems;
