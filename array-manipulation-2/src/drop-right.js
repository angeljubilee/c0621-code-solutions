/* exported dropRight */

/*  result []
    for each item in array from index 0 to index end minus count
      push item onto result
*/

function dropRight(array, count) {
  if (count > array.length) {
    return array;
  }
  var result = [];
  for (var i = 0; i < array.length - count; i++) {
    result.push(array[i]);
  }
  return result;
}
