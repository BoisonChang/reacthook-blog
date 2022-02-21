import styled from 'styled-components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from './constants/style'
import React from 'react';

const TodoItemWrapper = styled.div`
    max-width:500px;
    display:flex;
	margin:0 -3rem 4px;
	padding:1.1rem 3rem;
	justify-content:space-between;
	align-items:center;
	background:rgba(255,255,255,0.1);
`

const TodoContent = styled.div`  
    color: white;
    font-size: 24px;
    ${props => props.$size === 'XL' && `font-size: 28px`}
    ${({$isDone}) => $isDone && `
        text-decoration: line-through;
        color: #afadad;
    ` }
`
  // 寫法 1： font-size: ${({size}) => size === 'XL' ? '20px' : '2px' }; 
  // 寫法 2：

const TodoButtonWrapper = styled.div``
const Button = styled.button`
    color: white;
    background-color: rgba(255,255,255,0.1);
    padding: 10px 12px;
    border:1px solid white;
    ${({$isDone}) => $isDone && `
        color: #af0505;
    ` }
    

    &:hover {
        color: ${ ({theme}) => theme.colors.primary_500 };
    }

    & + & {
        margin-left: 10px;
    }

    ${MEDIA_QUERY_MD}{ 
        font-size: 14px;
    }

    ${MEDIA_QUERY_LG}{ 
        font-size: 16px;
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
                    <Button $isDone={todo.isDone} onClick={this.handleToggleClick}>
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
