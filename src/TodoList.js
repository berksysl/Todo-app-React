import React from "react";
import { useState } from "react";

function TodoList(){
    const [todo, setTodos] = useState([{text: 'Wake Up', checked: false}]);
    return (
        <div id="container">
            <h1>TODO APP</h1>
            <form>
                <input type={'text'} placeholder={'Add new task'} />
                <input type={'submit'} value={'Add'} />
            </form>
            <h2>YOUR TASKS</h2>
            {
                todo.map((todo, index) => {
                    return(
                    <div className="itemContainer">
                        <span>{index+1}</span>
                        <p className="todoText">{todo.text}</p>
                        <div className="checkButton"><img src="check-solid.svg" alt="check"/></div>
                        <div className="deleteButton"><img src="./trash-solid.svg" alt="delete"/></div>
                    </div>
                    );
                })
            }
        </div>
    )
    
}

export default TodoList;