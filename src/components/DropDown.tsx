import { Button, ListDivider, Menu, MenuItem } from "@mui/joy";
import React, { useState, useRef, useEffect } from "react";

const DropDown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropDownButtonRef = useRef<HTMLButtonElement>(null);
  const dropDownMenuRef = useRef<HTMLDivElement>(null);

  const [currentProjectGroup, setCurrentProjectGroup] = useState(null);

  const handleClick = () => {
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
      (e.target as HTMLDivElement).parentNode !== dropDownMenuRef.current
    ) {
      setMenuOpen(false);
      document.removeEventListener("mouseup", handleClose);
    }
  };

  const handleSetCurrentProjectGroup = (projectGroup: string) => {
    setCurrentProjectGroup(projectGroup);
    setMenuOpen(false);
  };

  useEffect(() => {
    setCurrentProjectGroup("Home Computer");
    setAnchorEl(dropDownButtonRef.current);
    return setMenuOpen(false);
  }, []);

  return (
    <>
      <Button
        id="dropDownButton"
        variant="outlined"
        color="neutral"
        onClick={handleClick}
        ref={dropDownButtonRef}
      >
        {currentProjectGroup}
      </Button>
      {menuOpen && (
        <Menu
          id="dropDownMenu"
          anchorEl={anchorEl}
          open={true}
          ref={dropDownMenuRef}
        >
          <MenuItem
            onClick={() => handleSetCurrentProjectGroup("Home Computer")}
          >
            Home Computer
          </MenuItem>
          <MenuItem
            onClick={() => handleSetCurrentProjectGroup("Work Computer")}
          >
            Work Computer
          </MenuItem>
          <MenuItem onClick={() => handleSetCurrentProjectGroup("Laptop")}>
            Laptop
          </MenuItem>
          <ListDivider />
          <MenuItem variant="soft">+ Add New</MenuItem>
        </Menu>
      )}
    </>
  );
};

export default DropDown;
