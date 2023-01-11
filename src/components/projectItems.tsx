import React, { useEffect, useState } from "react";

interface Project {
  starred: boolean;
  name: string;
  client: string;
  path: string;
  id: string;
}

interface Props {
  projectItems: Project[];
  handleDeleteProject: (projectToDelete: string) => void;
}

const ProjectItems: React.FC<Props> = ({ projectItems: items }) => {
  const [sortedItems, setSortedItems] = useState(items);

  const handleSortClick = (property: keyof Project) => {
    setSortedItems(
      sortedItems.slice().sort((a, b) => {
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;
        return 0;
      })
    );
  };

  useEffect(() => {
    setSortedItems(items);
  }, [items]);

  return (
    <div>
      <ul>
        <li className="flex flex-row justify-around bg-base-300 rounded-md mx-5 border-b border-info border-opacity-25">
          <span onClick={() => handleSortClick("starred")}>Star</span>
          <span onClick={() => handleSortClick("name")}>Name</span>
          <span onClick={() => handleSortClick("client")}>Client</span>
        </li>
        {sortedItems.map((item) => (
          <li
            className="flex flex-row justify-around bg-base-300 rounded-md mx-5 border-b border-info border-opacity-25"
            key={item.name}
          >
            {item.starred} - {item.name} - {item.client} - {item.path} -{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectItems;

// import React from "react";
// import ProjectItem from "./ProjectItem";
// import { Project } from "../../types/types";

// type ProjectItemsProps = {
//   projectItems: Project[];
//   handleDeleteProject: (projectToDelete: string) => void;
// };

// const ProjectItems = (props: ProjectItemsProps) => {
//   const { projectItems, handleDeleteProject } = props;

//   return (
//     <>
//       {projectItems.map((project) => (
//         <ProjectItem
//           key={project.id}
//           id={project.id}
//           handleDeleteProject={handleDeleteProject}
//           path={project.path}
//           name={project.name}
//           client={project.client}
//           starred={project.starred}
//         />
//       ))}
//     </>
//   );
// };

// export default ProjectItems;
