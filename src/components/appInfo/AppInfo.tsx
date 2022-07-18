import "./styles.css";

interface AppInfoProps {
  companyName: string,
  totalEmployees: number,
  increaseEmployees: number
}

const AppInfo = (props: AppInfoProps) => {
  const {companyName, totalEmployees, increaseEmployees} = props

  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании {companyName}</h1>
      <h2>Общее число сотрудников: {totalEmployees}</h2>
      <h2>Премию получат: {increaseEmployees}</h2>
    </div>
  )
}

export default AppInfo;
