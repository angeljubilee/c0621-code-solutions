/* exported dropRight */
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
