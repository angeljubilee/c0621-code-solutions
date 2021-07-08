/* exported drop */

/*  results []
    for item in array from index count to end
      add item to results
*/
function drop(array, count) {
  if (count > array.length) {
    return [];
  }
  var results = [];
  for (var i = count; i < array.length; i++) {
    results.push(array[i]);
  }
  return results;
}
