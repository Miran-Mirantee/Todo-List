class project{
    constructor() {
        this.folder = [];
    }

    add(todo) {
        this.folder.push(todo);
    }

    delete(todo) {
        let index = this.folder.indexOf(todo);
        this.folder.splice(index, 1);
    }
}

export default project;