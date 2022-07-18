import "./styles.css";

interface AppFilterProps {
  setFilter: (name: string) => void
  filter: string
}

const AppFilter = (props: AppFilterProps) => {
  const {filter, setFilter} = props

  const buttons = [
    {name: 'all', label: 'Все сотрудники'},
    {name: 'rise', label: 'На повышение'},
    {name: 'salary', label: 'З/П больше 1000$'}
  ]

  return (
    <div className="btn-group">
      {buttons.map(({name, label}) =>
        <button
          key={name}
          type="button"
          className={`btn ${filter === name ? 'btn-light' : 'btn-outline-light'}`}
          onClick={() => setFilter(name)}
        >
          {label}
        </button>
      )}
    </div>
  )
}

export default AppFilter;
