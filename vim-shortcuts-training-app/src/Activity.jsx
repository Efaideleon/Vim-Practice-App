import "./ActivityStyle.css"

export default function Activity({ activity, startActivity }) {
    console.log(activity.sessions);

    return (
        <div className="activity-container">
            <h1>Name: {activity.name}</h1>
            <h3>Time: {activity.total_time}</h3>
            <h3><div>
                <h3>Sessions: </h3>
                {activity.sessions.map((session) => {
                    return (
                        <div key={session.id}>{session.name}</div>
                    )
                })}
            </div></h3>
            <button onClick={() => startActivity(activity.id)}>Start Activity</button>
        </div>
    )
}