import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const Todo = () => {
    return (
        <>
            <div className="todo">
                <div className="todo-text">
                    <p>buraya todo gelecek</p>
                </div>
                <div className="todo-icons">
                    <FaRegEdit title="edit" />
                    <AiOutlineDelete title="delete" />
                </div>
            </div>
        </>
    )
};

export default Todo;
