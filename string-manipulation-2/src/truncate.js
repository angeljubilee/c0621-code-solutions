/* exported truncate */
function truncate(length, string) {
  if (!string) {
    return '...';
  }
  if (length > string.length) {
    return string + '...';
  }

  var result = '';
  for (var i = 0; i < length; i++) {
    result += string[i];
  }
  result += '...';
  return result;
}
