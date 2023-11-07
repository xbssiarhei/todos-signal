import { signal } from "@preact/signals-react";

const todos = signal([]);

const add = (item) => {
    todos.value = [...todos.value, {...item, id: crypto.randomUUID()}];
}
const remove = (index) => todos.value = todos.value.filter((todo, i) => i !== index);

const update = (newTodo) => {
    console.log(1);
    const todosValues = todos.value.slice();
    todosValues.find((todo) => {
        if (todo.id === newTodo.id) {
            Object.assign(todo, newTodo);
            return true;
        }
    })
    todos.value = todosValues;
};

export default todos;

export {
    add,
    remove,
    update
};