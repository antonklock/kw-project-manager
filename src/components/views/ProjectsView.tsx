import AddNewProject from "../AddNewProject";
import ProjectItems from "../ProjectItems";
import "../../scss/components/views/projectViews.scss";
import React, { useEffect, useState } from "react";
import AddExistingProject from "../AddExistingProject";
import { getProjects, deleteProject, addProject } from "../../data/projects";
import { Project } from "../../types";
import DropDown from "../DropDown";

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
      <div className="topWrapper">
        <div className="topRow">
          <h1>Projects</h1>
          <DropDown menuItems={dropDownMenuItems} />
          <div>
            <AddExistingProject />
            <AddNewProject
              projectItems={projectItems}
              setProjectItems={setProjectItems}
              handleAddNewProject={handleAddNewProject}
            />
          </div>
        </div>
        <div className="textField">
          <input placeholder="Search" />
        </div>
        <div className="filterBar">
          <button>Star</button>
          <button>Name</button>
          <button>Client</button>
          <button>Path</button>
          <button>Settings</button>
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
