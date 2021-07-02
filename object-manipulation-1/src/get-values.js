/* exported getValues */
function getValues(object) {
  var results = [];
  for (var key in object) {
    results.push(object[key]);
  }
  return results;
}
