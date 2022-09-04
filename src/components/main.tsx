import React from "react";
import { Avatar } from "@mui/joy";
import { useColorScheme } from "@mui/joy/styles";
import "../scss/components/main.scss";
import MenuButton from "./MenuButton";
import ProjectsView from "../components/views/ProjectsView";

const Main = () => {
  const { mode, setMode } = useColorScheme();
  setMode("dark");
  return (
    <div className="main">
      <div className="menu">
        <div>
          <Avatar />
        </div>
        <div className="menuButtonsWrapper">
          <MenuButton />
          <MenuButton />
          <MenuButton />
        </div>
      </div>
      <div className="views">
        <ProjectsView />
      </div>
    </div>
  );
};

export default Main;
