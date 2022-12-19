class project{
    constructor(name) {
        this.list = [];
        this.name = name;
    }

    addTodo(todo) {
        this.list.push(todo);
    }

    deleteTodo(todo) {
        let index = this.list.indexOf(todo);
        this.list.splice(index, 1);
    }

    editName(newName) {
        this.name = newName;
        // temp
        console.log(this.name);
    }
}

export default project;