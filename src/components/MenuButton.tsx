import React from "react";
import { Button } from "@mui/joy";
import "../scss/components/menuButton.scss";

type MenuButtonProps = {
  text: string;
  setView: (view: string) => void;
};

const MenuButton = (props: MenuButtonProps) => {
  const { text, setView } = props;
  return (
    <div className="menuButton">
      <Button color="primary" onClick={() => setView(text)}>
        {text}
      </Button>
    </div>
  );
};

export default MenuButton;
