import displayProject from "./displayProject";
import projectList from "./projectList";
import "./addProject";
import "./style.css";

console.log(projectList);

for(let project of projectList) {
    displayProject(projectList, project);
}