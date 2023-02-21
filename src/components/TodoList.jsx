import React, { useContext, useState } from 'react'
import TodoListItem from './TodoListItem'
import "../styles/ButtonStyle.scss"


function TodoList(props) {
    if (props.todos.length !== 0) {
        if (props.filter === null) {
            return (
                <div>
                    {props.todos.map((el) => {
                        return <TodoListItem todo={el} dispatch={props.dispatch} />
                    })}
                </div>
            )
        } else if (props.filter) {
            return (
                <div>
                    {props.todos.map((el) => {
                        return el.status && <TodoListItem todo={el} dispatch={props.dispatch} />
                    })}
                </div>
            )
        } else if (!props.filter) {
            return (
                <div>
                    {props.todos.map((el) => {
                        return !el.status && <TodoListItem todo={el} dispatch={props.dispatch} />
                    })}
                </div>
            )
        }
    } else {
        return <p className='text-muted text-center mt-3 mb-3'>Empty.</p>
    }

}

export default TodoList;