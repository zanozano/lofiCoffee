import React from 'react'
import musicIcon from '../assets/music-icon.svg'
import todoIcon from '../assets/todo-icon.svg'


export const ActionPanelRight = () => {
    return (
        <div className='action-panel'>
            <div className='panel music-panel'>
                <img src={musicIcon} alt='music icon' width='44px' />
                <p>
                    Music
                </p>
            </div>
            <div className='panel todo-panel'>
                <img src={todoIcon} alt='music icon' width='44px' />
                <p>
                    Todo List
                </p>
            </div>
        </div>
    )
}
