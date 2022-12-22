const projectNames = [];

// initialize
if (localStorage.length == 0) {
    localStorage.setItem('projectNames', JSON.stringify(projectNames));
}
else {
    const nameData = JSON.parse(localStorage.getItem('projectNames'));
    for (let name of nameData) {
        projectNames.push(name);
    }
}

// store project names into the localStorage
const _storeProjectNames = (newProject) => {
    // check for duplicate
    if (projectNames.indexOf(newProject) == -1) {
        projectNames.push(newProject);
        localStorage.setItem('projectNames', JSON.stringify(projectNames));
        console.log(`All project names: ${projectNames}`);
    }
}

// add/edit project in the localStorage
const setProject = (newProject) => {
    console.log(`storing ${newProject.name}`);
    localStorage.setItem(newProject.name, JSON.stringify(newProject));
    _storeProjectNames(newProject.name);
}

// delete project from the localStorage

export {
    setProject,
};

