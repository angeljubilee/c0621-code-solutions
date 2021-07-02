/* exported reverse */
function reverse(array) {
  var results = [];
  for (var i = array.length - 1; i >= 0; i--) {
    results.push(array[i]);
  }
  return results;
}
