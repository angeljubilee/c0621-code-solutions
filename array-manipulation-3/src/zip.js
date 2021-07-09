/* exported zip */
function zip(first, second) {
  var pair = [];
  var result = [];
  for (var i = 0; i < Math.min(first.length, second.length); i++) {
    pair.push(first[i]);
    pair.push(second[i]);
    result.push(pair);
    pair = [];
  }
  return result;
}
