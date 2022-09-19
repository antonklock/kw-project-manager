import React from "react";
import { Button } from "@mui/joy";

const AddExistingProject = () => {
  const handleAddExistingProject = () => {
    // console.log("Add existing project");
    // window.testAPI.alertHelloWorld(" 1337!");
    window.electronAPI.alertHelloWorld(" 1337!");
  };
  return (
    <>
      <Button
        className="button"
        variant="outlined"
        onClick={handleAddExistingProject}
      >
        Add Project
      </Button>
    </>
  );
};

export default AddExistingProject;
