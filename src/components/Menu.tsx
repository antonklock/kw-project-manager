import React from "react";
import MenuButtons from "./MenuButtons";

type MenuProps = {
  setView: (view: string) => void;
};

const Menu = (props: MenuProps) => {
  const { setView } = props;

  return (
    <div className="menu">
      <div className="bg-black rounded-full w-10 h-10"></div>
      <p>Switch</p>
      <div className="border"></div>
      <MenuButtons setView={setView} />
    </div>
  );
};

export default Menu;
