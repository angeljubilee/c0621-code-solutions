/* exported removeTail */

function removeTail(list) {
  let node = list;
  if (!node.next) {
    return;
  }

  while (node.next.next) {
    node = node.next;
  }
  node.next = null;
}
