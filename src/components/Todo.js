import React from 'react'
import checkIcon from '../check-solid.svg';
import trashIcon from '../trash-solid.svg';

function Todo({text, setTodos, todos, todo}) {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {...item, completed: !item.completed};
            }
            return item;
        }))
    }

  return (
    <li>
        <h2 className={`${todo.completed ? "completed" : ""}`}>{(todos.indexOf(todo) + 1) + " " + text}</h2>
        <button onClick={completeHandler}><img src={checkIcon} alt="check"></img></button>
        <button onClick={deleteHandler}><img src={trashIcon} alt="delete"></img></button>
    </li>
  )
}

export default Todo;