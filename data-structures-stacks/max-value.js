/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;

  while (1) {
    const value = stack.pop();
    if (value === undefined) {
      break;
    }
    if (value > max) {
      max = value;
    }
  }
  return max;
}
