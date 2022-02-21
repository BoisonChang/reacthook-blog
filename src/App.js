import TodoItem from './todoItem.js';
import useTodos from './useTodos';
import React from 'react';
import styled from 'styled-components';


const Main = styled.div`
  margin:4rem auto;
  padding:2rem 3rem 3rem;
  max-width:500px;
  background:#FF6666;
  color:#FFF;
  box-shadow:-20px -20px 0px 0px rgba(100,100,100,.1);
`

const H1 = styled.div`
  font-weight:normal;
  font-size:2.6rem;
  letter-spacing:0.05em;
  border-bottom:1px solid rgba(255,255,255,.3); 
  margin-bottom: 3rem;
  span {
    display:block;
    font-size:0.8rem;
    margin-bottom:0.7rem;
    margin-left:3px;
    margin-top:0.2rem;  
  }
`

const Form = styled.form`
  margin-top:3rem;
  display:flex;
  flex-wrap:wrap;
`

const Label = styled.label`
  min-width:100%;
  margin-bottom:.5rem;
  font-size:1.3rem;
`

const Input = styled.input`
  flex-grow:1;
  border:none;
  background:#f7f1f1;
  padding:0 1.5em;
  font-size:initial;
  font-family:'Quicksand', sans-serif;
	height:3rem;
`

const Button = styled.button`
  padding:0 1.3rem;
  border:none;
  background:#FF6666;
  color:white;
  text-transform:uppercase;
  font-weight:bold;
  border:1px solid rgba(255,255,255,.3);
  margin-left:5px;
  cursor:pointer;
  transition:background .2s ease-out;
`

function App() { 
  const {
    todos, 
    handleButtonClick,
    handleDeleteTodo,
    handleToggledIsDone,
    value, 
    handleChange
  } = useTodos();



  // 當輸入值改變才會重新計算，若是改變狀態就不會。

  return (
    <Main className="App">
      <H1>
        Todo List
        <span>Get things done, one item at a time.</span>
      </H1>     
      {
        todos.map(todo => <TodoItem key={todo.id} todo={todo} handleToggledIsDone={handleToggledIsDone} handleDeleteTodo={handleDeleteTodo}></TodoItem>)
      }
      <Form>
        <Label for="newitem">Add to the todo list</Label>
        <Input  type="text" placeholder="todo" value={value} onChange={handleChange} />
        <Button onClick={handleButtonClick}>Add Todo </Button>
      </Form>
    </Main>
  );
}

export default App;
