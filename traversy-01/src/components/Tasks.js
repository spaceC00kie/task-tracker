import Task from "./Task"

const Tasks = ({spoons}) => {
  return (
    <>
      {spoons.map((spoon) => (
        <Task key={spoon.id} spoon={spoon.text} />
      ))}
    </>
  )
}

export default Tasks
