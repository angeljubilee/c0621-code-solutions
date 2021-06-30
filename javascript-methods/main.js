var num1 = 20;
var num2 = 83;
var num3 = 12;

var maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue: ', maximumValue);

var heroes = [
  'Wolverine', 'Spiderman', 'Captain Marvel', 'Black Panther'
];

var randomNumber = Math.random();
randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

var library = [
  {
    title: 'Book1',
    author: 'Author1'
  },
  {
    title: 'Book2',
    author: 'Author2'
  },
  {
    title: 'Book3',
    author: 'Author3'
  }
];

var lastbook = library.pop();
console.log('lastbook: ', lastbook);

var firstbook = library.shift();
console.log('firstbook: ', firstbook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library: ', library);

var fullName = 'Angel Lee';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
