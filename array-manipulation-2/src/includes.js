/* exported includes */
/*  for item in array
      compare item to value
      return true if match
    at end of loop, return false
*/
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
