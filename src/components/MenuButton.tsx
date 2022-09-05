import React from "react";
import { Button } from "@mui/joy";
import "../scss/components/menuButton.scss";

type MenuButtonProps = {
  text: string;
};

const MenuButton = (props: MenuButtonProps) => {
  const { text } = props;
  return (
    <div className="menuButton">
      <Button color="primary">{text}</Button>
    </div>
  );
};

export default MenuButton;
