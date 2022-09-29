import { Button, Menu } from "@mui/joy";
import { MenuItem } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";

type MenuItem = {
  reactElement: React.ReactElement;
  onClick?: () => void;
  closeOnClick?: boolean;
};

type DropDownProps = {
  menuItems: MenuItem[];
  buttonElement: React.ReactElement;
};

const DropDown = (props: DropDownProps) => {
  const { menuItems, buttonElement } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const dropDownButtonRef = useRef<HTMLButtonElement>(null);
  const dropDownMenuRef = useRef<HTMLDivElement>(null);

  const handleClickMenuButton = () => {
    console.log("Menu button clicked");
    if (!menuOpen) {
      document.addEventListener("mouseup", handleClose);
      setMenuOpen(true);
    } else {
      document.removeEventListener("mouseup", handleClose);
      setMenuOpen(false);
    }
  };

  const handleClose = (e: MouseEvent) => {
    console.log(
      (e.target as HTMLElement).contains(dropDownButtonRef.current) ||
        (e.target as HTMLElement).contains(dropDownMenuRef.current)
    );
    document.removeEventListener("mouseup", handleClose);
    if (
      (e.target as HTMLElement).contains(dropDownButtonRef.current) ||
      (e.target as HTMLElement).contains(dropDownMenuRef.current)
    ) {
      if (e.target != dropDownButtonRef.current) {
        setMenuOpen(false);
      }
    }
  };

  const handleMenuClick = (callBack: () => void, closeOnClick = true) => {
    callBack();
    if (closeOnClick) {
      setMenuOpen(false);
      document.removeEventListener("mouseup", handleClose);
    }
  };

  useEffect(() => {
    setAnchorEl(dropDownButtonRef.current);
    return setMenuOpen(false);
  }, []);

  return (
    <>
      <Button
        id="dropDownButton"
        variant="outlined"
        color="neutral"
        onClick={handleClickMenuButton}
        ref={dropDownButtonRef}
      >
        {buttonElement}
      </Button>
      {menuOpen && (
        <Menu
          id="dropDownMenu"
          anchorEl={anchorEl}
          open={true}
          ref={dropDownMenuRef}
          onClose={() => setMenuOpen(false)}
        >
          {menuItems.map((menuItem) =>
            React.cloneElement(menuItem.reactElement, {
              onClick: () =>
                handleMenuClick(menuItem.onClick, menuItem.closeOnClick),
            })
          )}
        </Menu>
      )}
    </>
  );
};

export default DropDown;
