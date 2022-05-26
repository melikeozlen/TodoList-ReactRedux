import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import { todoAdded, todoDelete, clearall } from './redux/todoSlice';
import TodoItemComp from "./components/TodoItemComp"
import { IoIosAddCircleOutline } from 'react-icons/io';
import { v4 as uuidv4 } from 'uuid';
import "./style.scss"
import alertify from 'alertifyjs';
const App = () => {
  const todos = useSelector(state => state.todos)
  const [newtodo, setTodo] = useState("");
  const content = Date.now();
  const dispatch = useDispatch()

  const add = () => {
    if (newtodo === "") {
      alertify.error('Fill in the blank',2);
    }
    else {
      dispatch(
        todoAdded({
          id: uuidv4(),
          title: newtodo,
          content
        })
      )
      setTodo(() => "");
    }

    
  }


  const removeTodo = (e) => {
    dispatch(
      todoDelete({
        id: e
      })
    )
  }
  const clear = () => {
    dispatch(
      clearall()
    )
  }

  const handleTodoChange = (e) => {
    setTodo(() => e.target.value);
  }

  return (
    <div id='app'>
      <h2>TO DO LIST</h2>
      <div className='addTodo'>
        <textarea className='add__input' autoFocus type="text" value={newtodo} placeholder="Add new todo " onChange={(e) => handleTodoChange(e)} />
        <button className='add__button' onClick={add}>
          <IoIosAddCircleOutline />
        </button>

      </div>
      <br />
      <ul>

        {
          todos.map((todoItem, index) => {
            return (
              <div key={index} className="item">
                <TodoItemComp todoItem={todoItem} />

              </div>
            )
          })
        }
      </ul>
      <h6>Coded by Melike ÖZLEN</h6>
      <button className='clearAll' onClick={clear}>CLEAR ALL</button>
     
    </div>
  )
}

export default App