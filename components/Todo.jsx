import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const Todo = ({ todo, onRemoveTodo }) => {

    const removeTodo = () => {
        onRemoveTodo(todo.id);
    };
    
    return (
        <>
            <div className="todo">
                <div className="todo-text">
                    <p>{todo.content}</p>
                </div>
                <div className="todo-icons">
                    <FaRegEdit />
                    <AiOutlineDelete onClick={removeTodo} />
                </div>
            </div>
        </>
    )
};

export default Todo;
