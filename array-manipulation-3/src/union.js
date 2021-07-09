/* exported union */
/*  Go through item in both arrays
    If item is not already in result, push onto result
*/
function union(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (!result.includes(first[i])) {
      result.push(first[i]);
    }
  }
  for (var k = 0; k < second.length; k++) {
    if (!result.includes(second[k])) {
      result.push(second[k]);
    }
  }
  return result;
}
