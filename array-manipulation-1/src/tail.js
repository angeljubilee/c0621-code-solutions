/* exported tail */
function tail(array) {
  var results = [];
  for (var i = 1; i < array.length; i++) {
    results.push(array[i]);
  }
  return results;
}
