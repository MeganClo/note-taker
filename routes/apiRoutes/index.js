const router = require('express').Router();
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');
let {notes} = require("../../db/db.json");
console.log(notes);


// gets all notes
router.get('/notes', (req, res) => {
    res.json(notes);
});

// gets note by id
router.get('/notes/:id', (req, res) => {
    const foundNote = notes.filter(note => note.id === parseInt(req.params.id));
    if (!foundNote) {
        res.status(400).send("Note not found");
    } else {
       res.send(foundNote);
    }
});

// creates a new note and gives new id
router.post('/notes', (req, res) => {
    res.send(req.body);
    const newNote = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text
    }
    // making sure each note includes a title
    if (!newNote.title) {
        return res.status(400).send("Please include a title for your note.");
    }
    // adding the new note to the json file
    notes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    console.log(notes);
    return newNote;
});

// delete a note
router.delete('/notes/:id', (req, res) => {
    const found = notes.some(note => note.id === req.params.id);
    if (!found) {
        res.status(400).send("Note not found");

    } else {
        console.log("note deleted!")
        res.json(notes = notes.filter(note => note.id !== req.params.id));
        console.log(notes);
        fs.writeFileSync(
            path.join(__dirname, '../../db/db.json'),
            JSON.stringify({ notes }, null, 2)
        );

    }
    
});
// POST /api/notes should receive a new note to save on the request body, 
// add it to the db.json file, and then return the new note to the client. 


module.exports = router;