import Task from "./Task"

const Tasks = ({spoons, onDelete}) => {
  return (
    <>
      {spoons.map((spoon) => (
        <Task key={spoon.id} treat={spoon} onDelete={onDelete}/>
      ))}
    </>
  )
}

export default Tasks
