/* exported countdown */
function countdown(number) {
  var nums = [];
  for (var i = number; i >= 0; i--) {
    nums.push(i);
  }
  return nums;
}
