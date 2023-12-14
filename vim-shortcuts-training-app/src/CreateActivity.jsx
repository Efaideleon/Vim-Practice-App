import { useState } from 'react'
import "./CreateActivity.css"

export default function CreateActivity({ addActivity }) {
    const [input_value, setInputValue] = useState("")
    const [input_session, setInputSession] = useState("")
    const [sessions, setSessions] = useState([])
    const [input_time, setInputTime] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (input_value) {
            addActivity({ name: input_value, id: crypto.randomUUID(), sessions: sessions })
        }
        setInputValue("")
        setSessions([])
        setInputSession("")
        setInputTime("")
    }

    function addToSessionList(e) {
        e.preventDefault()
        setSessions(prevSessions => { return [...prevSessions, { name: input_session, id: crypto.randomUUID(), time: input_time }] })
    }
    return (
        <>
            <form className={"create-activity-form"} onSubmit={handleSubmit}>
                <label>Name</label>
                <input value={input_value} onChange={(e) => setInputValue(e.target.value)}></input>
                <div>
                    <label htmlFor='session-input'>Session: </label>
                    <input value={input_session} onChange={(e) => setInputSession(e.target.value)} id='session-input'></input>
                    <label htmlFor='time-input'>Time: </label>
                    <input value={input_time} onChange={(e) => setInputTime(e.target.value)} id='time-input'></input>
                    <button onClick={addToSessionList}>+</button>
                </div>

                <div>Sessions Added:</div>
                {
                    sessions.map((session) => <div key={session.id}>
                        Name: {session.name} Time: {session.time}
                    </div>)
                }
                <div><button>Create</button></div>
            </form>
        </>
    )
}