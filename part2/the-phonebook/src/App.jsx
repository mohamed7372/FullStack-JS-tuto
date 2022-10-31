import { useState,useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3000/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleNewPhone = event => {
    event.preventDefault();
    
    // check if this phone name does not exist
    let find_idx = persons.findIndex(person => person.name === newName)
    
    if (find_idx !== -1) 
      alert(`${newName} is already added to phonebook`)
    else {
      let newId = persons.reduce(
        (max, person) => person.id > max ? person.id : max , 0
      );
      console.log('new id ',newId);
      const newNameObject = {
        name: newName,
        number: newNumber,
        id: ++newId,
      }
      setPersons(persons.concat(newNameObject));
    }
    setNewName('');
    setNewNumber('');
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch} />
      
      <h2>add a new</h2>
      <PersonForm handleNewPhone={handleNewPhone}
        newName={newName} setNewName={setNewName}
        newNumber={newNumber} setNewNumber={setNewNumber} />

      <h2>Numbers</h2>
      <Persons search={search} persons={persons}/>
    </div>
  )
}

export default App;