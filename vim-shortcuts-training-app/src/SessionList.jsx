import { useCurrentSession } from './CurrentSessionProvider'
import "./SessionList.css"

export default function SessionList({ currentActivity }) {
    return (
        <>
            <div><h3>Sessions:</h3></div>
            <div>{currentActivity.sessions.map((session) => <p key={session.id} className={session === useCurrentSession() ? "active-session" : ""}>Name: {session.name} Time: {session.time}</p>)}
            </div>
        </>
    )
}