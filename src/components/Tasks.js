import Task from "./Task"

const Tasks = ({ spoons, onDelete, onToggle }) => {
  return (
    <div className="tasks">
      {spoons.map(spoon => (
        <Task
          key={spoon.id}
          treat={spoon}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  )
}

export default Tasks
