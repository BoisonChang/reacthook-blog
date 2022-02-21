import {useState, useEffect, useCallback} from "react";
import useInput from './useInput';


function  writeTodosToLocalStorage(todos) {
    window.localStorage.setItem('todos', JSON.stringify(todos))  
}

export default function useTodos() {
    const [id, setId] = useState(1)
    const {value, setValue, handleChange } = useInput();

    const [todos, setTodos] = useState(() => {
        let todoData = window.localStorage.getItem('todos') || "";
        if (todoData){
          console.log('hi there are Data.')
          todoData = JSON.parse(todoData); 
          setId(id => todoData[0].id + 1)
        } else {
          console.log('hi there are no Data.')
          todoData = []
        }
        return todoData
      });
    
      
    
      // const { value: todoName, setValue: setTodoName, handleChange: handleTodoNameChange } = useInput();
      // 用法示範
      
      useEffect(() =>{
        console.log(JSON.stringify(todos))
        writeTodosToLocalStorage(todos)
      }, [todos])

      const handleButtonClick = useCallback(() => {
        setTodos([
          {
            id,
            content: value,
            isDone: false,
          }, ...todos])
        setValue('');
        setId(id +1)
      }, [setTodos, setValue, id, value, todos])
    
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

    return {
        todos,
        setTodos,
        id,
        handleButtonClick,
        handleDeleteTodo,
        handleToggledIsDone,
        value, 
        setValue, 
        handleChange
    }
}