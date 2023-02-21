import React from 'react'
import Button from './Button'
import '../styles/CardStyle.scss'


function TodoListItem({ todo, dispatch }) {
    return (
        <div className='myCard d-flex justify-content-between mt-2'>
            <div className='d-flex'>
                <input type='checkbox' onChange={() => dispatch({ type: 'setStatus', payload: { id: todo.id } })} checked={todo.status} />
                <p className='m-2'>{todo.text}</p>
            </div>
            <Button color='white' bgColor='red' text='X' onClick={() => dispatch({ type: 'delete', payload: { id: todo.id } })} />
        </div>
    )
}

export default TodoListItem;