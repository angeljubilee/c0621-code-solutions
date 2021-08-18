const takeAChance = require('./take-a-chance');

const chance = takeAChance('Angel');

chance.then(value => {
  console.log(value);
});

chance.catch(error => {
  console.error(error.message);
});
