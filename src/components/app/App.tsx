import AppInfo from '../appInfo/AppInfo';
import SearchPanel from '../searchPanel/SearchPanel';
import AppFilter from '../appFilter/AppFilter';
import EmployeesList from '../employeesList/EmployeesList';
import EmployeesAddForm from '../employeesAddForm/EmployeesAddForm';

import './styles.css';

function App() {
  return (
    <div className="app">
      <AppInfo/>
      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployeesList/>
      <EmployeesAddForm/>
    </div>
  );
}

export default App;
