import { Button, ListDivider, Menu, MenuItem } from "@mui/joy";
import React, { useState, useRef, useEffect } from "react";

const DropDown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropDownButtonRef = useRef<HTMLButtonElement>(null);

  const [currentProjectGroup, setCurrentProjectGroup] = useState(null);

  const handleClick = () => {
    if (menuOpen) {
      setAnchorEl(null);
      setMenuOpen(false);
      console.log("close! " + menuOpen);
    } else {
      setAnchorEl(dropDownButtonRef.current);
      setMenuOpen(true);
      console.log("open! " + menuOpen);
    }
  };
  const handleClose = () => {
    setMenuOpen(false);
  };

  const handleSetCurrentProjectGroup = (projectGroup: string) => {
    setCurrentProjectGroup(projectGroup);
    setMenuOpen(false);
  };

  useEffect(() => {
    setCurrentProjectGroup("Home Computer");
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
        <Menu id="dropDownMenu" anchorEl={anchorEl} open={true}>
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
          <MenuItem onClick={handleClose} variant="soft">
            + Add New
          </MenuItem>
        </Menu>
      )}
    </>
  );
};

export default DropDown;
