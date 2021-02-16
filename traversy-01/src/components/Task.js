import { FaTimes } from 'react-icons/fa'

const Task = ({treat, onDelete}) => {
  return (
    <div className="task">
      <h3>
        {treat.text} {' '} 
        <FaTimes 
          style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(treat.id)} 
        />
      </h3>
      <p>{treat.day}</p>
    </div>
  )
}

export default Task
