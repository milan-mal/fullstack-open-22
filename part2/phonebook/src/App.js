import { useState, useEffect } from 'react'

import Notification from './components/Notification'
import NotificationError from './components/NotificationError'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import contactService from './services/contacts'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [message, setMessage] = useState(null)
  const [messageError, setErrorMessage] = useState(null)

  useEffect(() => {
    contactService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <NotificationError messageError={messageError} />
      <Filter searchName={searchName} setSearchName={setSearchName} />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        setMessage={setMessage}
        setErrorMessage={setErrorMessage}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} searchName={searchName} />
    </div>
  )
}

export default App;