/* exported getTail */

function getTail(list) {
  let node = list;
  let value;
  while (node) {
    value = node.data;
    node = node.next;
  }
  return value;
}
