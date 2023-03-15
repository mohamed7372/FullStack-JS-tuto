const mongosse = require('mongoose')

const password = process.argv[2]
const url = `mongodb+srv://benrabahmohamed530:${password}@cluster0.owhxjth.mongodb.net/phonebook?retryWrites=true&w=majority`

const name = process.argv[3]
const phone = process.argv[4]

mongosse.set('strictQuery')
mongosse.connect(url)

const phonebookSchema = new mongosse.Schema({
    name: String,
    phone: String,
})

const Phonebook = mongosse.model('Phonebook', phonebookSchema)

const phonebook = new Phonebook({
    name: name,
    phone: phone,
})

// ## fetching object from database 
if (process.argv.length == 3) {
    console.log('phonebook:');
    Phonebook.find({}).then(result => {
        result.forEach(note => {
            console.log(`${note.name} ${note.phone}`);
        })
        mongosse.connection.close()
    })
    process.exit(1)
}

// ## save new phonebook
phonebook.save().then(result => {
    console.log(`added ${name} number ${phone} to phonebbok`);
    mongosse.connection.close()
})