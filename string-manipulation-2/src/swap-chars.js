/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  if (!string || firstIndex > secondIndex || firstIndex > (string.length - 1) ||
    secondIndex > (string.length - 1)) {
    return string;
  }
  var result = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      result += string[secondIndex];
    } else if (i === secondIndex) {
      result += string[firstIndex];
    } else {
      result += string[i];
    }
  }
  return result;
}
