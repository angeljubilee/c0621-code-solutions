/* exported chunk */
/*
  array results
  array result
  count

  for item in array
    add item to result
    increment count
    if count eq size
      push result onto results
      clear result
      reset count
  check result for leftover items
  if so, push result onto results
*/
function chunk(array, size) {
  if (size > array.length) {
    return array;
  }
  var results = [];
  var result = [];
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    result.push(array[i]);
    count++;
    if (count >= size) {
      results.push(result);
      result = [];
      count = 0;
    }
  }
  if (result.length) {
    results.push(result);
  }
  return results;
}
