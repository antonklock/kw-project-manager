import React from "react";
import MenuButton from "./MenuButton";

type MenuButtonsProps = {
  setView: (view: string) => void;
};

const MenuButtons = (props: MenuButtonsProps) => {
  const { setView } = props;
  return (
    <div className="flex flex-col items-center">
      <MenuButton text={"Projects"} setView={setView} />
      <MenuButton text={"Settings"} setView={setView} />
      <MenuButton text={"Third view"} setView={setView} />
    </div>
  );
};

export default MenuButtons;
