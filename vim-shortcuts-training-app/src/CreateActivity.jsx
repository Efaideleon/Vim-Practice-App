import { useState } from 'react'

export default function CreateActivity({ addActivity }) {
    const [input_value, setInputValue] = useState("")
    const [input_session, setInputSession] = useState("")
    const [sessions, setSessions] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        if (input_value) {
            addActivity({ name: input_value, id: crypto.randomUUID(), sessions: sessions, total_time: 5 })
        }
        setInputValue("")
    }

    function addToSessionList(e) {
        e.preventDefault()
        setSessions(prevSessions => { return [...prevSessions, { name: input_session, id: crypto.randomUUID() }] })
        console.log("sessions: ", sessions);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input value={input_value} onChange={(e) => setInputValue(e.target.value)}></input>
                <p>Add Sessions: </p>
                <div>
                    <input value={input_session} onChange={(e) => setInputSession(e.target.value)}></input>
                    <button onClick={addToSessionList}>+</button>
                </div>
                <div>Added:</div>
                {
                    sessions.map((session) => <div key={session.id}>{session.name}</div>)
                }
                <div><button>Create</button></div>
            </form>
        </>
    )
}