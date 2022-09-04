import React from "react";
import { Button, TextField, Typography, Sheet } from "@mui/joy";
import ProjectItems from "../ProjectItems";
import "../../scss/components/views/projectViews.scss";

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
          <p>Star</p>
          <p>Name</p>
          <p>Name</p>
          <p>Name</p>
          <p>Name</p>
          <p>Name</p>
        </Sheet>
      </div>
      <ProjectItems />
    </>
  );
};

export default ProjectsView;
