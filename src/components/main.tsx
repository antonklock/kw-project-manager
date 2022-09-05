import React, { useState } from "react";
import "../scss/components/main.scss";
import ProjectsView from "../components/views/ProjectsView";
import SettingsView from "./views/SettingsView";
import Menu from "./Menu";

const Main = () => {
  const [view, setView] = useState("projects");
  return (
    <div className="main">
      <Menu setView={setView} />
      <div className="views">
        {view === "Projects" && <ProjectsView />}
        {view === "Settings" && <SettingsView />}
      </div>
    </div>
  );
};

export default Main;
