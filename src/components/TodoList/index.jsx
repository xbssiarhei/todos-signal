import todos, {update} from '../../store/todos';

import './style.scss';

const TodoItem = ({todo}) => {
    return (
        <div className="TodoItem">
            <input type="checkbox"
                checked={Boolean(todo.completed)}
                onChange={() => update({
                    ...todo,
                    completed: !todo.completed
                })}
            />
            <span>{todo.name}</span>
        </div>
    );
};

const TodoList = () => {
    console.log('TodoList render');
    return (
        <div className="TodoList">
            <h4>List:</h4>
            <div className="TodoList-Items">
                {todos.value.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
