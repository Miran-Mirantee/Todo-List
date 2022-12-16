class project{
    constructor() {
        this.list = [];
    }

    add(todo) {
        this.list.push(todo);
    }

    delete(todo) {
        let index = this.list.indexOf(todo);
        this.list.splice(index, 1);
    }
}

export default project;