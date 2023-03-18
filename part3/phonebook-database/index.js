require('dotenv').config()

const express = require('express')
const Person = require('./models/person')

const app = express()
app.use(express.json())

app.get('/api/persons', (request, response) => {
    Person.find({})
        .then(persons => {
            response.json(persons)
        })
})

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
        .then(persons => {
            response.json(persons)
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
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


const errorHandler = (error, request, response, next) => {
    console.error(error.message);

    if (error.name === 'CastError')
        response.status(400).send({ error: 'malformated id' })
    
    next(error)
}

app.use(errorHandler)


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`the server run on ${PORT}`);
})