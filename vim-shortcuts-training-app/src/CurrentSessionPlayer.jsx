import { useState, useEffect } from "react"
import { useUpdateCurrentSession } from "./CurrentSessionProvider"

export default function CurrentSessionPlayer({ currentActivity }) {
    const [current_time, setCurrentTime] = useState(currentActivity.sessions[0].time)
    const [is_time_running, setIsTimeRunning] = useState(false)
    const [current_session, setCurrentSession] = useState(currentActivity.sessions[0].name)
    const [index, setIndex] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)
    const sessionLength = currentActivity.sessions.length
    const updateSession = useUpdateCurrentSession()


    function startTime() {
        setHasStarted(true)
        setCurrentTime(currentActivity.sessions[0].time)
        setIsTimeRunning(true)
    }

    useEffect(() => {
        if (is_time_running) {
            const timer = setInterval(() => {
                setCurrentTime(prev_time => Math.max(0, prev_time - 1))
                if (current_time === 0) {
                    setIndex(prevIndex => prevIndex + 1)
                    setIsTimeRunning(false)
                }
            }, 1000)
            return () => clearInterval(timer)
        }
    }, [is_time_running, current_time, index])

    useEffect(() => {
        if (index < sessionLength && hasStarted) {
            setCurrentSession(currentActivity.sessions[index].name)
            updateSession(currentActivity.sessions[index])
            setCurrentTime(currentActivity.sessions[index].time)
            setIsTimeRunning(true)
        }
        else{
            setIsTimeRunning(false)
        }
    }, [index, hasStarted])

    return (
        <>
            <div><h1>{currentActivity.name}</h1></div>
            <div><h3>Current Session:</h3> <p>Name: {current_session} Time: {current_time}</p></div>
            <div>
                <button onClick={startTime}>Start Time</button>
            </div>
            <div>
                <button onClick={() => setIsTimeRunning(false)}>Stop Time</button>
            </div>
            <div>{current_time === 0 ? "Done" : ""}</div>
        </>
    )
}