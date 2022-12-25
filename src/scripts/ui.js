import setAttributes from "./setAttrs";
import projectList from "./projectList";
import { displayAddProjectModal } from './displayModal';

let currentProject;

// create a list of projects 
const _createProjectList = (content) => {
    const projectList = document.createElement('div');
    projectList.classList.add('project', 'list');
    content.append(projectList);
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
    for (let i = 0; i < projectList.length; i++) {
        const project = document.createElement('div');
        project.classList.add('sidebar', 'project-item');
        project.textContent = projectList[i].name;
        projectItemList.append(project);
    }


})();