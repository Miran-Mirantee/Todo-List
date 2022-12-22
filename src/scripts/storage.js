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

const setProject = (newProject) => {
    console.log(`storing ${newProject.name}`);
    localStorage.setItem(newProject.name, JSON.stringify(newProject));
    storeProjectNames(newProject.name);
}

const storeProjectNames = (newProject) => {
    projectNames.push(newProject);
    localStorage.setItem('projectNames', JSON.stringify(projectNames));
    console.log(projectNames);
}

export {
    setProject,
};

