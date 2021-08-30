const express = require('express');
const path = require('path');

const app = express();
const pubPath = path.join(__dirname, 'public');

const expressStatic = express.static(pubPath);
app.use(expressStatic);
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
