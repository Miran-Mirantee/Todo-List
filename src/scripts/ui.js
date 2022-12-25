const header = (() => {
    const container = document.createElement('div');
    container.classList.add('header', 'container');
    const text = document.createElement('div');
    text.classList.add('header', 'text');
    text.textContent = 'My Todo List';
    container.append(text);
    document.body.append(container);
})();

const content = (() => {
    const container = document.createElement('div');
    container.classList.add('content', 'container');
    document.body.append(container);
})();

const sidebar = (() => {
    const content = document.querySelector('.content.container');
    const container = document.createElement('div');
    container.classList.add('sidebar', 'container');

    const temp1 = document.createElement('div');
    temp1.textContent = 'project number 1'

    container.append(temp1);
    content.append(container);
})();

export {
    header,
    content,
    sidebar,
};