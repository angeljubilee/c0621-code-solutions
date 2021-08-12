const data = require('./data.json');
const fs = require('fs');

let { nextId, notes } = data;

function createNote(note) {
  if (!note) {
    console.log('Please enter a note you would like to remember');
    return;
  }
  data.notes[nextId] = note;
  nextId++;

  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}

function readData() {
  for (const key in notes) {
    console.log(`${key}: ${notes[key]}`);
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

module.exports = { createNote, readData, updateNote, deleteNote };
