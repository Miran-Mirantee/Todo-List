import displayProject from "./displayProject";
import projectList from "./projectList";
import "./addProject";
import "../style/style.css";

console.log(projectList);

for(let project of projectList) {
    displayProject(projectList, project);
}