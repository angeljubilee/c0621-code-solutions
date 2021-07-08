/* exported isAnagram */
/*  object occurrencesFirstString - stores number of occurrences of each char
    for char in firstString
      skip ' '
      count the number of times the char appears in the firstString
      store results in occurrencesFirstString
    for char in secondString
      skip ' '
      count the number of times the char appears in the secondString
      store result in occurencesSecondString
    Compare occurrencesFirstSTring and occurrencesSecondString
    return result
*/
function isAnagram(firstString, secondString) {
  var occurrencesFirstString = {};
  for (var i = 0; i < firstString.length; i++) {
    var char1 = firstString[i];
    if (char1 === ' ') continue;
    if (occurrencesFirstString[char1]) {
      occurrencesFirstString[char1]++;
    } else {
      occurrencesFirstString[char1] = 1;
    }
  }
  var occurrencesSecondString = {};
  for (var k = 0; k < secondString.length; k++) {
    var char2 = secondString[k];
    if (char2 === ' ') continue;
    if (occurrencesSecondString[char2]) {
      occurrencesSecondString[char2]++;
    } else {
      occurrencesSecondString[char2] = 1;
    }
  }
  for (var key in occurrencesFirstString) {
    if (occurrencesFirstString[key] !== occurrencesSecondString[key]) {
      return false;
    }
  }
  return true;
}
