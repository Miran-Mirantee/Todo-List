import { displayAddProjectModal } from './displayModal';

// create a button for adding new project to the list
const createAddProjectBtn = () => {
    const addBtn = document.createElement('button');
    addBtn.classList.add('add-project', 'btn');
    addBtn.textContent = 'Add Project';
    addBtn.addEventListener('click', () => {
        if (!addBtn.classList.contains('active')) {
            addBtn.classList.toggle('active');
            displayAddProjectModal(addBtn);
        }
    });
    // document.body.append(addBtn);
};

export default createAddProjectBtn;
