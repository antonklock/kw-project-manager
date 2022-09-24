import React, { useState } from "react";
import { Card, Button, TextField, Box, Checkbox } from "@mui/joy";
import Popup from "reactjs-popup";
import "../scss/components/addNewProject.scss";
import { v4 as uuidv4 } from "uuid";
import { ipcRenderer } from "electron";

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
  const { projectItems, setProjectItems, handleAddNewProject } = props;
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState("");
  const [starred, setStarred] = useState(false);
  const closeModal = () => setOpen(false);

  let name = "";
  let client = "";
  // let path = "";
  // let starred = false;

  const handleSetPath = () => {
    window.electronAPI.pickLocation().then((result) => setPath(result));
  };

  return (
    <>
      <Button
        className="button"
        onClick={() => {
          setOpen((o) => !o);
        }}
      >
        New Project
      </Button>

      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <Card className={"popUp"}>
          <h1>New Project</h1>
          <TextField
            placeholder={"Project Name"}
            onChange={(e) => {
              name = e.target.value;
            }}
          ></TextField>
          <TextField
            placeholder={"Client"}
            onChange={(e) => {
              client = e.target.value;
            }}
          ></TextField>
          <div style={{ display: "flex" }}>
            <TextField
              value={path}
              placeholder={"Location"}
              onChange={(e) => {
                setPath(e.target.value);
              }}
            />
            <Button onClick={handleSetPath}>...</Button>
          </div>
          <Box>
            <Checkbox
              label="Starred"
              checked={starred}
              onChange={() => {
                setStarred(!starred);
              }}
            />
          </Box>
          <Button
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
          </Button>
        </Card>
      </Popup>
    </>
  );
};
export default AddNewProject;
