/* exported isVowel */
function isVowel(char) {
  var capitalChar = char.toUpperCase();
  switch (capitalChar) {
    case ('A') :
    case ('E') :
    case ('I') :
    case ('O') :
    case ('U') :
      return true;
    default:
      return false;
  }
}
