const Filter = ({ searchCountry, setSearchCountry }) => {
  const handleSearchCountry = (event) => {
    setSearchCountry(event.target.value)
  }

  return (
    <div>
      find countries <input
        value={searchCountry}
        onChange={handleSearchCountry}
      />
    </div>
  )
}

export default Filter