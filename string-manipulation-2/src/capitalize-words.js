/* exported capitalizeWords */
function capitalizeWords(string) {
  if (!string) {
    return '';
  }

  var result = '';
  result += string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      result += string[i].toUpperCase();
    } else {
      result += string[i].toLowerCase();
    }
  }
  return result;
}
