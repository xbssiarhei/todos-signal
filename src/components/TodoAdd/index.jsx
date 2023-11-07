import {add}  from '../../store/todos';
import {useState} from 'react';

const TodoAdd = () => {
    const [name, setName] = useState('');
    return (
        <div className="TodoAdd">
            <h4>Add new todo</h4>
            <input type="text"
                value={name} onChange={(e) => setName(e.target.value)}
            />
            <button
                disabled={!name}
                onClick={() => {
                    add({
                        name
                    })
                    setName('');
                }}
            >Add</button>
        </div>
    );
};

export default TodoAdd;
