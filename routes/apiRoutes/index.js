const router = require('express').Router();
const notes = require("../../db/db.json");
console.log(notes);
// The following API routes should be created:

// GET /api/notes should read the db.json file and return all saved notes as JSON.
// gets all notes
router.get('/', (req, res) => {
    res.json(notes);
});

// gets note by id
router.get('/:id', (req, res) => {
    const found = notes.some(note => note.id === parseInt(req.params.id));
    if (found) {
        res.json(notes.filter(note => note.id === parseInt(req.params.id)));
    } else {
        res.status(400).send("Note not found");
    }
});
// POST /api/notes should receive a new note to save on the request body, 
// add it to the db.json file, and then return the new note to the client. 
// You'll need to find a way to give each note a unique id when it's saved 
// (look into npm packages that could do this for you).

module.exports = router;