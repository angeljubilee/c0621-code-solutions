const fs = require('fs');

fs.readFile(process.argv[2], 'UTF8', (err, data) => {
  if (err) throw err;
  fs.writeFile(process.argv[3], data, err => {
    if (err) throw err;
  });
});