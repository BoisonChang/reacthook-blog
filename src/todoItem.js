import styled from 'styled-components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from './constants/style'


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
  ${props => props.size === 'XL' && `font-size: 14px`}
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



export default function TodoItem({size, todo, handleDeleteTodo }){
    return (
      <TodoItemWrapper data-todo-id={todo.id}>
        <TodoContent size={size}>{todo.content}</TodoContent>
        <TodoButtonWrapper>
          <Button>已完成</Button>
          <Button onClick={()=>{
              handleDeleteTodo(todo.id)
          }}>刪除</Button>
        </TodoButtonWrapper>
      </TodoItemWrapper>
    )
  }
