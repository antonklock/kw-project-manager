import React from "react";
import { Button } from "@mui/joy";

const AddExistingProject = () => {
  const handleAddExistingProject = () => {
    window.electronAPI.pickLocation().then((result) => {
      console.log(result);
    });
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
