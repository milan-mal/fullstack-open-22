require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const Note = require('./models/note')

app.use(express.json())
app.use(express.static('build'))
app.use(cors())

let notes = []

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

app.get('/api/notes/:id', (request, response) => {
  console.log('EP:', request.url)
  Note.findById(request.params.id)
    .then(note => {
      console.log('note', note)
      response.json(note)
    })
    .catch((error) =>{
      console.log(`Note with this id doesn't exist.`, error.message)
  })
})

app.delete('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id).then(note => {
    response.json(note)
  })
})

app.post('/api/notes', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  })

  console.log(request.headers)
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})