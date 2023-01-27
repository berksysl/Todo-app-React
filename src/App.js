import React, { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <section id='container'>
        <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
        <TodoList todos={todos} setTodos={setTodos}/>
      </section>
    </div>
  );
}

export default App;
