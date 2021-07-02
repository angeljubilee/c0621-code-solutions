/* exported isVowel */
function isVowel(char) {
  var capitalChar = char.toUpperCase();
  switch (capitalChar) {
    case ('A') :
      return true;
    case ('E') :
      return true;
    case ('I') :
      return true;
    case ('O') :
      return true;
    case ('U') :
      return true;
    default:
      return false;
  }
}
