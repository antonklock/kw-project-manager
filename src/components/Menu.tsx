import React from "react";
import MenuButtons from "./MenuButtons";

type MenuProps = {
  setView: (view: string) => void;
};

const Menu = (props: MenuProps) => {
  const { setView } = props;

  return (
    <div className="menu">
      <div className="menuTop">
        <p>Avatar</p>
        <p>Darkmode Switch</p>
      </div>
      <MenuButtons setView={setView} />
    </div>
  );
};

export default Menu;
