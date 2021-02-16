import Task from "./Task"

const Tasks = ({spoons, onDelete, onToggle}) => {
  return (
    <>
      {spoons.map((spoon) => (
        <Task 
          key={spoon.id} 
          treat={spoon} 
          onDelete={onDelete} 
          onToggle={onToggle}
        />
      ))}
    </>
  )
}

export default Tasks
