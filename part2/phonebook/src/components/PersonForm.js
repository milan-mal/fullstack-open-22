import contactService from '../services/contacts'

const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, persons, setPersons, setMessage, setErrorMessage }) => {
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const nameDuplicityCheck = (checkName) => {
      const isDuplicate = persons.some((person) => person.name.toLowerCase() === checkName.toLowerCase())
      return isDuplicate
    }
    
    const addPerson = (event) => {
        event.preventDefault()
        console.log('newName: ', newName,', newNumber: ', newNumber);

        if (!nameDuplicityCheck(newName)) {
        const newPerson = {
            name: newName,
            number: newNumber,
        }
        // Send the new contact to the server:
        contactService
            .create(newPerson)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                // Set a success message:
                setMessage(`Added ${newName}.`)
                setTimeout(() => setMessage(null), 5000)
                setNewName('')
                setNewNumber('')
            })
            .catch(err => {
                console.log(err.response.data.error)
                setErrorMessage(err.response.data.error)
            })
        
        return
        }
        //TODO If the name already exists, update their phone number:
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
            const duplicitNameObject = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase())
            console.log((`id: ${duplicitNameObject.id}, number: ${newNumber}`));
            contactService
                .update(duplicitNameObject.id, newNumber)
                .then(returnedPerson => {
                    setPersons(persons.map( person => person.id === duplicitNameObject.id ? returnedPerson : person))
                    // Set an error message:
                    setMessage(`${newName}'s number has been updated.`)
                    setTimeout(() => setMessage(null), 5000)
                    setNewName('')
                    setNewNumber('')
                })
                .catch(error => {
                    setErrorMessage(`Person ${newName} was already deleted from the server.`)
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 5000)
                  setPersons(persons.filter(n => n.id !== duplicitNameObject.id))
                })
            return
        }
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