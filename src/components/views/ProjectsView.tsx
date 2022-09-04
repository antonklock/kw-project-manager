import React from "react";
import { Button, TextField, Typography, Sheet } from "@mui/joy";
import ProjectItems from "../ProjectItems";
import "../../scss/components/views/projectViews.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ProjectsView = () => {
  return (
    <>
      <div className="topWrapper">
        <div className="topRow">
          <Typography level="h4" fontWeight="400">
            Projects
          </Typography>
          <div>
            <Button className="button" variant="outlined">
              Add Project
            </Button>
            <Button className="button">New Project</Button>
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
          <p>Path</p>
          <p>Settings</p>
        </Sheet>
      </div>
      <div className="projectItems">
        <ProjectItems />
      </div>
    </>
  );
};

export default ProjectsView;
