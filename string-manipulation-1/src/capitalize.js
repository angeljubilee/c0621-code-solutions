/* exported capitalize */
function capitalize(word) {
  var result = '';
  result += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    result += word[i].toLowerCase();
  }
  return result;
}
