/* exported lastChars */
function lastChars(length, string) {
  if (!string || length > string.length) {
    return string;
  }
  var result = '';
  for (var i = string.length - length; i < string.length; i++) {
    result += string[i];
  }
  return result;
}
