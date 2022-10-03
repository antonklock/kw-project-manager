import React from "react";

const AddExistingProject = () => {
  const handleAddExistingProject = () => {
    window.electronAPI.pickLocation().then((result) => {
      console.log(result);
    });
  };
  return (
    <>
      <button onClick={handleAddExistingProject}>Add Project</button>
    </>
  );
};

export default AddExistingProject;
