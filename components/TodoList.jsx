import { useState } from "react";
import TodoCreate from "./TodoCreate";
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const createTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    }

    const removeTodo = (todoId) => {
        setTodos([...todos.filter((todo) => todo.id !== todoId)]);
    }

    const updateTodo = (newTodo) => {
        setTodos([...todos.map((todo) => todo.id === newTodo.id? newTodo : todo)]);
    }

    return (
        <>
            <div className="todo-list-container">
                <TodoCreate onCreateTodo={createTodo} />
                {todos && todos.map((todo) => (
                    <Todo todo={todo} key={todo.id} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
                ))}
            </div>
        </>
    )
};

export default TodoList;
