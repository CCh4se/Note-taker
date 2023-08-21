const router = require('express').Router();
const store = require("../db/store");

const { createNewNote, deleteNote} = require('../../db/notes');

router.get('/.notes',(req, res) => {
    let results = notes;
    res.json(results);
})
// get request to save a note to json

router.post('/.notes', (req, res) => {
    req.body.id = notes.length.toString();
    let notes = createNewNote(req.body, notes);
    req.json(notes);
})
// post req from the json db 

router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})
// delete req  to delete a note from the json db

module.exports = router; 