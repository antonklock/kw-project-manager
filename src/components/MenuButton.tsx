import React from "react";

type MenuButtonProps = {
  text: string;
  setView: (view: string) => void;
};

const MenuButton = (props: MenuButtonProps) => {
  const { text, setView } = props;
  return (
    <div className="menuButton">
      <button onClick={() => setView(text)}>{text}</button>
    </div>
  );
};

export default MenuButton;
