/* exported drop */
function drop(array, count) {
  if (count > array.length) {
    return array;
  }
  var results = [];
  for (var i = count; i < array.length; i++) {
    results.push(array[i]);
  }
  return results;
}
