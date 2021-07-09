/* exported flatten */
/* result []
   for item in array
   check if item is an array
     push contents of item [] onto result
*/
function flatten(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'object') {
      for (var j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
