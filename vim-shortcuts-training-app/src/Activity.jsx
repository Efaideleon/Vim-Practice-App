import "./ActivityStyle.css"

export default function Activity({ activity, startActivity }) {
    return (
        <div className="activity-container">
            <h1>{activity.name}</h1>
            <h3>{activity.total_time}</h3>
            <button onClick={() => startActivity(activity.id)}>Start Activity</button>
        </div>
    )
}