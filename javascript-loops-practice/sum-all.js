/* exported sumAll */
function sumAll(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

/* function sumAll(numbers) {
  return numbers.reduce((acc, curr) => acc + curr);
} */
