/* exported filterOutStrings */
function filterOutStrings(values) {
  var nums = [];
  for (var i = 0; i < values.length; i++) {
    if ((typeof values[i]) !== 'string') {
      nums.push(values[i]);
    }
  }
  return nums;
}

/* function filterOutStrings(values) {
  return values.filter(value => typeof value !== 'string');
} */
