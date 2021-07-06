/* exported flatten */
/* result []
   for subarray in array
   push contents of subarray onto result
*/
function flatten(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      result.push(array[i][j]);
    }
  }
  return result;
}
