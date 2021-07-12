var books = [
  {
    isbn: '98234059820939',
    title: 'Book1',
    author: 'Arther1'
  },
  {
    isbn: '98234059345239',
    title: 'Book2',
    author: 'Arther2'
  },
  {
    isbn: '98214349820939',
    title: 'Book3',
    author: 'Arther3'
  }
];

console.log('books', books);
console.log('typeof books', typeof books);

var stringified = JSON.stringify(books);
console.log('stringified', stringified);
console.log('typeof stringified', typeof stringified);

var student = '{ "id" : "30", "name" : "Jacob Smith" }';
console.log('student', student);
console.log('typeof student', typeof student);

var jObj = JSON.parse(student);
console.log('jObj', jObj);
console.log('typeof jObj', typeof jObj);
