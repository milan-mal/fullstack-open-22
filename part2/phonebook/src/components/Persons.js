import contactService from "../services/contacts"

const Persons = ({ persons, setPersons, searchName }) => {
    function checkName(person) {
        const nameMatches = person.name.toLowerCase().includes(searchName.toLowerCase())
        return nameMatches
    }

    const personsToShow = searchName === '' ? persons : persons.filter(checkName)

    const handleClickDelete = (personId, personName) => {
        if (window.confirm(`Delete ${personName}?`)) {
            contactService
                .remove(personId)
                .then(setPersons(persons.filter( n => n.id !== personId)))
        }
    }

    function renderPersons() {
        switch (personsToShow.length) {
            case 0:
                return <p>There is no match to your search.</p>
            default:
                return personsToShow.map(person =>
                    <p key={person.id}>
                        {person.id} {person.name} {person.number}
                        <button onClick={() => handleClickDelete(person.id, person.name)} >delete</button>
                    </p>)
        }
    }

    return (
        <div>
            {renderPersons()}
        </div>
    )
}

export default Persons