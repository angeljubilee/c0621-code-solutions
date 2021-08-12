const { readData, createNote, updateNote, deleteNote } = require('./notes');

const [, , cmd, ...args] = process.argv;

switch (cmd) {
  case 'read':
    readData();
    break;
  case 'create':
    createNote(args[0]);
    break;
  case 'update':
    updateNote(args[0], args[1]);
    break;
  case 'delete':
    deleteNote(args[0]);
}
