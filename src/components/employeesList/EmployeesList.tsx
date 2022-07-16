import EmployeesListItem from "../employeesListItem/EmployeesListItem";

import './styles.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem/>
            <EmployeesListItem/>
            <EmployeesListItem/>
        </ul>
    )
}

export default EmployeesList;
