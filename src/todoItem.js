import styled from 'styled-components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from './constants/style'
import React from 'react';

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border: 1px solid black;
  margin-top: 20px; 
`

const TodoContent = styled.div`
  color: red;
  ${props => props.$size === 'XL' && `font-size: 14px`}
  ${({$isDone}) => $isDone && `
    text-decoration: line-through;
    color: grey;
  ` }
`

  // 寫法 1： font-size: ${({size}) => size === 'XL' ? '20px' : '2px' }; 
  // 寫法 2：

const TodoButtonWrapper = styled.div``
const Button = styled.button`
  padding: 4px;
  color: ${ ({theme}) => theme.colors.primary_500 };
  font-size: 30px;

  &:hover {
    color: red;
  }

  & + & {
    margin-left: 10px;
  }

  ${MEDIA_QUERY_MD}{ 
    font-size: 20px;
  }

  ${MEDIA_QUERY_LG}{ 
    font-size: 10px;
  }

`


export default class TodoItemC extends React.Component{
    constructor(props){
        super(props)
        this.handleToggleClick = this.handleToggleClick.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    handleToggleClick() {
        const {handleToggledIsDone, todo} = this.props
        handleToggledIsDone(todo.id)
    }

    handleDeleteClick() {
        const {handleDeleteTodo, todo} = this.props
        handleDeleteTodo(todo.id)
    }

    render() {
        const {
            size, 
            todo, 
            handleDeleteTodo, 
            handleToggledIsDone            
        } = this.props

        return (
            <TodoItemWrapper data-todo-id={todo.id}>
            <TodoContent $isDone={todo.isDone} $size={size}>{todo.content}</TodoContent>
            <TodoButtonWrapper>
                <Button onClick={this.handleToggleClick}>
                  {todo.isDone ?  '改成未完成' : '改成已完成' }
              </Button>
              <Button onClick={this.handleDeleteClick}>刪除</Button>
            </TodoButtonWrapper>
          </TodoItemWrapper>          
        )
    }
}

// export default function TodoItem({
//     size, 
//     todo, 
//     handleDeleteTodo, 
//     handleToggledIsDone 
// }){

//     const handleToggleClick = () =>{
//         handleToggledIsDone(todo.id);
//     }
//     const handleDeleteClick = () =>{
//         handleDeleteTodo(todo.id);
//     }


//     return (
//       <TodoItemWrapper data-todo-id={todo.id}>
//         <TodoContent $isDone={todo.isDone} $size={size}>{todo.content}</TodoContent>
//         <TodoButtonWrapper>
//             <Button onClick={handleToggleClick}>
//               {todo.isDone ?  '改成未完成' : '改成已完成' }
//           </Button>
//           <Button onClick={handleDeleteClick}>刪除</Button>
//         </TodoButtonWrapper>
//       </TodoItemWrapper>
//     )
//   }
