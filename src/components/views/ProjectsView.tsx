import AddNewProject from "../AddNewProject";
import React, { useEffect, useState } from "react";
import AddExistingProject from "../AddExistingProject";
import { getProjects, deleteProject, addProject } from "../../data/projects";
import { Project } from "../../types";
import DropDown from "../DropDown";
import ProjectItems from "../ProjectItems";

const ProjectsView = () => {
  const [projectItems, setProjectItems] = useState<Project[]>([]);
  const [dropDownMenuItems, setDropDownMenuItems] = useState([
    {
      name: "Home Computer",
      onClick: () => console.log("Home Computer"),
    },
    {
      name: "Work Computer",
      onClick: () => console.log("Work Computer"),
    },
    {
      name: "Laptop",
      onClick: () => console.log("Laptop"),
    },
    {
      name: "+ Add New",
      onClick: () => console.log("+Add New"),
    },
  ]);

  const handleAddNewProject = (newProject: Project) => {
    addProject(newProject);
    const newProjectList = getProjects();
    setProjectItems([...newProjectList]);
  };

  const handleDeleteProject = (projectToDelete: string) => {
    deleteProject(projectToDelete);
    const newProjectList = getProjects();
    setProjectItems([...newProjectList]);
  };

  //LOAD INITIAL PROJECTS
  useEffect(() => {
    const newProjectList = getProjects();
    setProjectItems([...newProjectList]);
  }, []);

  return (
    <>
      <div className="">
        <div className="flex flex-row justify-between">
          <h1 className="text-xl">Projects</h1>
          <DropDown menuItems={dropDownMenuItems} />
          <div className="">
            <AddExistingProject />
            <AddNewProject
              projectItems={projectItems}
              setProjectItems={setProjectItems}
              handleAddNewProject={handleAddNewProject}
            />
            <div className="">
              <input placeholder="Search" />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-around">
          <button className="btn grow">Star</button>
          <button className="btn grow">Name</button>
          <button className="btn grow">Client</button>
          <button className="btn grow">Path</button>
          <button className="btn grow">Settings</button>
        </div>
      </div>
      <div className="projectItems">
        <ProjectItems
          projectItems={projectItems}
          handleDeleteProject={handleDeleteProject}
        />
      </div>
    </>
  );
};

export default ProjectsView;
