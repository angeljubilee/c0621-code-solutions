const data = require('./data.json');
const fs = require('fs');

let { nextId, notes } = data;

function createNote(note) {
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
  data.notes[id] = note;
  console.log('data: ', data);
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}

function deleteNote(id) {
  delete data.notes[id];
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}

module.exports = { createNote, readData, updateNote, deleteNote };
