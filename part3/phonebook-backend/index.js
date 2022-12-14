const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(morgan((tokens, req, res) => {
    const body = tokens.method(req, res) === 'POST'
        ? JSON.stringify(req.body)
        : '';
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        body    
    ].join(' ')
}))

let persons = [
    { 
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
    },
    { 
        "id": 2,
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
    },
    { 
        "id": 3,
        "name": "Dan Abramov", 
        "number": "12-43-234345"
    },
    { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    response.send(`
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${new Date()}</p>
        `)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)
    if (person)
        response.json(person)
    else
        response.status(404).end()
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id)

    response.send(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response
            .status(400)
            .json({error: 'The name or number is missing'})
    }

    const person = persons.filter(p => p.name === body.name)
    if (!person){
        return response
            .status(400)
            .json({error: 'Name must be unique'})
    }

    const new_person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(new_person)
    response.json(new_person)
})

const generateId = () => {
    let id = Math.max(...persons.map(person => person.id))
    return id + 1
}

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})