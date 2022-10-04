import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { UilTimes } from "@iconscout/react-unicons";

type Project = {
  name: string;
  client: string;
  path: string;
  starred: boolean;
  id: string;
};

type ProjectItemsProps = {
  projectItems: Project[];
  setProjectItems: React.Dispatch<React.SetStateAction<Project[]>>;
  handleAddNewProject: (newProject: Project) => void;
};

const AddNewProject = (props: ProjectItemsProps) => {
  const { handleAddNewProject } = props;
  const [path, setPath] = useState("");
  const [name, setName] = useState("");
  const [client, setClient] = useState("");
  const [starred, setStarred] = useState(false);

  const handleSetPath = () => {
    window.electronAPI.pickLocation().then((result) => setPath(result));
  };

  return (
    <>
      <label htmlFor="my-modal" className="btn btn-primary modal-button">
        New project
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="prose modal-box pt-0 w-5/12 max-w-5xl">
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="btn btn-circle btn-sm absolute "
            >
              <UilTimes />
            </label>
          </div>
          <h2 className="my-0">New Project</h2>
          <p>Create a new project using the default folder structure</p>
          <div>
            <div className="flex flex-col">
              <label>Project Name</label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs mb-2 required:border-red-500"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </div>

            <div className="flex flex-col">
              <label>Client Name</label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs mb-2"
                onChange={(e) => {
                  setClient(e.target.value);
                }}
              ></input>
            </div>
            <div className="flex flex-col">
              <label>Project Path</label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs mb-2"
                value={path}
                onChange={(e) => {
                  setPath(e.target.value);
                }}
                onClick={handleSetPath}
              />
            </div>
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                className="checkbox"
                checked={starred}
                onChange={() => {
                  setStarred(!starred);
                }}
              />
              <label className="ml-2">Starred</label>
            </div>
          </div>

          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="btn btn-primary"
              onClick={() => {
                handleAddNewProject({
                  name: name,
                  client: client,
                  path: path[0],
                  starred: starred,
                  id: uuidv4(),
                });
              }}
            >
              Save
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddNewProject;
