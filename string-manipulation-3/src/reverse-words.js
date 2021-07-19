/* exported reverseWords */

/*  var words []
    Split string by ' ', store results in words
    var result = ""
    For each word in string
      Reverse the word, add to result
    Trim last space
    return result
*/

function reverseWords(string) {
  var words = string.split(' ');
  var result = '';
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    for (var j = word.length - 1; j >= 0; j--) {
      result += word[j];
    }
    result += ' ';
  }
  result = result.trimEnd();
  return result;
}
