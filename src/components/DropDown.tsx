import { Button, Menu } from "@mui/joy";
import React, { useState, useRef, useEffect } from "react";

type MenuItem = { reactElement: React.ReactElement; onClick?: () => void };

type DropDownProps = {
  menuItems: MenuItem[];
  buttonElement: React.ReactNode;
};

const DropDown = (props: DropDownProps) => {
  const { menuItems, buttonElement } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropDownButtonRef = useRef<HTMLButtonElement>(null);
  const dropDownMenuRef = useRef<HTMLDivElement>(null);

  const handleOpenMenu = () => {
    if (!menuOpen) {
      document.addEventListener("mouseup", handleClose);
      setMenuOpen(true);
    } else {
      document.removeEventListener("mouseup", handleClose);
      setMenuOpen(false);
    }
  };

  const handleClose = (e: MouseEvent) => {
    if (
      e.target !== dropDownButtonRef.current &&
      (e.target as HTMLElement).parentNode !== dropDownMenuRef.current
    ) {
      setMenuOpen(false);
      document.removeEventListener("mouseup", handleClose);
    }
  };

  const handleMenuClick = (callBack: () => void) => {
    callBack();
    setMenuOpen(false);
    document.removeEventListener("mouseup", handleClose);
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
        onClick={handleOpenMenu}
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
        >
          {menuItems.map((menuItem) =>
            React.cloneElement(menuItem.reactElement, {
              onClick: () => handleMenuClick(menuItem.onClick),
            })
          )}
        </Menu>
      )}
    </>
  );
};

export default DropDown;
