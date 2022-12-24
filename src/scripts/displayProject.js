import { displayAddTodoModal } from "./displayModal";
import { setProject, removeProject } from "./storage";
import { sub, parseISO, isBefore, isEqual, startOfDay } from "date-fns";
import setAttributes from "./setAttrs";

// create a list of projects 
const _createProjectList = (() => {
    const projectList = document.createElement('div');
    projectList.classList.add('project', 'list');
    document.body.prepend(projectList);
})();

// display a project displaying a list of todo
const displayProject = (project) => {

    // change project's name
    const _changeProjectName = () => {
        projectName.toggleAttribute('disabled');
        project.editName(projectName.value);

        // change project name in storage
        setProject(project);
    };

    // delete project from a list
    const _deleteProject = () => {
        container.remove();

        // delete from storage
        removeProject(project);
    };

    // create a list of todo in project
    const _createListofTodo = () => {
        list.classList.add('todo', 'list');
        let length = project.list.length;
        for (let i = 0; i < length; i++) {
            const todoItem = document.createElement('form');
            todoItem.classList.add('todo', 'container');
            setAttributes(todoItem, {'action': 'javascript:;', 'method': 'post'});

            // store all todo
            const todoPanel = document.createElement('div');
            todoPanel.classList.add('todo', 'todo-panel');

            // store all todo except desc
            const noDescPanel = document.createElement('div');
            noDescPanel.classList.add('todo', 'todo-noDesc-panel');

            // store desc
            const expandPanel = document.createElement('div');
            expandPanel.classList.add('todo', 'expand-panel', 'hidden');

            // todo
            const isDone = document.createElement('input');
            isDone.classList.add('todo', 'isDone');
            isDone.addEventListener('click', () => {
                _toggleTodoIsDone(isDone, project.list[i]);
                setProject(project);
            });
            setAttributes(isDone, {'type': 'checkbox', 'name': 'is_done', 'value': project.list[i].isDone});
            if (project.list[i].isDone) {
                isDone.setAttribute('checked', '');
            }
    
            const title = document.createElement('input');
            title.classList.add('todo', 'title');
            setAttributes(title, {'type': 'text', 'name': 'title', 'value': project.list[i].title, 'disabled': ''});
    
            const desc = document.createElement('textarea');
            desc.classList.add('todo', 'desc');
            desc.textContent = project.list[i].desc;
            setAttributes(desc, {'name': 'desc', 'disabled': ''});

            const dueDate = document.createElement('input');
            dueDate.classList.add('todo', 'date');
            setAttributes(dueDate, {'type': 'date', 'name': 'due_date', 'value': project.list[i].dueDate, 'disabled': ''});
            // check deadline status
            if (project.list[i].dueDate != '') {
                let parsedDueDate = startOfDay(parseISO(project.list[i].dueDate));
                let today = startOfDay(new Date());
                let dueDateSubOneDay = sub(parsedDueDate, {days: 1})

                if (isEqual(parsedDueDate, today)) {
                    console.log('deadline is today');
                }
                else if (isEqual(dueDateSubOneDay, today)) {
                    console.log('one day before dateline');
                }
                else if (isBefore(parsedDueDate, today)) {
                    console.log('deadline is passed');
                }
            }

            const priority = document.createElement('select');
            priority.classList.add('todo', 'priority', project.list[i].priority);
            setAttributes(priority, {'name': 'priority', 'disabled': ''});
            // create priority options
            for (let j = 1; j <= 3; j++) {
                const option = document.createElement('option');
                let priorityLvl;
                let priorityTxt;

                const _selectCorrectPriority = () => {
                    if (project.list[i].priority === priorityLvl) {
                        setAttributes(option, {'selected': ''});
                    }
                };

                switch(j) {
                    case 1:
                        priorityLvl = 'low';
                        priorityTxt = 'Low';
                        _selectCorrectPriority();
                        break;
                    case 2:
                        priorityLvl = 'medium';
                        priorityTxt = 'Medium';
                        _selectCorrectPriority();
                        break;
                    case 3:
                        priorityLvl = 'high';
                        priorityTxt = 'High';
                        _selectCorrectPriority();
                        break;
                }
                setAttributes(option, {'value': priorityLvl});
                option.textContent = priorityTxt;
                priority.append(option);
            }

            noDescPanel.append(isDone, title, dueDate, priority);
            expandPanel.append(desc);

            // store buttons
            const btnPanel = document.createElement('div');
            btnPanel.classList.add('todo', 'btn-panel');

            // buttons
            const expandBtn = document.createElement('button');
            expandBtn.classList.add('todo', 'expand-todo', 'btn');
            expandBtn.textContent = 'Expand';
            expandBtn.addEventListener('click', () => expandPanel.classList.toggle('hidden'));

            const editBtn = document.createElement('button');
            editBtn.classList.add('todo', 'edit-todo', 'btn', 'not-editable');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => {
                _editTodo(project.list[i], title, desc, dueDate, priority, expandPanel, editBtn);
                setProject(project);
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('todo', 'delete-todo', 'btn');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                _deleteTodo(project.list[i]);
                setProject(project);
            });
    
            todoPanel.append(noDescPanel, expandPanel);
            btnPanel.append(expandBtn, editBtn, deleteBtn);
            todoItem.append(todoPanel, btnPanel);
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
    const _addTodoToProject = (btn) => {
        displayAddTodoModal(project, btn);
        const createTodoBtn = document.querySelector('.btn.create-todo');
        createTodoBtn.addEventListener('click', () => _refreshListofTodo());
    };

    // edit todo in the project
    const _editTodo = (todo, title, desc, dueDate, priority, expandPanel, editBtn) => {
        expandPanel.classList.remove('hidden');
        title.toggleAttribute('disabled');
        desc.toggleAttribute('disabled');
        dueDate.toggleAttribute('disabled');
        priority.toggleAttribute('disabled');

        if (!editBtn.classList.contains('not-editable')) {
            // remove old class
            priority.classList.remove(todo.priority);
            todo.editTodo(title.value, desc.value, dueDate.value, priority.value);
            // add new class after editing
            priority.classList.add(todo.priority);
        }
        
        editBtn.classList.toggle('not-editable');
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
    addTodoBtn.addEventListener('click', () => {
        if (!addTodoBtn.classList.contains('active')) {
            addTodoBtn.classList.add('active');
            _addTodoToProject(addTodoBtn)
        }
    });

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
