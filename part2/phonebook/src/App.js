import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  const nameDuplicityCheck = (checkName) => {
    const isDuplicate = persons.some((person) => person.name === checkName)
    return isDuplicate
  }

  const personsToShow = searchName === '' ? persons : persons.filter(checkName)

  function checkName(person) {
    const nameMatches = person.name.toLowerCase().includes(searchName.toLowerCase())
    return nameMatches
  }

  const handleSearchName = (event) => {
    setSearchName(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log('newName: ', newName,', newNumber: ', newNumber);
    if (!nameDuplicityCheck(newName)) {
      const newPerson = {
        name: newName,
        id: persons.length,
        number: newNumber,
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
      return
    }
    alert(`${newName} is already added to phonebook`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with <input
            value={searchName}
            onChange={handleSearchName}
          />
        </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson} >
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type='submit' >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {personsToShow.map(person => <p key={person.id}>{person.id} {person.name} {person.number}</p>)}
        {personsToShow.length === 0 ? 'there is no match to your search' : ''}
      </div>
    </div>
  )
}

export default App;
