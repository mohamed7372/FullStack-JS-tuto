const Persons = ({ persons, handleDeletePerson }) => {
    return (  
        <>
            {persons.map(person =>
                <div key={person.id}>
                    <span>{person.name} {person.number}</span>
                    <button onClick={() => handleDeletePerson(person.id, person.name)}>delete</button>
                </div>
            )}
        </>
    );
}

export default Persons;