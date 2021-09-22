/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {

  let node = list;
  let tail;
  while (node) {
    tail = node;
    node = node.next;
  }

  tail.next = new LinkedList(value);
  return list;

}
