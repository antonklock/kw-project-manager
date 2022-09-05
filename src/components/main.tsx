import React from "react";
import "../scss/components/main.scss";
import ProjectsView from "../components/views/ProjectsView";
import Menu from "./Menu";

const Main = () => {
  return (
    <div className="main">
      <Menu />
      <div className="views">
        <ProjectsView />
      </div>
    </div>
  );
};

export default Main;
