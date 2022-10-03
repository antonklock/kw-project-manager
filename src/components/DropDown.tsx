import React from "react";
import { v4 as uuidv4 } from "uuid";

type MenuItem = {
  name: string;
  onClick?: () => void;
};

type DropDownProps = {
  menuItems: MenuItem[];
  buttonText?: string;
};

const DropDown = (props: DropDownProps) => {
  const { menuItems, buttonText } = props;

  const handleClick = (option: string) => {
    const item = menuItems.find((item) => item.name === option);
    if (item && item.onClick) {
      item.onClick();
    }
  };

  return (
    <>
      <label htmlFor="dropdown">
        <select
          name="select1"
          id="dropdown"
          value={buttonText}
          onChange={(e) => {
            handleClick(e.target.value);
            return buttonText;
          }}
        >
          {buttonText ? (
            <option disabled hidden value={buttonText}>
              {buttonText}
            </option>
          ) : (
            false
          )}

          {menuItems.map((item) => (
            <option key={uuidv4()} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default DropDown;

{
  /* <>
      <button
        id="dropDownButton"
        color="neutral"
        onClick={handleClickMenuButton}
        ref={dropDownButtonRef}
      >
        {buttonElement}
      </button>
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
    </> */
}
