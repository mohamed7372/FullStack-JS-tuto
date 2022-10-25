import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNewPhone = event => {
    event.preventDefault();
    
    // check if this phone name does not exist
    let find_idx = persons.findIndex(person => person.name === newName)
    console.log(find_idx);
    if (find_idx !== -1) 
      alert(`${newName} is already added to phonebook`)
    else {
      const newNameObject = {
        name: newName,
      }
      setPersons(persons.concat(newNameObject));
    }
    setNewName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNewPhone}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <Number key={person.name} person={person}/>)}
    </div>
  )
}

export default App

const Number = ({person}) => <>{person.name}<br/></>