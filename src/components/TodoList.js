import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
  return (
    <ul>
    <h2 id="taskHeader">YOUR TASKS</h2>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            text={todo.text}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
