import React from 'react'
import { MusicPanel } from './MusicPanel'
import { TodoPanel } from './TodoPanel'



export const ActionPanelRight = () => {
    return (
        <div className='action-panel'>
            <MusicPanel />
            <TodoPanel />
        </div>
    )
}
