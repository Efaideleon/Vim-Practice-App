import { useState } from 'react'

export default function CreateActivity({ addActivity }) {
    const [input_value, setInputValue] = useState("")
    const [number_of_session, setNumberOfSessions] = useState(0)
    const [input_sessions, setInputSession] = useState([])


    function handleSubmit(e) {
        e.preventDefault()
        if (input_value) {
            addActivity({ name: input_value, id: crypto.randomUUID(), total_time: 5 })
        }
        setInputValue("")
    }

    function addSession(e) {
        e.preventDefault()
        setNumberOfSessions(prevNumber => Math.max(0, prevNumber + 1))
        setInputSession(prevInputSession => [...prevInputSession, {element: <input></input>, id: crypto.randomUUID()}])
    }

    function removeSession(e) {
        e.preventDefault()
        setNumberOfSessions(prevNumber => Math.max(0, prevNumber - 1))
        setInputSession(prevInputSession => [...prevInputSession.slice(0, -1)])
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input value={input_value} onChange={(e) => setInputValue(e.target.value)}></input>
                <p>Sessions {number_of_session}</p>
                <div>{
                    input_sessions.map((session) => <div key={session.id}>{session.element}</div>)
                }</div>
                <button onClick={addSession}>+</button>
                <button onClick={removeSession}>-</button>
                <div><button>Create</button></div>
            </form>
        </>
    )
}