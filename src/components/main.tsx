import React from "react";
import { useState } from "react";
import { Button, Avatar } from "@mui/joy";
import { useColorScheme } from "@mui/joy/styles";
import "../scss/main.scss";
import ProjectItem from "./projectItem";

const Main = () => {
  const { mode, setMode } = useColorScheme();
  setMode("dark");
  return (
    <div className="main">
      <div className="menu">
        <Avatar />
        <Button> New Project </Button>
      </div>
      <div className="projects">
        <Button className=""> New Project </Button>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};

export default Main;
