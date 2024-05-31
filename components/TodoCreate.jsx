import React from "react";

const TodoCreate = () => {
  return (
    <>
    <div className="todo-create-container">
        <h1>TODOLIST</h1>
        <div className="todo-create">
            <input type="text" placeholder="Enter Todo" />
            <button title="Add Todo">+</button>
        </div>
    </div>
    </>
  )
};

export default TodoCreate;
