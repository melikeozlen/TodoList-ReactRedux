import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { todoDelete, editTodo } from '../redux/todoSlice';
import { BsCheck2All, BsFillTrashFill } from 'react-icons/bs';
import { FaPencilAlt } from 'react-icons/fa';
import "./TodoItem.scss"
const TodoItem = ({ todoItem }) => {

    const [editible, setEditible] = useState(false);
    const [newtodo, setTodo] = useState(todoItem.title);
    const content = Date.now();
    const dispatch = useDispatch()
    const removeTodo = (e) => {
        console.log(e);
        dispatch(
            todoDelete({
                id: e
            })
        )
    }
    const edit = () => {
        setEditible(false);
        console.log(todoItem.id);
        const id = todoItem.id;
        dispatch(editTodo({
            id: id,
            title: newtodo,
            content: content
        })
        )
    }

    const handleTodoChange = (e) => {
        setTodo(() => e.target.value);
    }
    return (
        <li>
            {editible ?
                <div className="editible">
                    <input autoFocus value={newtodo} onChange={(e) => handleTodoChange(e)} />
                    <button onClick={edit}><BsCheck2All/></button>
                </div>
                :
                <div className="non__editible">
                    <p>{todoItem.title}</p>
                    <div className="buttons">
                        <button onClick={(e) => setEditible(true)}><FaPencilAlt/></button>
                        <button onClick={(e) => removeTodo(todoItem.id)}><BsFillTrashFill/></button>

                    </div>
                </div>

            }



        </li>
    )
}

export default TodoItem