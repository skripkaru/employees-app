import './styles.css';

interface SearchPanelProps {
  setSearch: (e: any) => void
  search: string
}

const SearchPanel = (props: SearchPanelProps) => {
  const {search, setSearch} = props

  return (
    <input
      onChange={e => setSearch(e.target.value)}
      value={search}
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
    />
  )
}

export default SearchPanel;
