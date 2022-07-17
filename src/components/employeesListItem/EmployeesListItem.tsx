import {useState} from "react";

import './styles.css';

interface EmployeesListItemProps {
  name: string
  salary: number
  onDelete: () => void
}

const EmployeesListItem = (props: EmployeesListItemProps) => {
  const {name, salary, onDelete} = props
  const [increase, setIncrease] = useState(false)
  const [like, setLike] = useState(false)

  const onIncrease = () => {
    setIncrease(!increase)
  }

  const onLike = () => {
    setLike(!like)
  }

  return (
    <li
      className={`list-group-item d-flex justify-content-between 
      ${increase ? 'increase' : ''} 
      ${like ? 'like' : ''}`}
    >
      <span className="list-group-item-label" onClick={onLike}>{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
      <div className='d-flex justify-content-center align-items-center'>
        <button type="button" className="btn-cookie btn-sm" onClick={onIncrease}>
          <i className="fas fa-cookie"/>
        </button>
        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fas fa-trash"/>
        </button>
        <i className="fas fa-star"/>
      </div>
    </li>
  )
}

export default EmployeesListItem;
