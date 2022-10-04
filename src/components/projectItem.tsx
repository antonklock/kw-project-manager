import React, { useState } from "react";
import DropDown from "./DropDown";
import { UisStar } from "@iconscout/react-unicons-solid";
import { UilEllipsisV, UilStar } from "@iconscout/react-unicons";

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
  const [shortCuts, setShortCuts] = useState([
    { name: "/PATH/PATH/PATH", onClick: () => console.log("PATH1") },
    { name: "/PATH2/PATH2/PATH2", onClick: () => console.log("PATH2") },
    { name: "/PATH3/PATH3/PATH3", onClick: () => console.log("PATH3") },
  ]);

  const handlePathClick = () => {
    window.electronAPI.openLocation(path);
  };
  return (
    <>
      <div className="flex flex-row justify-around items-center">
        <div className="flex flex-row grow items-center my-2 mx-5 py-2 px-5 card w-96 bg-base-200 shadow-xl overflow-visible">
          <div className="basis-1/20 w-10 h-10 rounded-full flex justify-center items-center mr-5 overflow-visible">
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => setStarred(!isStarred)}
            >
              {isStarred ? <UisStar /> : <UilStar />}
            </button>
          </div>

          <div className="prose basis-1/3">
            <h3 className="mb-0 text-gray-400">{name}</h3>
            <h4 className="text-gray-600"> {client} </h4>
          </div>

          <div className="basis-1/3 text-blue-500 cursor-pointer">
            <p onClick={handlePathClick}>{path}</p>
          </div>

          <div className="basis-1/3 overflow-visible">
            <DropDown
              menuItems={shortCuts}
              buttonElement={<button className="btn">Shortcuts</button>}
            />
          </div>

          <div className="basis-1/10">
            <DropDown
              className="dropdown-end"
              buttonElement={
                <button className="btn btn-sm btn-ghost">
                  <UilEllipsisV className="w-5 h-5" />
                </button>
              }
              menuItems={[
                { name: "Edit", onClick: () => console.log("Edit") },
                {
                  name: "Delete",
                  onClick: () => handleDeleteProject(id),
                  className: "text-red-500",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
