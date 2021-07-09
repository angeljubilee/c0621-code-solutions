/* exported take */
/* check if count > array length
    if so, return array
   results []
   for item in array from index 0 to index count
    add item to results
  return result
*/
function take(array, count) {
  if (count > array.length) {
    return array;
  }

  var results = [];
  for (var i = 0; i < count; i++) {
    results.push(array[i]);
  }
  return results;
}
