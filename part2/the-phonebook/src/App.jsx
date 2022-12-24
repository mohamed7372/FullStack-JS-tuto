import { useState, useEffect } from 'react'
import personService from './services/persons'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState(null)
  const [type, setType] = useState('success')

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
    const person = persons.find(p => p.name === newName)
    // update phone number
    if (person !== undefined) {
      const personObject = { ...person, number: newNumber }
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(person.id, personObject)
          .then(returnPerson => {
            setPersons(persons.map(person => person.name !== newName ? person : returnPerson ))
            setNewName('')
            setNewNumber('')
          })
      }
    }
    // add a new phone number
    else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
  
      personService
        .create(personObject)
        .then(returnPerson => {
          setType('success')
          setMessage(`Added ${returnPerson.name}`)
          setPersons(persons.concat(personObject))
          setNewName('')
          setNewNumber('')
          setTimeout(() => {
            setMessage(null)
          }, 3000);
        })
    }
  }

  const removePerson = (id, person_name) => {
    console.log('delete', id);
    if (window.confirm(`Delete ${person_name} ?`)) {
      personService
        .remove(id)
        .then(returnPerson => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          setType('error')
          setMessage(`Information of ${person_name} has already removed from server`)
          setPersons(persons.filter(person => person.id !== id))
          setTimeout(() => {
            setMessage(null)
          }, 3000);
        })
    }
  }

  const personsSearch = search === '' 
    ? persons
    : persons.filter(person => person.name.includes(search))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type={type} />
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