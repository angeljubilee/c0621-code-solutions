/* exported postpone */

function postpone(queue) {
  const value = queue.dequeue();
  if (value !== undefined) {
    queue.enqueue(value);
  }
}
