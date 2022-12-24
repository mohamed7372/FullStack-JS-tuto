import { useState, useEffect } from 'react'
import personService from './services/persons'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const hook = () => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }

  useEffect(hook, [])

  const handleChangeName = event => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = event => {
    setNewNumber(event.target.value)
  }

  const handleSearch = event => {
    setSearch(event.target.value)
  }

  const addNewPerson = event => {
    event.preventDefault()

    for (const p of persons) {
      if (p.name === newName) {
        alert(`${newName} is already added to phonebook`)
        setNewName('')
        return
      }
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    personService
      .create(personObject)
      .then(returnPerson => {
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      })
  }

  const removePerson = (id, person_name) => {
    console.log('delete', id);
    if (window.confirm(`Delete ${person_name} ?`)) {
      personService
        .remove(id)
        .then(returnPerson => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  const personsSearch = search === '' 
    ? persons
    : persons.filter(person => person.name.includes(search))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <h2>add a new</h2>
      <PersonForm
        addNewPerson={addNewPerson}
        newName={newName} handleChangeName={handleChangeName}
        newNumber={newNumber} handleChangeNumber={handleChangeNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={personsSearch} handleDeletePerson={removePerson} />
    </div>
  )
}

export default App