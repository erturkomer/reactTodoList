import React from "react";
import TodoCreate from "./TodoCreate";
import Todo from "./Todo";

const TodoList = () => {
    return (
        <>
            <div className="todo-list-container">
                <TodoCreate />
                <Todo />
            </div>
        </>
    )
};

export default TodoList;
