import React from "react";

type MenuButtonProps = {
  text: string;
  setView: (view: string) => void;
};

const MenuButton = (props: MenuButtonProps) => {
  const { text, setView } = props;
  return (
    <button className="btn btn-primary" onClick={() => setView(text)}>
      {text}
    </button>
  );
};

export default MenuButton;
