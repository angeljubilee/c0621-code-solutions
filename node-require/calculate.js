const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const operations = {
  plus: add,
  minus: subtract,
  times: multiply,
  over: divide
};

const op = operations[process.argv[3]];
console.log('result: ', op(parseInt(process.argv[2]),
  parseInt(process.argv[4])));
