/* exported includesSeven */
function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}

/* function includesSeven(array) {
  return (array.find(num => num === 7) != null);
} */
