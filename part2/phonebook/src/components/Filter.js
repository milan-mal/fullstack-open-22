const Filter = ({ searchName, setSearchName }) => {
  const handleSearchName = (event) => {
    setSearchName(event.target.value)
  }

  return (
    <div>
      filter shown with <input
        value={searchName}
        onChange={handleSearchName}
      />
    </div>
  )
}

export default Filter