import EmployeesListItem from "../employeesListItem/EmployeesListItem";

import './styles.css';

interface IEmployee {
  id: string
  name: string
  salary: number
  rise: boolean
  increase: boolean
}

interface EmployeesListProps {
  data: IEmployee[]
  onDelete: (id: string) => void
  onToggleRise: (id: string) => void
  onToggleIncrease: (id: string) => void
}

const EmployeesList = (props: EmployeesListProps) => {
  const {data, onDelete, onToggleRise, onToggleIncrease} = props

  return (
    <ul className="app-list list-group">
      {data.length !== 0 ? data.map(item => {
        const {id, ...itemProps} = item
        return (
          <EmployeesListItem
            key={id}
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleRise={() => onToggleRise(id)}
            {...itemProps}
          />
        )
      }) : <h3>Данные не найдены</h3>}
    </ul>
  )
}

export default EmployeesList;
