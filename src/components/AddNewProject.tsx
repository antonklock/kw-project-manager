import React, { useState } from "react";
import Popup from "reactjs-popup";
import "../scss/components/addNewProject.scss";
import { v4 as uuidv4 } from "uuid";

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
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState("");
  const [name, setName] = useState("");
  const [client, setClient] = useState("");
  const [starred, setStarred] = useState(false);
  const closeModal = () => setOpen(false);

  const handleSetPath = () => {
    window.electronAPI.pickLocation().then((result) => setPath(result));
  };

  return (
    <>
      <button
        onClick={() => {
          setOpen((o) => !o);
        }}
      >
        New Project
      </button>

      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className={"popUp"}>
          <h1>New Project</h1>
          <input
            placeholder={"Project Name"}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <input
            placeholder={"Client"}
            onChange={(e) => {
              setClient(e.target.value);
            }}
          ></input>
          <div style={{ display: "flex" }}>
            <input
              value={path}
              placeholder={"Location"}
              onChange={(e) => {
                setPath(e.target.value);
              }}
            />
            <button onClick={handleSetPath}>...</button>
          </div>
          <div>
            <input
              type="checkbox"
              checked={starred}
              onChange={() => {
                setStarred(!starred);
              }}
            />
          </div>
          <button
            onClick={() => {
              handleAddNewProject({
                name: name,
                client: client,
                path: path,
                starred: starred,
                id: uuidv4(),
              });
              closeModal();
            }}
          >
            Create
          </button>
        </div>
      </Popup>
    </>
  );
};
export default AddNewProject;
