import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      id: 0
    },
  ])
  const [newName, setNewName] = useState('')

  const nameDuplicityCheck = (checkName) => {
    const isDuplicate = persons.some((person) => person.name === checkName)
    return isDuplicate
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log('newName', newName);
    if (!nameDuplicityCheck(newName)) {
      const newPerson = {
        name: newName,
        id: persons.length
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
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
          <button type='submit' >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <p key={person.id}>{person.id}, {person.name}</p>)}

      </div>
    </div>
  )
}

export default App;
