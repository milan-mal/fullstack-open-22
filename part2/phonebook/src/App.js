import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      id: 0,
      number: '+420 603 521 890',
    },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setnewNumber] = useState('')

  const nameDuplicityCheck = (checkName) => {
    const isDuplicate = persons.some((person) => person.name === checkName)
    return isDuplicate
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setnewNumber(event.target.value)
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
      setnewNumber('')
      return
    }
    alert(`${newName} is already added to phonebook`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map(person => <p key={person.id}>{person.id} {person.name} {person.number}</p>)}

      </div>
    </div>
  )
}

export default App;
