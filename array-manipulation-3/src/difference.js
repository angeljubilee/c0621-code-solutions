/* exported difference */

/*  result []
  for item in first
    check if item is in second
    if not, push onto result
  for item in second
    check if item in in first
    if not, push onto result
  return result
*/
function difference(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      result.push(first[i]);
    }
  }
  for (var k = 0; k < second.length; k++) {
    if (!first.includes(second[k])) {
      result.push(second[k]);
    }
  }
  return result;
}
