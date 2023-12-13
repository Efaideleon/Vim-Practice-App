import { useState } from 'react'

export default function CreateActivity({ addActivity }) {
    const [input_value, setInputValue] = useState("")
    const [input_session, setInputSession] = useState("")
    const [sessions, setSessions] = useState([])
    const [input_time, setInputTime] = useState("")
    const [added_time, setAddedTime] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (input_value) {
            addActivity({ name: input_value, id: crypto.randomUUID(), sessions: sessions, total_time: added_time })
        }
        setInputValue("")
        setSessions([])
        setInputSession("")
        setInputTime("")
    }

    function addToSessionList(e) {
        e.preventDefault()
        setSessions(prevSessions => { return [...prevSessions, { name: input_session, id: crypto.randomUUID() }] })
        console.log("sessions: ", sessions);
    }

    function setTotalAddedTime(e){
        e.preventDefault()
        setAddedTime(input_time)
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

                <div>
                    <input value={input_time} onChange={(e) => setInputTime(e.target.value)}></input>
                    <button onClick={setTotalAddedTime}>+</button>
                </div>
                
                <div>Added:</div>
                {
                    sessions.map((session) => <div key={session.id}>{session.name}</div>)
                }
                <div>Time: {added_time}</div>
                <div><button>Create</button></div>
            </form>
        </>
    )
}