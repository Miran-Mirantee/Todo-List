import displayProject from "./displayProject";
import projectList from "./projectList";
import "./addProject";
import "../style/style.css";

// displaying all the project from the localStorage
for(let project of projectList) {
    displayProject(project);
}