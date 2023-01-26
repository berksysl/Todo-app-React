import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
  return (
    <ul>
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
