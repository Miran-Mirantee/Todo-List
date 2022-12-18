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

project1.addTodo(todo1);
project1.addTodo(todo2);
project1.addTodo(todo3);
project1.addTodo(todo4);
project1.addTodo(todo5);
project1.addTodo(todo6);

project2.addTodo(todo1);
project2.addTodo(todo2);

// list of all project
const projectList = [];
projectList.push(project1);
projectList.push(project2);
projectList.push(project3);

// create a button for adding new project to the list
const createAddProjectBtn = (() => {
    const addBtn = document.createElement('button');
    addBtn.classList.add('add-project', 'btn');
    addBtn.textContent = 'Add Project';
    addBtn.addEventListener('click', () => {
        displayAddProjectModal();
    });
    document.body.prepend(addBtn);
})();

// create a list of projects 
const createProjectList = (() => {
    const projectList = document.createElement('div');
    projectList.classList.add('project', 'list');
    document.body.prepend(projectList);
})();

// display a project displaying a list of todo
const displayProject = (project) => {
    // create a list of todo
    const _createListofTodo = () => {
        list.classList.add('todo', 'list');
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

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('todo', 'btn');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                project.deleteTodo(project.list[i]);
                list.innerHTML = '';
                _createListofTodo();
            });
    
            todoItem.append(title, desc, dueDate, priority, deleteBtn);
            list.append(todoItem);
            container.append(list);
        }
    };

    const container = document.createElement('div');
    container.classList.add('project', 'container');

    const topPanel = document.createElement('div');
    topPanel.classList.add('project', 'top-panel');

    const projectName = document.createElement('div');
    projectName.classList.add('project', 'name')
    projectName.textContent = project.name;

    container.append(topPanel);

    const list = document.createElement('div');
    _createListofTodo();

    // add todo to project
    const addTodoBtn = document.createElement('button');
    addTodoBtn.classList.add('add-todo', 'btn', 'project');
    addTodoBtn.textContent = "Add todo";
    addTodoBtn.addEventListener('click', () => {
        displayAddTodoModal(project);
        const createTodoBtn = document.querySelector('.btn.create-todo');
        createTodoBtn.addEventListener('click', () => {
            list.innerHTML = '';
            _createListofTodo();
        });
    });

    // delete project from the list
    const deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.classList.add('delete-project', 'btn', 'project');
    deleteProjectBtn.textContent = 'Delete project';
    deleteProjectBtn.addEventListener('click', () => {
        container.remove();
        let index = projectList.indexOf(project);
        projectList.splice(index, 1);
    });

    topPanel.append(projectName, addTodoBtn, deleteProjectBtn);

    const projectListContainer = document.querySelector('.project.list');
    projectListContainer.append(container);
};

// create a field container use in modal
const createFieldContainer = (form, type, labelTxt, name) => {
    const container = document.createElement('div');
    container.classList.add('modal', 'input-container');
    const label = document.createElement('label');
    setAttributes(label, {'for': name});
    label.textContent = `${labelTxt}:`;
    const field = document.createElement('input');
    setAttributes(field, {'type': type, 'id': name, 'name': name});
    container.append(label, field);
    form.append(container);
};

// display a "add todo to project" modal
const displayAddTodoModal = (project) => {
    const modal = document.createElement('div');
    modal.classList.add('todo', 'modal-background');
    
    const modalContent = document.createElement('div');
    modalContent.classList.add('todo', 'modal-content');

    const topPanel = document.createElement('div');
    topPanel.classList.add('modal', 'top-panel');

    const header = document.createElement('div');
    header.classList.add('modal', 'header');
    header.textContent = 'Add new todo'

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('modal', 'close', 'btn');
    closeBtn.textContent = 'X';
    closeBtn.addEventListener('click', () => modal.remove());

    const inputForm = document.createElement('form');
    setAttributes(inputForm, {'action': 'javascript:;', 'method': 'post'});
    inputForm.classList.add('modal', 'input-form');

    // input fields
    createFieldContainer(inputForm, 'text', 'Title', 'title');
    createFieldContainer(inputForm, 'text', 'Description', 'desc');
    createFieldContainer(inputForm, 'date', 'Due date', 'due_date');
    createFieldContainer(inputForm, 'text', 'Priority', 'priority');

    const bottomPanel = document.createElement('div');
    bottomPanel.classList.add('modal', 'bottom-panel');

    // create new todo
    const createBtn = document.createElement('button');
    setAttributes(createBtn, {'type': 'submit'});
    createBtn.classList.add('modal', 'btn', 'create-todo');
    createBtn.textContent = 'Create';
    createBtn.addEventListener('click', () => {
        project.addTodo(
            new todo(
                document.getElementById('title').value,
                document.getElementById('desc').value,
                document.getElementById('due_date').value,
                document.getElementById('priority').value
            )
        );
        modal.remove();
    });

    // cancel
    const cancelBtn = document.createElement('button')
    setAttributes(cancelBtn, {'type': 'reset'});
    cancelBtn.classList.add('modal', 'btn', 'cancel');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => modal.remove());
    bottomPanel.append(cancelBtn, createBtn);

    inputForm.append(bottomPanel);
    topPanel.append(header, closeBtn);
    modalContent.append(topPanel, inputForm);
    modal.append(modalContent)
    document.body.prepend(modal);
};

// display a "add project to a list of projects" modal
const displayAddProjectModal = () => {
    const modal = document.createElement('div');
    modal.classList.add('project', 'modal-background');

    const modalContent = document.createElement('div');
    modalContent.classList.add('project', 'modal-content');

    const topPanel = document.createElement('div');
    topPanel.classList.add('modal', 'top-panel');

    const header = document.createElement('div');
    header.classList.add('modal', 'header');
    header.textContent = 'Add new project'

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('modal', 'close', 'btn');
    closeBtn.textContent = 'X';
    closeBtn.addEventListener('click', () => modal.remove());

    const inputForm = document.createElement('form');
    setAttributes(inputForm, {'action': 'javascript:;', 'method': 'post'});
    inputForm.classList.add('modal', 'input-form');

    createFieldContainer(inputForm, 'text', 'Project Name', 'project_name');

    const bottomPanel = document.createElement('div');
    bottomPanel.classList.add('modal', 'bottom-panel');

    // create new project
    const createBtn = document.createElement('button');
    setAttributes(createBtn, {'type': 'submit'});
    createBtn.classList.add('modal', 'btn', 'create-project');
    createBtn.textContent = 'Create';
    createBtn.addEventListener('click', () => {
        let newProject = new project(document.getElementById('project_name').value);
        projectList.push(newProject);
        displayProject(newProject);
        modal.remove();
    });

    // cancel
    const cancelBtn = document.createElement('button')
    setAttributes(cancelBtn, {'type': 'reset'});
    cancelBtn.classList.add('modal', 'btn', 'cancel');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => modal.remove());
    bottomPanel.append(cancelBtn, createBtn);

    inputForm.append(bottomPanel);
    topPanel.append(header, closeBtn);
    modalContent.append(topPanel, inputForm);
    modal.append(modalContent);
    document.body.prepend(modal);
};

displayProject(project1);
displayProject(project2);
displayProject(project3);