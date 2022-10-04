import React, { useState } from "react";
import ProjectsView from "./views/ProjectsView";
import SettingsView from "./views/SettingsView";
import Menu from "./Menu";
import ThirdView from "./views/ThirdView";
import "../styles.css";

const Main = () => {
  const [view, setView] = useState("Projects");
  return (
    <>
      <div className="flex p-5">
        <Menu setView={setView} />
        <div className="divider divider-horizontal" />
        <div className="grow">
          {view === "Projects" && <ProjectsView />}
          {view === "Settings" && <SettingsView />}
          {view === "Third view" && <ThirdView />}
        </div>
      </div>
    </>
  );
};

export default Main;
