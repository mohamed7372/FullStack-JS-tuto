import Number from './Number'

const Persons = ({ search, persons }) => {
    const allPerson = persons.map(person => <Number key={person.id} person={person}/>)

    const searchPerson = persons
        .filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
        .map(person => <Number key={person.id} person={person}/>)

    return (  
        <>
            {search === '' ? (allPerson):(searchPerson)}
        </>
    );
}
 
export default Persons;