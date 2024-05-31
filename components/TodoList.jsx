import { useState } from "react";
import TodoCreate from "./TodoCreate";
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const createTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    }

    return (
        <>
            <div className="todo-list-container">
                <TodoCreate onCreateTodo={createTodo} />
                {todos.map((todo) => (
                    <Todo todo={todo} key={todo.id} />
                ))}
            </div>
        </>
    )
};

export default TodoList;
