import { useState } from "react";

const TodoCreate = ({ onCreateTodo }) => {
    const [newtodo, setNewTodo] = useState("");

    const createTodo = () => {
        if (!newtodo) return;
        const request = {
            id: Math.floor(Math.random() * 99999999999),
            content: newtodo
        }
        onCreateTodo(request);
        setNewTodo("");
    }

    return (
        <>
            <div className="todo-create-container">
                <h1>TODOLIST</h1>
                <div className="todo-create">
                    <input
                        type="text"
                        placeholder="Enter Todo"
                        value={newtodo}
                        onChange={(e) => setNewTodo(e.target.value)} />
                    <button
                        title="Add Todo"
                        onClick={createTodo}>+</button>
                </div>
            </div>
        </>
    )
};

export default TodoCreate;
