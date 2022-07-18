import {useState} from "react";

import {AppFilter, AppInfo, EmployeesAddForm, EmployeesList, SearchPanel} from "../index";

import './styles.css';

interface IEmployee {
  id: string
  name: string
  salary: number
  rise: boolean
  increase: boolean
}

const data = [
  {id: '1', name: 'Alex Cross', salary: 3000, rise: false, increase: true},
  {id: '2', name: 'John Smith', salary: 1500, rise: true, increase: false},
  {id: '3', name: 'Mary White', salary: 800, rise: true, increase: false}
]

function App() {
  const [employees, setEmployees] = useState<IEmployee[]>(data)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const deleteEmployee = (id: string) => {
    setEmployees(employees.filter(item => item.id !== id))
  }

  const createEmployee = (item: IEmployee) => {
    setEmployees(employees => [...employees, item])
  }

  const onToggleRise = (id: string) => {
    setEmployees(employees.map(item => item.id === id ? {...item, rise: !item.rise} : {...item}))
  }

  const onToggleIncrease = (id: string) => {
    setEmployees(employees.map(item => item.id === id ? {...item, increase: !item.increase} : {...item}))
  }

  const searchEmployee = (items: IEmployee[], searchValue: string) => {
    if (searchValue && searchValue !== '') {
      return items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
    } else {
      return items
    }
  }

  const filterEmployee = (items: IEmployee[], filter: string) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise)
      case 'salary':
        return items.filter(item => item.salary > 1000)
      default:
        return items
    }
  }

  const companyName = 'N'
  const totalEmployees = employees.length
  const increaseEmployees = employees.filter(item => item.increase).length
  const filteredEmployees = filterEmployee(searchEmployee(employees, search),filter)

  return (
    <div className="app">
      <AppInfo
        companyName={companyName}
        totalEmployees={totalEmployees}
        increaseEmployees={increaseEmployees}
      />
      <div className="search-panel">
        <SearchPanel search={search} setSearch={setSearch}/>
        <AppFilter filter={filter} setFilter={setFilter}/>
      </div>
      <EmployeesList
        data={filteredEmployees}
        onDelete={deleteEmployee}
        onToggleRise={onToggleRise}
        onToggleIncrease={onToggleIncrease}
      />
      <EmployeesAddForm onCreate={createEmployee}/>
    </div>
  );
}

export default App;
