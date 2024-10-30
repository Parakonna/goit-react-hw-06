import css from './SearchBox.module.css'

const SearchBox = ({filter, setFilter}) => {
  return (
    <div className={css.searchBox}>Find contacts by name
      <input
        className={css.input}
          type="text"
          placeholder="Enter keyword to search"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        /></div>
  )
}

export default SearchBox