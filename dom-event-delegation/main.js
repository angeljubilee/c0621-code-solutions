var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('event.target', event.target);
  console.log('event.target.tagname', event.target.tagName);
  if (event.target && event.target.matches('button')) {
    var closestElement = event.target.closest('.task-list-item');
    closestElement.remove();
  }
}
