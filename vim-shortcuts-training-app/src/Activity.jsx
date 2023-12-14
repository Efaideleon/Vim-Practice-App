import "./ActivityStyle.css"

export default function Activity({ activity, startActivity, deleteActivity }) {
    return (
        <div className="activity-container">
            <h1>Name: {activity.name}</h1>
            <h3><div>
                <h3>Sessions: </h3>
                {activity.sessions.map((session) => {
                    return (
                        <div key={session.id}>Name: {session.name} Time: {session.time}</div>
                    )
                })}
            </div></h3>
            <button onClick={() => startActivity(activity.id)}>Start Activity</button>

            <button onClick={() => deleteActivity(activity.id)}>Delete Activity</button>
        </div>
    )
}