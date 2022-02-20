import TodoItem from './todoItem.js';
import useTodos from './useTodos';

function App() { 
  const {
    todos, 
    handleButtonClick,
    handleDeleteTodo,
    handleToggledIsDone,
    value, 
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
