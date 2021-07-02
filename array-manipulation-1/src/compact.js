/* exported compact */
function compact(array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      results.push(array[i]);
    }
  }
  return results;
}
