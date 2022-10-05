import AddNewProject from "../AddNewProject";
import React, { useEffect, useState } from "react";
import AddExistingProject from "../AddExistingProject";
import { getProjects, deleteProject, addProject } from "../../data/projects";
import { Project } from "../../../types/types";
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
      <div className="flex flex-row justify-between p-5">
        <div className="prose">
          <h1>Projects</h1>
          <DropDown menuItems={dropDownMenuItems} />
        </div>
        <div>
          <div className="mb-4">
            <AddExistingProject />
            <AddNewProject
              projectItems={projectItems}
              setProjectItems={setProjectItems}
              handleAddNewProject={handleAddNewProject}
            />
          </div>

          <div className="">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around bg-base-300 rounded-md mx-5 border-b border-info border-opacity-25">
        <button className="btn btn-ghost rounded-none">Star</button>
        <button className="btn btn-ghost rounded-none">Name</button>
        <button className="btn btn-ghost rounded-none">Client</button>
        <button className="btn btn-ghost rounded-none">Path</button>
        <button className="btn btn-ghost rounded-none">Settings</button>
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
