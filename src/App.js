import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useState, useRef, useEffect, useLayoutEffect }   from 'react';
import TodoItem from './todoItem.js';
import useTodos from './useTodos';

function App() { 
  const {
    todos, 
    setTodos, 
    id,
    handleButtonClick,
    handleDeleteTodo,
    handleToggledIsDone,
    value, 
    setValue, 
    handleChange
  } = useTodos();
  
  return (
    <div className="App">
      <input  type="text" placeholder="todo" value={value} onChange={handleChange} />
      <button onClick={handleButtonClick}>Add Todo</button>
      {
        todos.map(todo => <TodoItem key={todo.id} todo={todo} handleToggledIsDone={handleToggledIsDone} handleDeleteTodo={handleDeleteTodo}></TodoItem>)
      }
    </div>
  );
}

export default App;
