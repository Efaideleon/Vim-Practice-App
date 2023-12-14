import { useState, useEffect } from 'react'
import "./ActivityPage.css"
import CurrentSessionPlayer from './CurrentSessionPlayer'
import SessionList from './SessionList'
import { CurrentSessionProvider } from './CurrentSessionProvider'

export default function ActivityPage({ stopActivity, currentActivity }) {
    return (
        <>
            <div className='activity-form'>
                <CurrentSessionProvider>
                    <CurrentSessionPlayer currentActivity={currentActivity} />
                    <SessionList currentActivity={currentActivity} />
                </CurrentSessionProvider>
                <button onClick={stopActivity}>Stop Activity</button>
            </div>
        </>
    )
}