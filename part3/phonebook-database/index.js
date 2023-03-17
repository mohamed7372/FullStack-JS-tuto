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
    const id = request.params.id

    Person.find({_id:id})
        .then(persons => {
            response.json(persons)
        })
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    
    Person.deleteOne({_id:id})
        .then(persons => {
            response.json(persons)
        })
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    const newPerson = new Person({
        name: body.name,
        number: body.number
    })

    newPerson.save().then(savedPerson => {
        response.json(savedPerson)
    })
})

app.get('/info', (request, response) => {
    Person.count({})
        .then(numOfDocs => {
            response.send(
                `<p>Phonebook has info for ${numOfDocs} people</p>${Date()}<p></p>`
                )
        })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`the server run on ${PORT}`);
})