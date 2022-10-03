import React, { useState } from "react";
import "../scss/components/projectItem.scss";
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
      <div className="projectItem">
        <button onClick={() => setStarred(!isStarred)}>
          {isStarred ? <p>Starred</p> : <p>Not starred</p>}
        </button>

        <div className="cardPart">
          <h3>{name}</h3>
          <h4> {id} </h4>
        </div>

        <div className="cardPart">
          <h3>{client}</h3>
        </div>

        <div className="cardPart">
          <p onClick={handlePathClick}>{path}</p>
        </div>

        <DropDown
          buttonText="..."
          menuItems={[
            { name: "Edit", onClick: () => console.log("Edit") },
            { name: "Delete", onClick: () => handleDeleteProject(id) },
          ]}
        />
      </div>
    </>
  );
};

export default ProjectItem;
