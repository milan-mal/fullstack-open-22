
import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const[countries, setCountries] = useState([])
  const[searchCountry, setSearchCountry] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
  }, [])

  return (
    <div>
      <Filter searchCountry={searchCountry} setSearchCountry={setSearchCountry} />
      <Countries countries={countries} searchCountry={searchCountry} setSearchCountry={setSearchCountry} />
    </div>
  )
}

export default App;