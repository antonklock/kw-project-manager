import React, { ReactElement } from "react";
import { v4 as uuidv4 } from "uuid";

type MenuItem = {
  name: string;
  onClick?: () => void;
  className?: string;
};

type DropDownProps = {
  menuItems: MenuItem[];
  buttonElement?: ReactElement;
  className?: string;
};

const DropDown = (props: DropDownProps) => {
  const { menuItems, buttonElement, className } = props;

  return (
    <div className="not-prose">
      <div className={"dropdown " + className}>
        <>
          {buttonElement || (
            <label tabIndex={0} className="btn">
              {menuItems[0].name}
            </label>
          )}
        </>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 "
        >
          {menuItems.map((item) => (
            <li
              key={uuidv4()}
              value={item.name}
              onClick={item.onClick}
              className={item.className}
            >
              <a>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;

{
  /* <label htmlFor="dropdown">
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
</label>; */
}

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
