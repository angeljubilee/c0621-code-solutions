/* exported titleCase */

/*  var result = ''
    var words = String split on ' '
    var minor = [for and, or, nor, but, as, at, by, for, in, of, on, per, to]
    for word in words
        Check each word to see if it needs to be capitalized:
          Capitalize first word
          Check if word in lowercase is 'javascript'
            result += 'JavaScript'
          Check if word in lower is 'api'
            result += 'API'
          Check if word is in minor and if the previous 2 char is NOT ':',
            if so leave lowercase
              result += word.toLowerCase()
          else capitalize
            result += word[0].toUpperCase() + word.substr(1);
    return result;
*/

function titleCase(string) {
  var minor = ['for', 'and', 'or', 'nor', 'but', 'as', 'by', 'for', 'in',
    'of', 'on', 'per', 'to', 'the'];
  var words = string.split(' ');
  var result = '';

  for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase();

    if (word.substr(0, 10) === 'javascript') {
      result += 'JavaScript' + word.substr(10);
    } else if (word.substr(0, 3) === 'api') {
      result += 'API' + word.substr(3);
    } else if (i === 0) {
      result += capitalize(word);
    } else if (i > 0 && words[i - 1][words[i - 1].length - 1] === ':') {
      result += capitalize(word);
    } else if (word.includes('-')) {
      var hyphenIndex = word.indexOf('-');
      result += word[0].toUpperCase() + word.substr(1, hyphenIndex);
      result += word[hyphenIndex + 1].toUpperCase() + word.substr(hyphenIndex + 2);
    } else if (minor.includes(word)) {
      result += word;
    } else {
      result += capitalize(word);
    }
    result += ' ';
  }
  result = result.trimEnd();
  return result;
}

function capitalize(string) {
  var result = string[0].toUpperCase() + string.substr(1);
  return result;
}
