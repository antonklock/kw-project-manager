import { useState } from "react";
import { Card, Button, TextField, Box, Checkbox } from "@mui/joy";
import Popup from "reactjs-popup";
import "../scss/components/addNewProject.scss";
import { v4 as uuidv4 } from "uuid";
import React from "react";

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
  const closeModal = () => setOpen(false);

  let name = "";
  let client = "";
  let path = "";
  let starred = false;

  // const handleAddProject = (
  //   name: string,
  //   client: string,
  //   path: string,
  //   starred: boolean,
  //   id: string
  // ) => {
  //   setProjectItems([...projectItems, { name, client, path, starred, id }]);
  // };
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
              placeholder={"Location"}
              onChange={(e) => {
                path = e.target.value;
              }}
            />
            <Button>...</Button>
          </div>
          <Box>
            <Checkbox
              label="Starred"
              checked={starred}
              onChange={() => {
                starred = !starred;
              }}
            />
          </Box>
          <Button
            onClick={() => {
              const newProject = {
                name,
                client,
                path,
                starred,
                id: uuidv4(),
              };
              handleAddNewProject(newProject);
              closeModal();
            }}
          >
            Add
          </Button>
        </Card>
      </Popup>
    </>
  );
};

export default AddNewProject;
