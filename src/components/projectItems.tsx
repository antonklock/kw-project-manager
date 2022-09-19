import { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";
import { v4 as uuidv4 } from "uuid";
import React from "react";

type Project = {
  name: string;
  client: string;
  path: string;
  starred: boolean;
  id: string;
};

type ProjectItemsProps = {
  projectItems: Project[];
  setProjectItems: React.Dispatch<React.SetStateAction<Project[]>>;
  handleDeleteProject: (projectToDelete: string) => void;
};

const ProjectItems = (props: ProjectItemsProps) => {
  const { projectItems, setProjectItems, handleDeleteProject } = props;

  useEffect(() => {
    if (projectItems.length === 0) {
      const newProjectList = [];
      for (let i = 0; i < 5; i++) {
        const newProject = {
          id: uuidv4(),
          name: "Project #" + i,
          client: "Client #" + i,
          path: "/Users/antonklock/Desktop",
          starred: false,
        };
        newProjectList.push(newProject);
      }
      setProjectItems(newProjectList);
    }
  }, []);

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
