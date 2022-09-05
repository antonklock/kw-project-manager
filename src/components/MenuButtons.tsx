import React from "react";
import MenuButton from "./MenuButton";
import "../scss/components/menuButtons.scss";

type MenuButtonsProps = {
  setView: (view: string) => void;
};

const MenuButtons = (props: MenuButtonsProps) => {
  const { setView } = props;
  return (
    <div className="menuButtons">
      <MenuButton text={"Projects"} setView={setView} />
      <MenuButton text={"Settings"} setView={setView} />
      <MenuButton text={"Third view"} setView={setView} />
    </div>
  );
};

export default MenuButtons;
