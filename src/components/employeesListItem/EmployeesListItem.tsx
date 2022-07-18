import './styles.css';

interface EmployeesListItemProps {
  name: string
  salary: number
  rise: boolean
  increase: boolean
  onDelete: () => void
  onToggleRise: () => void
  onToggleIncrease: () => void
}

const EmployeesListItem = (props: EmployeesListItemProps) => {
  const {name, salary, onDelete, onToggleRise, onToggleIncrease, increase, rise} = props

  return (
    <li
      className={`list-group-item d-flex justify-content-between
      ${increase ? 'increase' : ''}
      ${rise ? 'like' : ''}`}
    >
      <span className="list-group-item-label" onClick={onToggleRise}>{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
      <div className='d-flex justify-content-center align-items-center'>
        <button type="button" className="btn-cookie btn-sm" onClick={onToggleIncrease}>
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
