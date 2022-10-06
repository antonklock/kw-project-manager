import React from "react";
import MenuButtons from "./MenuButtons";
import { UilSetting } from "@iconscout/react-unicons";

type MenuProps = {
  setView: (view: string) => void;
};

const Menu = (props: MenuProps) => {
  const { setView } = props;

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="bg-black rounded-full w-10 h-10"></div>
        <div className="btn btn-circle btn-ghost mt-5">
          <UilSetting className="" />
        </div>
      </div>

      {/* <div className="divider"></div>
      <MenuButtons setView={setView} /> */}
    </div>
  );
};

export default Menu;
