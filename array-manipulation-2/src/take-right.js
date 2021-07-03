/* exported takeRight */
/*  check if count is greater than array length
      if so, return array
    result []
    for item in array from end - count to end
      add item to result
    return result
*/
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
