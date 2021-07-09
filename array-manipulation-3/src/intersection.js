/* exported intersection */
function intersection(first, second) {
  var results = [];
  for (var i = 0; i < first.length; i++) {
    if ((!results.includes(first[i]) && second.includes(first[i]))) {
      results.push(first[i]);
    }
  }
  return results;
}
