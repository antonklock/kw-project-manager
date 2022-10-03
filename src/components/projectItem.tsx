import React, { useState } from "react";
import DropDown from "./DropDown";

type ProjectItemProps = {
  handleDeleteProject: (keyToDelete: string) => void;
  id: string;
  path: string;
  name: string;
  client: string;
  starred: boolean;
};

const ProjectItem = (props: ProjectItemProps) => {
  const { handleDeleteProject, id, path, starred, name, client } = props;
  const [isStarred, setStarred] = useState(starred);

  const handlePathClick = () => {
    console.log("Path clicked");
  };
  return (
    <>
      <div className="flex flex-row justify-around items-center my-2 mx-5 rounded-md bg-base-200">
        <div className="basis-1/10">
          <button onClick={() => setStarred(!isStarred)}>
            {isStarred ? <p>Starred</p> : <p>Not starred</p>}
          </button>
        </div>

        <div className="basis-1/3">
          <h3>{name}</h3>
          <h4> {id} </h4>
        </div>

        <div className="basis-1/3">
          <h3>{client}</h3>
        </div>

        <div className="basis-1/3">
          <p onClick={handlePathClick}>{path}</p>
        </div>

        <div className="basis-1/10">
          <DropDown
            buttonText="..."
            menuItems={[
              { name: "Edit", onClick: () => console.log("Edit") },
              { name: "Delete", onClick: () => handleDeleteProject(id) },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
