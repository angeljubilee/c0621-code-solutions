function ExampleConstructor() {

}

console.log('prototype', ExampleConstructor.prototype);
console.log('typeof', typeof ExampleConstructor);
var newExample = new ExampleConstructor();
console.log('newExample', newExample);
console.log('new Example instanceof ExampleConstructor', newExample instanceof ExampleConstructor);
