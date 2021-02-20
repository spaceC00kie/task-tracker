import { useEffect, useState } from "react"
import AddTask from "./components/AddTask"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [burrito, setBurrito] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setBurrito(tasksFromServer)
    }

    getTasks()
  }, [])

  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setBurrito([...burrito, newTask])
  }

  //delete task
  const deleteTask = (id) => {
    setBurrito(burrito.filter((task) => task.id !==id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setBurrito(
      burrito.map((task) => 
      task.id === id ? { ...task, reminder:
      !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {burrito.length > 0 ? (
        <Tasks spoons={burrito} onDelete=
        {deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks - Relax!'
      )}
    </div>
  )
}

export default App
