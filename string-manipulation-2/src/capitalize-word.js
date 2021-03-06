/* exported capitalizeWord */
function capitalizeWord(word) {
  if (!word) {
    return word;
  }

  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }

  var result = '';
  result += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    result += word[i].toLowerCase();
  }
  return result;
}
