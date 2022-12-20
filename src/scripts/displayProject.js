import {displayAddTodoModal} from "./displayModal";
import setAttributes from "./setAttrs";

// create a list of projects 
const _createProjectList = (() => {
    const projectList = document.createElement('div');
    projectList.classList.add('project', 'list');
    document.body.prepend(projectList);
})();

// display a project displaying a list of todo
const displayProject = (projectList, project) => {

    // change project's name
    const _changeProjectName = () => {
        projectName.toggleAttribute('disabled');
        project.editName(projectName.value);
    };

    // delete project from a list
    const _deleteProject = () => {
        container.remove();
        let index = projectList.indexOf(project);
        projectList.splice(index, 1);
    };

    // create a list of todo in project
    const _createListofTodo = () => {
        list.classList.add('todo', 'list');
        let length = project.list.length;
        for (let i = 0; i < length; i++) {
            const todoItem = document.createElement('form');
            todoItem.classList.add('todo', 'container');
            setAttributes(todoItem, {'action': 'javascript:;', 'method': 'post'});

            const isDone = document.createElement('input');
            isDone.classList.add('todo', 'isDone');
            isDone.addEventListener('click', () => _toggleTodoIsDone(isDone, project.list[i]));
            setAttributes(isDone, {'type': 'checkbox', 'name': 'is_done', 'value': project.list[i].isDone});
    
            const title = document.createElement('input');
            title.classList.add('todo', 'title');
            setAttributes(title, {'type': 'text', 'name': 'title', 'value': project.list[i].title, 'disabled': ''});
    
            const desc = document.createElement('input');
            desc.classList.add('todo', 'desc');
            setAttributes(desc, {'type': 'text', 'name': 'desc', 'value': project.list[i].desc, 'disabled': ''});

            const dueDate = document.createElement('input');
            dueDate.classList.add('todo', 'date');
            setAttributes(dueDate, {'type': 'date', 'name': 'due_date', 'value': project.list[i].dueDate, 'disabled': ''});

            const priority = document.createElement('input');
            priority.classList.add('todo', 'priority');
            setAttributes(priority, {'type': 'text', 'name': 'priority', 'value': project.list[i].priority, 'disabled': ''});

            const editBtn = document.createElement('button');
            editBtn.classList.add('todo', 'edit-todo', 'btn');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => {
                title.toggleAttribute('disabled');
                desc.toggleAttribute('disabled');
                dueDate.toggleAttribute('disabled');
                priority.toggleAttribute('disabled');
                project.list[i].editTodo(title.value, desc.value, dueDate.value, priority.value);
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('todo', 'delete-todo', 'btn');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => _deleteTodo(project.list[i]));
    
            todoItem.append(isDone, title, desc, dueDate, priority, editBtn, deleteBtn);
            list.append(todoItem);
            container.append(list);
        }
    };

    // refresh a list of todo in a project
    const _refreshListofTodo = () => {
        list.innerHTML = '';
        _createListofTodo();
    };

    // delete a todo from the project
    const _deleteTodo = (todo) => {
        project.deleteTodo(todo);
        _refreshListofTodo();
    };

    // add todo to the project
    const _addTodoToProject = () => {
        displayAddTodoModal(project);
        const createTodoBtn = document.querySelector('.btn.create-todo');
        createTodoBtn.addEventListener('click', () => _refreshListofTodo());
    };

    // toggle isDone in todo
    const _toggleTodoIsDone = (input, todo) => {
        todo.toggleIsDone();
        input.setAttribute('value', todo.isDone);
    };

    const container = document.createElement('div');
    container.classList.add('project', 'container');

    const topPanel = document.createElement('div');
    topPanel.classList.add('project', 'top-panel');

    const projectName = document.createElement('input');
    projectName.classList.add('project', 'name')
    setAttributes(projectName, {'type': 'text', 'value': project.name, 'name': 'project_name', 'disabled': ''});
    projectName.addEventListener('keypress', (e) => {if (e.key === 'Enter') {_changeProjectName();}});

    container.append(topPanel);

    const list = document.createElement('div');
    _createListofTodo();

    // add todo to project
    const addTodoBtn = document.createElement('button');
    addTodoBtn.classList.add('add-todo', 'btn', 'project');
    addTodoBtn.textContent = "Add todo";
    addTodoBtn.addEventListener('click', () => _addTodoToProject());

    // change project's name
    const changeProjectNameBtn = document.createElement('button');
    changeProjectNameBtn.classList.add('change-name-project', 'btn', 'project');
    changeProjectNameBtn.textContent = 'Change name';
    changeProjectNameBtn.addEventListener('click', () => _changeProjectName());

    // delete project from the list
    const deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.classList.add('delete-project', 'btn', 'project');
    deleteProjectBtn.textContent = 'Delete project';
    deleteProjectBtn.addEventListener('click', () => _deleteProject());

    topPanel.append(projectName, changeProjectNameBtn, addTodoBtn, deleteProjectBtn);

    const projectListContainer = document.querySelector('.project.list');
    projectListContainer.append(container);
};

export default displayProject;
