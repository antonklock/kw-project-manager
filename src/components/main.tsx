import React, { useState } from "react";
import { Avatar, Switch } from "@mui/joy";
import { useColorScheme } from "@mui/joy/styles";
import "../scss/components/main.scss";
import MenuButton from "./MenuButton";
import ProjectsView from "../components/views/ProjectsView";

const Main = () => {
  const [checked, setChecked] = useState(false);
  const { mode, setMode } = useColorScheme();

  function handleSwitch() {
    setMode(mode === "dark" ? "light" : "dark");
  }

  return (
    <div className="main">
      <div className="menu">
        <div>
          <Avatar />
          <Switch
            checked={checked}
            variant="solid"
            onChange={(event) => {
              setChecked(event.target.checked);
              handleSwitch();
            }}
          />
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
