import { useState, useRef, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCalendarCheck } from "react-icons/fa";

const Todo = ({ todo, onRemoveTodo, onUpdateTodo }) => {
    const { id, content } = todo;

    const [isEditing, setIsEditing] = useState(false);
    const [newTodo, setNewTodo] = useState(content);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const removeTodo = () => {
        onRemoveTodo(id);
    };

    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        };
        onUpdateTodo(request);
        setIsEditing(false);
    };

    return (
        <>
            <div className="todo">
                <div className="todo-text">
                    {
                        isEditing ? <p><input ref={inputRef} type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} style={{ border: "0", borderBottom: "0.5px solid #000", outline: "none", width: "450px", fontSize: "15px" }} /></p> : <p>{content}</p>}
                </div>
                <div className="todo-icons">
                    {
                        isEditing ? <FaCalendarCheck onClick={updateTodo} /> : <FaRegEdit onClick={() => setIsEditing(true)} />
                    }
                    <AiOutlineDelete onClick={removeTodo} />
                </div>
            </div>
        </>
    );
};

export default Todo;
