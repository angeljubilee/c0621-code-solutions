/* exported isPalindromic */
/*  var i - index into the string
    for char in string from start to midpoint
      compare char[i] to char[endpoint - i]
      if false, return false
    after loop return true

    could also reverse the string and compare to the original string
*/
function isPalindromic(string) {
  for (var i = 0; i <= string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
}
