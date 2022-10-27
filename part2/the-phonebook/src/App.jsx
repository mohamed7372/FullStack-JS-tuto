import { useState } from 'react'

import Number from './components/Number'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const [search, setSearch] = useState('')

  const handleNewPhone = event => {
    event.preventDefault();
    
    // check if this phone name does not exist
    let find_idx = persons.findIndex(person => person.name === newName)
    
    if (find_idx !== -1) 
      alert(`${newName} is already added to phonebook`)
    else {
      const newNameObject = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(newNameObject));
    }
    setNewName('');
    setNewNumber('');
  }

  const allPerson = persons.map(person => <Number key={person.id} person={person}/>)

  const searchPerson = persons
    .filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    .map(person => <Number key={person.id} person={person}/>)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={search} onChange={(event) => setSearch(event.target.value)}/>
      </div>
      <h2>add a new</h2>
      <form onSubmit={handleNewPhone}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {search === '' ? (allPerson):(searchPerson)}
    </div>
  )
}

export default App;