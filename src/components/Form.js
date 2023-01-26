import React from 'react'

function Form({inputText, setInputText, todos, setTodos}) {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.floor(Math.random() * 1000)}]);
        setInputText("");
    }

  return (
    <form>
        <input value={inputText} onChange={inputTextHandler} type={'text'} id="textInput" placeholder='Add new task' required/>
        <button onClick={submitTodoHandler} type='submit' id='submitBtn'>Add</button>
    </form>
  )
}

export default Form;