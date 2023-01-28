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
    <li className='listItem'>
        <h2 className={`${todo.completed ? "completed" : ""}`}><span className='indexNo'>{(todos.indexOf(todo) + 1) + ". "}</span>{text}</h2>
        <div className='btns'>
            <button className='checkBtn' onClick={completeHandler}><img src={checkIcon} alt="check"></img></button>
            <button className='deleteBtn' onClick={deleteHandler}><img src={trashIcon} alt="delete"></img></button>
        </div>
    </li>
  )
}

export default Todo;