import { FaTimes } from 'react-icons/fa'

const Task = ({treat, onDelete, onToggle}) => {
  return (
    <div className={`task ${treat.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(treat.id)}>
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
