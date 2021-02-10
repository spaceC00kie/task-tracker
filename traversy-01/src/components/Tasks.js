const Tasks = ({spoons}) => {
  return (
    <>
      {spoons.map((spoon) => (
        <h3 key={spoon.id}>{spoon.text}</h3>
      ))}
    </>
  )
}

export default Tasks
