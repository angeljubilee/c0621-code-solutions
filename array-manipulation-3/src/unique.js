/* exported unique */

/*  result = []
  for item in array
    check if it's in results
    if not push onto result
  return result
*/
function unique(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}
