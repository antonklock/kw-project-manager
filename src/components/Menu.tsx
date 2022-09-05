import React, { useState } from "react";
import { Avatar, Switch } from "@mui/joy";
import { useColorScheme } from "@mui/joy/styles";
import MenuButtons from "./MenuButtons";
import "../scss/components/menu.scss";

const Menu = () => {
  const [checked, setChecked] = useState(false);
  const { mode, setMode } = useColorScheme();

  function handleSwitch() {
    setMode(mode === "dark" ? "light" : "dark");
  }

  return (
    <div className="menu">
      <div className="menuTop">
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
      <MenuButtons />
    </div>
  );
};

export default Menu;
