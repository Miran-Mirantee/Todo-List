import todo from "./todo";
import project from "./project";
import setAttributes from "./setAttrs";
import './style.css';

let todo1 = new todo("title1", "description", "20-12-2023", "high");
let todo2 = new todo("title2", "description", "20-12-2023", "high");
let todo3 = new todo("title3", "description", "20-12-2023", "high");
let todo4 = new todo("title4", "description", "20-12-2023", "high");
let todo5 = new todo("title5", "description", "20-12-2023", "high");
let todo6 = new todo("title6", "description", "20-12-2023", "high");
let project1 = new project("project1");
let project2 = new project("project2");
let project3 = new project("project3");

project1.add(todo1);
project1.add(todo2);
project1.add(todo3);
project1.add(todo4);
project1.add(todo5);
project1.add(todo6);

console.log(project1);

// create a project displaying a list of todo
const createProject = (project) => {
    const list = document.createElement('div');
    list.classList.add('project', 'container');

    const topPanel = document.createElement('div');
    topPanel.classList.add('project', 'top-panel');

    const projectName = document.createElement('div');
    projectName.classList.add('project', 'name')
    projectName.textContent = project.name;

    const addBtn = document.createElement('button');
    addBtn.classList.add('project', 'btn');
    addBtn.textContent = "add";
    addBtn.addEventListener('click', () => {
        displayAddTodoModal();
    });

    topPanel.append(projectName, addBtn);
    list.append(topPanel);

    let length = project.list.length;

    for (let i = 0; i < length; i++) {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo', 'container');

        const title = document.createElement('div');
        title.classList.add('todo', 'title');
        title.textContent = project.list[i].title;

        const desc = document.createElement('div');
        desc.classList.add('todo', 'desc');
        desc.textContent = project.list[i].desc;

        const dueDate = document.createElement('div');
        dueDate.classList.add('todo', 'date');
        dueDate.textContent = project.list[i].dueDate;

        const priority = document.createElement('div');
        priority.classList.add('todo', 'priority');
        priority.textContent = project.list[i].priority;

        todoItem.append(title, desc, dueDate, priority);
        list.append(todoItem);
    }
    document.body.append(list);
};

// create a "add todo to project" modal
const createAddTodoModal = (() => {
    const modal = document.createElement('div');
    modal.classList.add('todo', 'modal');
    
    const modalContent = document.createElement('div');
    modalContent.classList.add('todo', 'modal-content');

    const topPanel = document.createElement('div');
    topPanel.classList.add('modal', 'top-panel');

    const header = document.createElement('div');
    header.classList.add('modal', 'header');
    header.textContent = 'Add new todo'

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('modal', 'close-btn');
    closeBtn.textContent = 'X';
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    const inputForm = document.createElement('form');
    setAttributes(inputForm, {'action': 'javascript:;', 'method': 'post'});
    inputForm.classList.add('modal', 'input-form');

    // input fields
    // title
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('modal', 'input-container');
    const titleLabel = document.createElement('label');
    setAttributes(titleLabel, {'for': 'title'});
    titleLabel.textContent = 'Title:';
    const titleField = document.createElement('input');
    setAttributes(titleField, {'type': 'text', 'id': 'title', 'name': 'title'});
    titleContainer.append(titleLabel, titleField);
    
    // description
    const descContainer = document.createElement('div');
    descContainer.classList.add('modal', 'input-container');
    const decLabel = document.createElement('label');
    setAttributes(decLabel, {'for': 'desc'});
    decLabel.textContent = 'Description:';
    const descField = document.createElement('input');
    setAttributes(descField, {'type': 'text', 'id': 'desc', 'name': 'desc'});
    descContainer.append(decLabel, descField);

    // due date
    const dueDateContainer = document.createElement('div');
    dueDateContainer.classList.add('modal', 'input-container');
    const dueDateLabel = document.createElement('label');
    setAttributes(dueDateLabel, {'for': 'due_date'});
    dueDateLabel.textContent = 'Due date:';
    const dueDateField = document.createElement('input');
    setAttributes(dueDateField, {'type': 'date', 'id': 'due_date', 'name': 'due_date'});
    dueDateContainer.append(dueDateLabel, dueDateField);

    // priority
    const priorityContainer = document.createElement('div');
    priorityContainer.classList.add('modal', 'input-container');
    const priorityLabel = document.createElement('label');
    setAttributes(priorityLabel, {'for': 'priority'});
    priorityLabel.textContent = 'Priority:';
    const priorityField = document.createElement('input');
    setAttributes(priorityField, {'type': 'text', 'id': 'priority', 'name': 'priority'});
    priorityContainer.append(priorityLabel, priorityField);

    const bottomPanel = document.createElement('div');
    bottomPanel.classList.add('modal', 'bottom-panel');

    const createBtn = document.createElement('button');
    setAttributes(createBtn, {'type': 'submit'});
    createBtn.classList.add('modal', 'btn');
    createBtn.textContent = 'Create';
    createBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    const cancelBtn = document.createElement('button')
    setAttributes(cancelBtn, {'type': 'reset'});
    cancelBtn.classList.add('modal', 'btn', 'cancel');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    bottomPanel.append(cancelBtn, createBtn);

    inputForm.append(titleContainer, descContainer, dueDateContainer, priorityContainer, bottomPanel);
    topPanel.append(header, closeBtn);
    modalContent.append(topPanel, inputForm);
    modal.append(modalContent)
    document.body.append(modal);
})();

// display a "add todo to project" modal
const displayAddTodoModal = () => {
    const modal = document.querySelector('.todo', '.modal');
    modal.style.display = 'flex';
};

createProject(project1);
createProject(project2);
createProject(project3);