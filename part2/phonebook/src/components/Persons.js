const Persons = ({ persons, searchName }) => {
    function checkName(person) {
        const nameMatches = person.name.toLowerCase().includes(searchName.toLowerCase())
        return nameMatches
    }

    const personsToShow = searchName === '' ? persons : persons.filter(checkName)

    return (
        <div>
            {personsToShow.map(person => <p key={person.id}>{person.id} {person.name} {person.number}</p>)}
            {personsToShow.length === 0 ? 'there is no match to your search' : ''}
        </div>
    )
}

export default Persons