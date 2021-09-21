/* exported countValues */

function countValues(stack) {
  let count = 0;
  while (1) {
    const value = stack.pop();
    if (value === undefined) {
      break;
    }
    count++;
  }

  return count;
}
