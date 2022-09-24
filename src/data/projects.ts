import { Project } from "../types/appTypes";

const projects: Project[] = [
    {
        name: "Test Project 1",
        client: "Test Client 1",
        path: "/PATH/TO/PROJECT-1",
        starred: false,
        id: "testid1",
    },
    {
        name: "Test Project 2",
        client: "Test Client 2",
        path: "/PATH/TO/PROJECT-2",
        starred: false,
        id: "testid2",
    },
    {
        name: "Test Project 3",
        client: "Test Client 3",
        path: "/PATH/TO/PROJECT-3",
        starred: false,
        id: "testid3",
    },
]

function getProjects() {
    return projects;
}

function getProject(id: string) {
    return projects.find(p => p.id === id);
}   

function addProject(project: Project) {
    projects.push(project);
}

function updateProject(project: Project) {
    const index = projects.findIndex(p => p.id === project.id);
    projects[index] = project;
}

function deleteProject(id: string) {
    const index = projects.findIndex(p => p.id === id);
    if (index != -1) {
    projects.splice(index, 1);
    console.log("Deleted project with id: " + id);
    console.log("projects:");
    console.log(projects);    
    } else {
        console.log("There is no project with that ID");
    }
    
}

export { getProjects, getProject, addProject, updateProject, deleteProject };