import {
  Button,
  TextField,
  Typography,
  Sheet,
  MenuItem,
  ListDivider,
} from "@mui/joy";
import AddNewProject from "../AddNewProject";
import ProjectItems from "../ProjectItems";
import "../../scss/components/views/projectViews.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useEffect, useState } from "react";
import AddExistingProject from "../AddExistingProject";
import { getProjects, deleteProject, addProject } from "../../data/projects";
import { Project } from "../../types";
import DropDown from "../DropDown";
import { v4 as uuidv4 } from "uuid";

const ProjectsView = () => {
  const [projectItems, setProjectItems] = useState<Project[]>([]);
  const [dropDownButtonText, setDropDownButtonText] = useState("Home Computer");
  const [dropDownMenuItems, setDropDownMenuItems] = useState([
    {
      reactElement: <MenuItem key={uuidv4()}>Home Computer</MenuItem>,
      onClick: () => handleMenuItemClick("Home Computer"),
    },
    {
      reactElement: <MenuItem key={uuidv4()}>Work Computer</MenuItem>,
      onClick: () => handleMenuItemClick("Work Computer"),
    },
    {
      reactElement: <MenuItem key={uuidv4()}>Laptop</MenuItem>,
      onClick: () => handleMenuItemClick("Laptop"),
    },
    {
      reactElement: <ListDivider key={uuidv4()} />,
    },
    {
      reactElement: (
        <MenuItem key={uuidv4()} variant="soft">
          + Add New
        </MenuItem>
      ),
      onClick: () => handleMenuItemClick("+Add New"),
    },
  ]);

  const handleMenuItemClick = (item: string) => {
    setDropDownButtonText(item);
  };

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
          <Typography level="h4" fontWeight="400">
            Projects
          </Typography>
          <DropDown
            buttonElement={dropDownButtonText}
            menuItems={dropDownMenuItems}
          />
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
          <TextField placeholder="Search" />
        </div>
        <Sheet className="filterBar" variant="soft">
          <Button
            variant="plain"
            sx={{
              background: "none",
            }}
          >
            <KeyboardArrowDownIcon /> Star
          </Button>
          <p>Name</p>
          <p>Client</p>
          <p>Path</p>
          <p>Settings</p>
        </Sheet>
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
