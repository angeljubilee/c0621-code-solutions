/* exported numVowels */
function numVowels(string) {
  var lowerString = string.toLowerCase();
  var count = 0;
  for (var i = 0; i < lowerString.length; i++) {
    switch (lowerString[i]) {
      case ('a'):
      case ('e'):
      case ('i'):
      case ('o'):
      case ('u'):
        count++;
    }

  }
  return count;
}
