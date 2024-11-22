import { projectList } from "./storage";
import { displayProject, unDisplayProject } from "./displayProject";
import { displayAddProjectModal } from "./displayModal";

// create a list of projects
const _createProjectArea = (content) => {
  const projectListContainer = document.createElement("div");
  projectListContainer.classList.add("project", "area");
  content.append(projectListContainer);
};

// create a button for adding new project to the list
const _createAddProjectBtn = (sidebar) => {
  const addBtn = document.createElement("button");
  addBtn.classList.add("add-project", "btn", "fa-solid", "fa-plus");
  addBtn.addEventListener("click", () => {
    if (!addBtn.classList.contains("active")) {
      addBtn.classList.toggle("active");
      displayAddProjectModal(addBtn);
    }
  });
  sidebar.append(addBtn);
};

// remove all the children in a list of project in sidebar
const _refreshProjectListSidebar = () => {
  const projectItemList = document.querySelector(".sidebar.project-item-list");
  projectItemList.innerHTML = "";
};

// display a list of project in sidebar
const displayProjectListSidebar = (container) => {
  const currentProjects = document.querySelectorAll(".sidebar.project-item");
  let selectedIndex = 0;
  // find index of current selected project
  for (let i = 0; i < currentProjects.length; i++) {
    if (currentProjects[i].classList.contains("selected")) selectedIndex = i;
  }
  _refreshProjectListSidebar();
  for (let i = 0; i < projectList.length; i++) {
    const project = document.createElement("div");
    project.classList.add("sidebar", "project-item");
    project.textContent = projectList[i].name;

    // if changing project's name or added new project
    if (projectList.length >= currentProjects.length) {
      // highlight (previously) selected project
      if (i == selectedIndex) project.classList.add("selected");
    }
    // if deleting current project
    else {
      // highlight the first project
      if (i == 0) project.classList.add("selected");
    }

    // show selected project
    project.addEventListener("click", () => {
      unDisplayProject();
      displayProject(projectList[i]);
      const selectedProject = document.querySelector(
        ".sidebar.project-item.selected"
      );
      selectedProject.classList.remove("selected");
      project.classList.add("selected");
    });
    container.append(project);
  }
};

// create header of website
const header = (() => {
  const container = document.createElement("div");
  container.classList.add("header", "container");
  const text = document.createElement("div");
  text.classList.add("header", "text");
  text.textContent = "MyTodo List";
  container.append(text);
  document.body.append(container);
})();

// create content of website
const content = (() => {
  const container = document.createElement("div");
  container.classList.add("content", "container");
  _createProjectArea(container);
  document.body.append(container);

  // display first (default) project if it exists
  if (projectList[0]) displayProject(projectList[0]);
})();

// create sidebar of website
const sidebar = (() => {
  const content = document.querySelector(".content.container");

  const container = document.createElement("div");
  container.classList.add("sidebar", "container");
  content.prepend(container);

  const expandBtn = document.createElement("div");
  expandBtn.classList.add("sidebar", "expand-btn");
  expandBtn.addEventListener("click", () => {
    container.classList.toggle("shown");
  });

  const topPanel = document.createElement("div");
  topPanel.classList.add("sidebar", "top-panel");

  const topPanelTxt = document.createElement("div");
  topPanelTxt.classList.add("sidebar", "text");
  topPanelTxt.textContent = "Projects";
  topPanel.append(topPanelTxt);

  const projectItemList = document.createElement("div");
  projectItemList.classList.add("sidebar", "project-item-list");
  container.append(expandBtn, topPanel, projectItemList);

  _createAddProjectBtn(topPanel);
  displayProjectListSidebar(projectItemList);
})();

export { displayProjectListSidebar };
