/* exported todos */

var todos = [];

var previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON) {
  todos = JSON.parse(previousTodosJSON);
}

window.addEventListener('beforeunload', handleStorage);

function handleStorage(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}
