require('dotenv').config()
const express = require('express')
// const cors = require('cors')
const Person = require('./models/person')

const app = express()
// app.use(cors())
app.use(express.json())

app.get('/api/persons', (request, response) => {
    Person.find({})
        .then(persons => {
            response.json(persons)
        })
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const per = persons.find(person => person.id === id)
    if(per)
        response.json(per)
    else
        response.status(404).end()
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

const generateId = (min, max) =>
    Math.floor(Math.random() * (max - min) + min)


app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body || !body.name || !body.number)
        return response.status(400).json({
            error: 'missing values'
        })
    
    const per = persons.find(person => person.name === body.name)
    if (per)
        return response.status(400).json({
            error: 'name must be unique'
        })
        
    const person = {
        id: generateId(0, 1000),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)
    response.json(person)
})

app.get('/info', (request, response) => {
    response.send(
        `<p>Phonebook has info for ${persons.length} people</p>${Date()}<p></p>`
    )
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`the server run on ${PORT}`);
})