/* exported firstChars */
function firstChars(length, string) {
  if (!string || length > string.length) {
    return string;
  }
  var result = '';
  for (var i = 0; i < length; i++) {
    result += string[i];
  }
  return result;
}
