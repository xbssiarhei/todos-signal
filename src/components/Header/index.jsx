import { computed } from "@preact/signals-core";
import todos  from '../../store/todos';

import './style.scss';

const Header = () => {
    console.log('Header render');
    const completed = computed(() => todos.value.filter((todo) => todo.completed).length);
    return (
        <div className="Header">
            <div>Tasks: {todos.value.length}</div>,&nbsp;
            <div>Completed: {completed.value}</div>
        </div>
    );
};

export default Header;
