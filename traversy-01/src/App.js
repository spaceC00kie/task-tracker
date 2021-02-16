import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  const [burrito, setBurrito] = useState([
    {
      id: 1,
      text: "Early meeting",
      day: "March 5 at 8am",
      reminder: true,
    },
    {
      id: 2,
      text: "Weekly grocery shopping",
      day: "March 8 at 6pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Take dog to park",
      day: "March 9 at 7pm",
      reminder: false,
    },
  ])

  //delete task
  const deleteTask = (id) => {
    setBurrito(burrito.filter((task) => task.id !==id))
  }

  return (
    <div className="container">
      <Header />
      {burrito.length > 0 ? <Tasks spoons={burrito} onDelete={deleteTask} /> : 'No Tasks - Relax!'}
    </div>
  )
}

export default App
