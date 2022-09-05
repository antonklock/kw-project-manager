import React, { useState } from "react";
import { Avatar, Switch } from "@mui/joy";
import { useColorScheme } from "@mui/joy/styles";
import MenuButtons from "./MenuButtons";
import "../scss/components/menu.scss";

type MenuProps = {
  setView: (view: string) => void;
};

const Menu = (props: MenuProps) => {
  const { setView } = props;
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
      <MenuButtons setView={setView} />
    </div>
  );
};

export default Menu;
