var student = {
  firstName: 'Angel',
  lastName: 'Lee',
  age: 35
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('fullName: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'HIS Analyst';
console.log('livesInIrvine: ', student.livesInIrvine);
console.log('previousOccupation: ', student.previousOccupation);

var vehicle = {
  make: 'Tesla',
  model: 'Model 3',
  year: '2018'
};
vehicle['color'] = 'White';
vehicle['isConvertible'] = false;
console.log('vehicle color: ', vehicle['color']);
console.log('vehicle isConvertible: ', vehicle['isConvertible']);

var pet = {
  name: 'Hime',
  type: 'Dog'
};
delete pet.name;
delete pet.type;
console.log('pet: ', pet);
