import todo from "./todo";
import project from "./project";

const projectList = [];

// temp data
let todo1 = new todo("title1", "description", "2023-03-22", "high");
let todo2 = new todo("title2", "description", "2023-03-22", "high");
let todo3 = new todo("title3", "description", "2023-03-22", "high");
let todo4 = new todo("title4", "description", "2023-03-22", "high");
let todo5 = new todo("title5", "description", "2023-03-22", "high");
let todo6 = new todo("title6", "description", "2023-03-22", "high");
// let project1 = new project("project1");
let project2 = new project("project2");
// let project3 = new project("project3");

// project1.addTodo(todo1);
// project1.addTodo(todo2);
// project1.addTodo(todo3);
// project1.addTodo(todo4);
// project1.addTodo(todo5);
// project1.addTodo(todo6);

project2.addTodo(todo1);
project2.addTodo(todo2);

// // list of all project
// projectList.push(project1);
// projectList.push(project2);
// projectList.push(project3);

// localStorage.setItem('project1', JSON.stringify(project1));
// localStorage.setItem('project2', JSON.stringify(project2));
// localStorage.setItem('project3', JSON.stringify(project3));

// localStorage.clear();
console.log(localStorage.length);

if (localStorage.length != 0) {
    const projectNames = JSON.parse(localStorage.getItem('projectNames'));
    console.log(`Displaying ${projectNames}`);
    let length = projectNames.length;
    for (let i = 0; i < length; i++) {
        // giving a project from local storage a class
        const projectFromStorage = new project();
        projectFromStorage.list = JSON.parse(localStorage.getItem(projectNames[i])).list;
        projectFromStorage.name = JSON.parse(localStorage.getItem(projectNames[i])).name;

        // giving a todo from local storage a class
        for (let item of projectFromStorage.list) {
            const todoFromStorage = new todo();
            for (let key of Object.keys(todoFromStorage)) {
                todoFromStorage[key] = item[key];
            }
            let index = projectFromStorage.list.indexOf(item);
            projectFromStorage.list[index] = todoFromStorage;
        }
        projectList.push(projectFromStorage);

    }
    console.log(projectList);
}

export default projectList;