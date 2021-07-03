/* exported takeRight */
function takeRight(array, count) {
  if (count > array.length) {
    return array;
  }
  var result = [];
  for (var i = array.length - count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
