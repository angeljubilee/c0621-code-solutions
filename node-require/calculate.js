const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

let f;
switch (process.argv[3]) {
  case 'plus':
    f = add;
    break;
  case 'minus':
    f = subtract;
    break;
  case 'times':
    f = multiply;
    break;
  case 'over':
    f = divide;
    break;
  default:
    f = add;
}

console.log('result: ', f(parseInt(process.argv[2]),
  parseInt(process.argv[4])));
