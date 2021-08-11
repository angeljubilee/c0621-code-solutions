const fs = require('fs');

const files = process.argv.slice(2);

function cat(filenames) {
  let result = '';
  filenames.forEach(async file => {
    await fs.readFile(file, 'utf8', (err, data) => {
      if (err) throw err;
      result += data;
    });
  });
  console.log(result);
}

cat(files);
