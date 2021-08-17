const express = require('express');
const data = require('./data.json');
const fs = require('fs');

const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const key in data.notes) {
    notesArray.push(data.notes[key]);
  }
  res.status(200).json(notesArray);
});

app.use('/api/notes/:id', (req, res, next) => {
  const id = req.params.id;
  if (id < 0) {
    const err = {
      error: 'id must be a positive integer'
    };
    res.status(400).json(err);
    return;
  }

  if (!data.notes[id]) {
    const err = {
      error: `cannot find note with ${id}`
    };
    res.status(404).send(err);
    return;
  }
  next();
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  res.status(200).json(data.notes[id]);
});

app.post('/api/notes', (req, res) => {
  const request = req.body;

  if (!request.content) {
    const error = {
      error: 'content is a required field'
    };
    res.status(400).send(error);
    return;
  }

  const notesId = data.nextId;
  const newNote = {};
  newNote.id = notesId;
  newNote.content = request.content;
  data.notes[notesId] = newNote;
  data.nextId++;

  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).json(data.notes[notesId]);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (data.notes[id]) {
    delete data.notes[id];
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        return;
      }
      res.sendStatus(204);
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  data.notes[id] = req.body;
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
      return;
    }
    res.status(200).json(data.notes[id]);
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log('Server listening on port 3000');
});
