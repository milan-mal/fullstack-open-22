import contactService from '../services/contacts'

const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, persons, setPersons }) => {
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const nameDuplicityCheck = (checkName) => {
      const isDuplicate = persons.some((person) => person.name === checkName)
      return isDuplicate
    }
    
    const addPerson = (event) => {
        event.preventDefault()
        console.log('newName: ', newName,', newNumber: ', newNumber);
        if (!nameDuplicityCheck(newName)) {
        const newPerson = {
            name: newName,
            //id: persons.length + 1,   // commented out to make the server add the id 
            number: newNumber,
        }

        // Send the new contact to the server:
        contactService
            .create(newPerson)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
            })
        return
        }
        alert(`${newName} is already added to phonebook`)
    }

    return(
        <div>
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
      </div>
    )
}

export default PersonForm