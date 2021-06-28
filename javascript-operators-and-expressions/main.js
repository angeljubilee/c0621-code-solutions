var width = 8;
var height = 9;
var area = width * height;

console.log('area: ', area);
console.log('type of area: ', typeof area);

var bill = 90;
var payment = 120;
var change = payment - bill;
console.log('change: ', change);
console.log('type of change: ', typeof change);

var quizzes = 90;
var midterm = 95;
var final = 85;
var grade = (quizzes + midterm + final) / 3;
console.log('grade: ', grade);
console.log('typeof grade: ', typeof grade);

var firstName = 'Angel';
var lastName = 'Lee';
var fullName = firstName + ' ' + lastName;
console.log('fullName: ', fullName);
console.log('typeof fullName: ', typeof fullName);

var ph = 8;
var isAcidic = ph < 7;
console.log('isAcidic: ', isAcidic);
console.log('typeof isAcidic: ', typeof isAcidic);

var motto = fullName;
motto = fullName + ' is the GOAT';
console.log('motto: ', motto);
console.log('typeof motto: ', typeof motto);
