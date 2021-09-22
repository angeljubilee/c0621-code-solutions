/* exported updateHead */

function updateHead(list, value) {
  const head = list.data;
  list.data = value;
  list.data.next = head;
}
