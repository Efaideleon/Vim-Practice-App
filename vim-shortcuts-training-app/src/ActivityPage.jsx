import { useState, useEffect } from 'react'

export default function ActivityPage({ stopActivity, currentActivity }) {
    const [current_time, setCurrentTime] = useState(currentActivity.total_time)
    const [is_time_running, setIsTimeRunning] = useState(false)

    useEffect(() => {
        if (is_time_running) {
            const timer = setInterval(() => {
                setCurrentTime(prev_time => Math.max(0, prev_time - 1))
            }, 1000)
            return () => clearInterval(timer)
        }
    }, [is_time_running])

    return (
        <>
            <div><h1>{currentActivity.name}</h1></div>
            <div>Time: {current_time}</div>
            <div>
                <button onClick={() =>setIsTimeRunning(true)}>Start Time</button>
            </div>
            <div>
                <button onClick={() => setIsTimeRunning(false)}>Stop Time</button>
            </div>
            <div>{current_time === 0 ? "Done" : ""}</div>
            <button onClick={stopActivity}>Stop Activity</button>
        </>
    )
}