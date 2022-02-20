import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useState, useRef, useEffect, useLayoutEffect }   from 'react';
import TodoItem from './todoItem.js';


function  writeTodosToLocalStorage(todos) {
  window.localStorage.setItem('todos', JSON.stringify(todos))  
}



function App() { 
  const [id, setId] = useState(1)
  const [todos, setTodos] = useState(() => {
    let todoData = window.localStorage.getItem('todos') || "";
    if (todoData){
      console.log('hi there are no Data.')
      todoData = JSON.parse(todoData); 
      setId(id => todoData[0].id + 1)
    } else {
      console.log('hi there are  Data.')
      todoData = []
    }
    return todoData
  });

  const [value, setValue] = useState('');

  useEffect(() =>{
    writeTodosToLocalStorage(todos)

  }, [todos])

  const handleButtonClick = () => {
    setTodos([
      {
        id,
        content: value,
        isDone: false,
      }, ...todos])
    setValue('');
    setId(id +1)
  }

  const handleInputChange = e => {
    setValue(e.target.value)
  }

  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id ))
  }

  const handleToggledIsDone = id => {
    setTodos(todos.map(todo => {
      if(todo.id !== id) return todo;
      return {
        ...todo,
        isDone: !todo.isDone
      }
    }));
  }

  //

  return (
    <div className="App">
      <input  type="text" placeholder="todo" value={value} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Add Todo</button>
      {
        todos.map(todo => <TodoItem key={todo.id} todo={todo} handleToggledIsDone={handleToggledIsDone} handleDeleteTodo={handleDeleteTodo}></TodoItem>)
      }
    </div>
  );
}

export default App;
