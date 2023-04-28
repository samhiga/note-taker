const express = require('express');
const path = require('path');
const {readNotes, writeNotes} = require('./utils/dbHelpers')
const uniqid = require('uniqid');
const PORT = 3001;

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    readNotes()
    .then(notes => {
      res.json(JSON.parse(notes));
    })
});
 
app.post('/api/notes', (req, res) => {
      
      readNotes()
      .then(notes => {
          const parsedNotes = JSON.parse(notes)
          const newNote = {
              id: uniqid(),
              title: req.body.title,
              text: req.body.text
            }
            parsedNotes.push(newNote)
            writeNotes(parsedNotes)
            .then(() => {
                res.json(parsedNotes)
            })
        })
        .catch(err => {
            console.error(err)
        })
         
    })
    
    app.get('/notes', (req, res) =>
      res.sendFile(path.join(__dirname, '/public/notes.html'))
    );
    app.get('/', (req, res) =>
      res.sendFile(path.join(__dirname, '/public/index.html'))
    );

    app.delete('/api/notes/:id', (req, res) => {
        const { id } = req.params;
    
        readNotes()
        .then(notes => {
            const parsedNotes = JSON.parse(notes)
            const delNote = parsedNotes.findIndex(note => note.id == id);
    
            if (delNote !== -1) {
                parsedNotes.splice(delNote, 1);
                writeNotes(parsedNotes)
                .then(() => {
                    res.json(parsedNotes)
                })
                .catch(err => {
                    console.error(err)
                })
            } else {
                res.status(404).send('Note not found')
            }
        })
        .catch(err => {
            console.error(err)
        })
    });
    
    app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);