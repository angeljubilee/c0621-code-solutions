/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const top = stack.pop();
  const result = stack.pop();

  if (result !== undefined) {
    stack.push(result);
  }

  if (top !== undefined) {
    stack.push(top);
  }

  return result;
}
