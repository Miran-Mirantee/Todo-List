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

project2.add(todo1);
project2.add(todo2);

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
    
            todoItem.append(title, desc, dueDate, priority);
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

    const addBtn = document.createElement('button');
    addBtn.classList.add('project', 'btn');
    addBtn.textContent = "add";
    addBtn.addEventListener('click', () => {
        displayAddTodoModal(project);
        const createTodoBtn = document.querySelector('.modal.btn:not(.cancel)');
        createTodoBtn.addEventListener('click', () => {
            list.innerHTML = '';
            _createListofTodo();
        });
    });
    topPanel.append(projectName, addBtn);

    document.body.append(container);
};

// display a "add todo to project" modal
const displayAddTodoModal = (project) => {
    // create a field container use in modal
    const _fieldContainer = (type, labelTxt, name) => {
        const container = document.createElement('div');
        container.classList.add('modal', 'input-container');
        const label = document.createElement('label');
        setAttributes(label, {'for': name});
        label.textContent = `${labelTxt}:`;
        const field = document.createElement('input');
        setAttributes(field, {'type': type, 'id': name, 'name': name});
        container.append(label, field);
        inputForm.append(container);
    };

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
    closeBtn.addEventListener('click', () => modal.remove());

    const inputForm = document.createElement('form');
    setAttributes(inputForm, {'action': 'javascript:;', 'method': 'post'});
    inputForm.classList.add('modal', 'input-form');

    // input fields
    _fieldContainer('text', 'Title', 'title');
    _fieldContainer('text', 'Description', 'desc');
    _fieldContainer('date', 'Due date', 'due_date');
    _fieldContainer('text', 'Priority', 'priority');

    const bottomPanel = document.createElement('div');
    bottomPanel.classList.add('modal', 'bottom-panel');

    const createBtn = document.createElement('button');
    setAttributes(createBtn, {'type': 'submit'});
    createBtn.classList.add('modal', 'btn');
    createBtn.textContent = 'Create';
    createBtn.addEventListener('click', () => {
        project.add(
            new todo(
                document.getElementById('title').value,
                document.getElementById('desc').value,
                document.getElementById('due_date').value,
                document.getElementById('priority').value
            )
        );
        modal.remove();
    });

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

displayProject(project1);
displayProject(project2);
displayProject(project3);