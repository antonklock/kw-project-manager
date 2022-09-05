import React from "react";
import MenuButton from "./MenuButton";
import "../scss/components/menuButtons.scss";

const MenuButtons = () => {
  return (
    <div className="menuButtons">
      <MenuButton text={"Projects"} />
      <MenuButton text={"Another view"} />
      <MenuButton text={"Third view"} />
    </div>
  );
};

export default MenuButtons;
