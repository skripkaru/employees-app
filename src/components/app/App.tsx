import {useState} from "react";

import {AppFilter, AppInfo, EmployeesAddForm, EmployeesList, SearchPanel} from "../index";

import './styles.css';

interface IEmployee {
  id: string
  name: string
  salary: number
  increase: boolean
}

const data = [
  {id: '1', name: 'Alex Cross', salary: 3000, increase: false},
  {id: '2', name: 'John Smith', salary: 2000, increase: true},
  {id: '3', name: 'Mary White', salary: 1500, increase: false}
]

function App() {
  const [employees, setEmployees] = useState<IEmployee[]>(data)

  const onDelete = (id: string) => {
    setEmployees(employees.filter(item => item.id !== id))
  }

  const onCreate = (item: IEmployee) => {
    setEmployees(employees => [...employees, item])
  }

  return (
    <div className="app">
      <AppInfo/>
      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployeesList data={employees} onDelete={onDelete}/>
      <EmployeesAddForm onCreate={onCreate}/>
    </div>
  );
}

export default App;
