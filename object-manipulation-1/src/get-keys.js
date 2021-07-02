/* exported getKeys */
function getKeys(object) {
  var results = [];
  for (var key in object) {
    results.push(key);
  }
  return results;
}
