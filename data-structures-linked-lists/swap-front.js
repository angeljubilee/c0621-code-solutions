/* exported swapFront */

function swapFront(list) {
  const first = list;
  if (list.next !== null) {
    const second = list.next;
    first.next = second.next;
    second.next = first;
    list = second;
  }
  return list;
}
