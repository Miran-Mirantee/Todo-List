import todo from "./todo";
import project from "./project";

const projectList = [];
const projectId = [];

// initialize
if (localStorage.length == 0) {
    localStorage.setItem('projectId', JSON.stringify(projectId));
}
else {
    const idData = JSON.parse(localStorage.getItem('projectId'));
    for (let id of idData) {
        projectId.push(id);
    }
}

// store project id into the localStorage
const _storeId = (id) => {
    // check for duplicate
    if (projectId.indexOf(id) == -1) {
        projectId.push(id);
        localStorage.setItem('projectId', JSON.stringify(projectId));
    }
};

// remove project id from the localStorage
const _removeId = (id) => {
    let index = projectId.indexOf(id);
    projectId.splice(index, 1);
    localStorage.setItem('projectId', JSON.stringify(projectId));
};

// get data from localStorage
const _getStorage = () => {
    console.log(localStorage.length);
    if (localStorage.length != 0) {
        const projectId = JSON.parse(localStorage.getItem('projectId'));
        console.log(projectId);
        let length = projectId.length;
        for (let i = 0; i < length; i++) {
            
            // giving a project from local storage a class
            const projectFromStorage = new project();
            for (let key of Object.keys(projectFromStorage)) {
                const projectData = JSON.parse(localStorage.getItem(projectId[i]));
                projectFromStorage[key] = projectData[key];
            }
    
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
};

// add/edit project in the localStorage
const setProject = (newProject) => {
    localStorage.setItem(newProject.timeCreated, JSON.stringify(newProject));
    _storeId(newProject.timeCreated);
};

// delete project from the localStorage
const removeProject = (oldProject) => {
    localStorage.removeItem(oldProject.timeCreated);
    _removeId(oldProject.timeCreated);
};

_getStorage();

export {
    setProject,
    removeProject,
    projectList,
};

