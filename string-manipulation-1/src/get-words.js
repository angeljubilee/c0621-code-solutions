/* exported getWords */
/*  function getWords(string) {
  if (string) {
    return string.split(' ');
  }
  return [];
} */

function getWords(string) {
  var results = [];
  var word = '';

  if (!string) {
    return [];
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      results.push(word);
      word = '';
    } else {
      word += string[i];
    }
  }
  results.push(word);
  return results;
}
