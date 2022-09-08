import React, { useState } from "react";
import "../scss/components/main.scss";
import ProjectsView from "./views/ProjectsView";
import SettingsView from "./views/SettingsView";
import Menu from "./Menu";
import ThirdView from "./views/ThirdView";

const Main = () => {
  const [view, setView] = useState("Projects");
  return (
    <div className="main">
      <Menu setView={setView} />
      <div className="views">
        {view === "Projects" && <ProjectsView />}
        {view === "Settings" && <SettingsView />}
        {view === "Third view" && <ThirdView />}
      </div>
    </div>
  );
};

export default Main;
