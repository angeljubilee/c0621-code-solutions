const fs = require('fs');

const files = process.argv.slice(2);

async function cat(filenames) {
  let result = '';
  for (var i = 0; i < filenames.length; i++) {
    const file = filenames[i];
    await fs.readFile(file, 'utf8', (err, data) => {
      if (err) throw err;
      result += data;
    });
  }
  console.log(result);
}

cat(files);
