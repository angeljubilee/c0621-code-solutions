/* exported take */
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
