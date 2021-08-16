const express = require('express');

const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  var result = [];
  for (const key in grades) {
    result.push(grades[key]);
  }
  res.status(200).json(result);
});

app.listen(3000, () => {
  // console.log('Server listening on port 3000');
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  res.status(201).json(grades[nextId]);
  nextId++;
});
