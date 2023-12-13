import Activity from "./Activity";
import ActivityPage from "./ActivityPage";
import "./styles.css"
import { useState } from "react";
import CreateActivity from "./CreateActivity";

export default function App() {
  const [currentActivity, setCurrentActivity] = useState("")
  const [isActivityRunning, setIsActivityRunning] = useState(false)
  const [activities, setActivities] = useState([])

  function startActivity(id) {
    activities.map((activity) => {
      if (activity.id === id) {
        setCurrentActivity(activity)
      }
    })
    setIsActivityRunning(true)
  }

  function stopActivity() {
    setIsActivityRunning(false)
  }

  function addActivity(activity){
    setActivities(prevActivities => {
      return [...prevActivities, activity]
    })
  }

  function deleteActivity(id) {
    setActivities(prevActivities => prevActivities.filter(activity => activity.id !== id))
  }

  return (
    <>
      <h1>Daily Activities</h1>
      {!isActivityRunning &&
        <>
          <CreateActivity addActivity={addActivity}/>
          {activities.map((activity) => {
            return (
              <Activity key={activity.id} activity={activity} startActivity={startActivity} deleteActivity={deleteActivity} />
            )
          })}
        </>
      }

      {isActivityRunning && <ActivityPage stopActivity={stopActivity} currentActivity={currentActivity} />}
    </>
  )
}