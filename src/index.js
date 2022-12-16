import todo from "./todo";
import project from "./project";
import './style.css';

let todo1 = new todo("title1", "description", "20-12-2023", "high");
let todo2 = new todo("title2", "description", "20-12-2023", "high");
let todo3 = new todo("title3", "description", "20-12-2023", "high");
let todo4 = new todo("title4", "description", "20-12-2023", "high");
let todo5 = new todo("title5", "description", "20-12-2023", "high");
let todo6 = new todo("title6", "description", "20-12-2023", "high");
let project1 = new project("project1");

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

    const projectName = document.createElement('div');
    projectName.classList.add('project', 'name')
    projectName.textContent = project.name;
    list.append(projectName);

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

createProject(project1);