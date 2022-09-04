import React from "react";
import ProjectItem from "./ProjectItem";

const cards: any = [];

const ProjectItems = () => {
  for (let i = 0; i < 4; i++) {
    cards.push(<ProjectItem />);
  }
  return <>{cards}</>;
};

export default ProjectItems;
