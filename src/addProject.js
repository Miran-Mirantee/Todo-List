import {displayAddProjectModal} from './displayModal';

// create a button for adding new project to the list
const _createAddProjectBtn = (() => {
    const addBtn = document.createElement('button');
    addBtn.classList.add('add-project', 'btn');
    addBtn.textContent = 'Add Project';
    addBtn.addEventListener('click', () => {
        displayAddProjectModal();
    });
    document.body.prepend(addBtn);
})();
