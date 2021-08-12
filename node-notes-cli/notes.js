const data = require('./data.json');
const fs = require('fs');

function createNote(note) {
  if (!note) {
    console.log('Please enter a note you would like to remember');
    return;
  }
  data.notes[data.nextId] = note;
  data.nextId++;

  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}

function readNotes() {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
}

function updateNote(id, note) {
  if (!id || !note) {
    console.log('Please enter a note id of the note you would like to update and a note');
    return;
  }
  data.notes[id] = note;
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}

function deleteNote(id) {
  if (!id) {
    console.log('Please enter a note id');
    return;
  }
  delete data.notes[id];
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}

module.exports = { createNote, readNotes, updateNote, deleteNote };
