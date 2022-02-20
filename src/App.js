import TodoItem from './todoItem.js';
import useTodos from './useTodos';
import React, {memo, useMemo}  from 'react';

// function Button({onClick, children}) {
//   return <button onClick={onClick}>{children}</button>
// }

class Button extends React.Component {
  render() {
    const {onClick, children} = this.props;
    return <button onClick={onClick}>{children}</button>
  }
}



const MemoButton = memo(Button);

const redStyle = {
  borderColor: 'red'
}
const blueStyle = {
  borderColor: 'blue'
}

function App() { 
  const {
    todos, 
    handleButtonClick,
    handleDeleteTodo,
    handleToggledIsDone,
    value, 
    handleChange
  } = useTodos();

  const tryMemo = useMemo(() => {
    console.log('calculte tryMemo color');
    return value ? redStyle : blueStyle;
  }, [value]) 

  // 當輸入值改變才會重新計算，若是改變狀態就不會。

  return (
    <div className="App">
      <input style={tryMemo}  type="text" placeholder="todo" value={value} onChange={handleChange} />
      <MemoButton onClick={handleButtonClick}>Add Todo </MemoButton>
      {
        todos.map(todo => <TodoItem key={todo.id} todo={todo} handleToggledIsDone={handleToggledIsDone} handleDeleteTodo={handleDeleteTodo}></TodoItem>)
      }
    </div>
  );
}

export default App;
