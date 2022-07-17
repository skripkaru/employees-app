import {ChangeEvent, useState} from "react";
import { v4 as uuid } from 'uuid';

import './styles.css';

interface IEmployee {
  id: string
  name: string
  salary: number
  increase: boolean
}

interface EmployeesAddFormProps {
  onCreate: (item: IEmployee) => void
}

const EmployeesAddForm = (props: EmployeesAddFormProps) => {
  const {onCreate} = props
  const [name, setName] = useState<string>('')
  const [salary, setSalary] = useState<number>(0)

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    let newEmployee = {
      id: uuid(),
      name,
      salary,
      increase: false
    }

    onCreate(newEmployee)

    setName('')
    setSalary(0)
  }


  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form className="add-form d-flex" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="form-control new-post-label"
          placeholder="Как его зовут?"
        />
        <input
          type="number"
          name="salary"
          value={salary}
          // @ts-ignore
          onChange={e => setSalary(e.target.value)}
          className="form-control new-post-label"
          placeholder="З/П в $?"
        />

        <button type="submit" className="btn btn-outline-light">Добавить</button>
      </form>
    </div>
  )
}

export default EmployeesAddForm;
