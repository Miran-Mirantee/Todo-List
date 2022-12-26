import { projectList } from "./storage";
import { displayProject, unDisplayProject } from "./displayProject";
import { displayAddProjectModal } from './displayModal';

// create a list of projects 
const _createProjectList = (content) => {
    const projectListContainer = document.createElement('div');
    projectListContainer.classList.add('project', 'list');
    content.append(projectListContainer);
};

// create a button for adding new project to the list
const _createAddProjectBtn = (sidebar) => {
    const addBtn = document.createElement('button');
    addBtn.classList.add('add-project', 'btn');
    addBtn.textContent = 'Add Project';
    addBtn.addEventListener('click', () => {
        if (!addBtn.classList.contains('active')) {
            addBtn.classList.toggle('active');
            displayAddProjectModal(addBtn);
        }
    });
    sidebar.prepend(addBtn);
};

// remove all the children in a list of project in sidebar
const _refreshProjectListSidebar = () => {
    const projectItemList = document.querySelector('.sidebar.project-item-list');
    projectItemList.innerHTML = '';
};

// display a list of project in sidebar
const displayProjectListSidebar = (container) => {
    _refreshProjectListSidebar();
    for (let i = 0; i < projectList.length; i++) {
        const project = document.createElement('div');
        project.classList.add('sidebar', 'project-item');
        project.textContent = projectList[i].name;
        // show selected project
        project.addEventListener('click', () => {
            unDisplayProject();
            displayProject(projectList[i]);
        });
        container.append(project);
    }
};

const header = (() => {
    const container = document.createElement('div');
    container.classList.add('header', 'container');
    const text = document.createElement('div');
    text.classList.add('header', 'text');
    text.textContent = 'My Todo List';
    container.append(text);
    document.body.append(container);
})();

const content = (() => {
    const container = document.createElement('div');
    container.classList.add('content', 'container');
    _createProjectList(container);
    document.body.append(container);

    // display first (default) project
    displayProject(projectList[0]);

})();

const sidebar = (() => {
    const content = document.querySelector('.content.container');
    const container = document.createElement('div');
    container.classList.add('sidebar', 'container');
    content.prepend(container);

    const projectItemList = document.createElement('div');
    projectItemList.classList.add('sidebar', 'project-item-list');
    container.append(projectItemList);

    _createAddProjectBtn(container);
    displayProjectListSidebar(projectItemList);
})();

export {
    displayProjectListSidebar,
};