/* exported getLength */

function getLength(list) {
  let count = 0;

  let node = list;
  while (node) {
    count++;
    node = node.next;
  }
  return count;

}
