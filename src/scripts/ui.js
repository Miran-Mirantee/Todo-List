import setAttributes from "./setAttrs";
import { displayAddProjectModal } from './displayModal';

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
    document.body.append(container);
})();

const sidebar = (() => {
    const content = document.querySelector('.content.container');
    const container = document.createElement('div');
    container.classList.add('sidebar', 'container');

    _createAddProjectBtn(container);

    const temp1 = document.createElement('div');
    temp1.textContent = 'project number 1'

    container.append(temp1);
    content.append(container);
})();