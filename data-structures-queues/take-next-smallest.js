/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let current = queue.dequeue();

  if (current === undefined) {
    return;
  }

  while (queue.peek() !== undefined) {
    const successor = queue.peek();

    if (current <= successor) {
      return current;
    }
    queue.enqueue(current);
    current = queue.dequeue();
  }

  return current;
}
