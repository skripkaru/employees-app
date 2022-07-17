import EmployeesListItem from "../employeesListItem/EmployeesListItem";

import './styles.css';

interface IEmployee {
  id: string
  name: string
  salary: number
  increase: boolean
}

interface EmployeesListProps {
  data: IEmployee[]
  onDelete: (id: string) => void
}

const EmployeesList = (props: EmployeesListProps) => {
  const {data, onDelete} = props

  return (
    <ul className="app-list list-group">
      {data.map(item => {
        const {id, ...itemProps} = item
        return (
          <EmployeesListItem key={id} onDelete={() => onDelete(id)} {...itemProps}/>
        )
      })}
    </ul>
  )
}

export default EmployeesList;
