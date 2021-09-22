/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let value;
  for (let i = 0; i <= index; i++) {

    value = queue.dequeue();

    if (queue.peek() === undefined || i === index) {
      break;
    }

    queue.enqueue(value);

  }

  return value;
}
