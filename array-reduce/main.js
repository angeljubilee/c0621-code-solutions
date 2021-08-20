const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((acc, curr) => acc + curr);
const product = numbers.reduce((acc, curr) => acc * curr);
const balance = account.reduce((acc, curr) => {
  if (curr.type === 'deposit') {
    acc += curr.amount;
  } else {
    acc -= curr.amount;
  }
  return acc;
}, 0);
const composite = traits.reduce((acc, curr) => {
  for (const key in curr) {
    acc[key] = curr[key];
  }
  return acc;
}, {});

console.log('sum: ', sum);
console.log('product: ', product);
console.log('balance: ', balance);
console.log('composite: ', composite);
