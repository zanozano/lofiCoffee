import React from 'react'
import todoIcon from '../assets/todo-icon.svg'

export const TodoPanel = () => {
    return (
        <div className='panel todo-panel'>
            <img src={todoIcon} alt='music icon' width='44px' />
            <p>
                Todo List
            </p>
        </div>
    )
}
